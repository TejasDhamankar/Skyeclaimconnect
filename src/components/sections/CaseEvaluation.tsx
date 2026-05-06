"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  User,
  Mail,
  Phone,
  Scale,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CaseEvaluationFormData, FormStatus } from "@/types/form";
import { getAllCaseTypes } from "@/lib/utils";

declare global {
  interface Window {
    trustedFormCertIdCallback?: (id: string) => void;
    trustedFormCertUrlCallback?: (url: string) => void;
  }
}

interface ExtendedFormData extends CaseEvaluationFormData {
  agreeToQualification: boolean;
  agreeToTermsAndContact: boolean;
  agreeToDisclaimer: boolean;
  trustedFormCertUrl?: string;
  jornayaLeadId?: string;
}

const CaseEvaluation = () => {
  const [formData, setFormData] = useState<ExtendedFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    caseType: "",
    exposurePeriod: "",
    medicalCondition: "",
    additionalInfo: "",
    agreeToTerms: false,
    agreeToQualification: false,
    agreeToTermsAndContact: false,
    agreeToDisclaimer: false,
    trustedFormCertUrl: "",
    jornayaLeadId: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: "", message: "" });
  const [isTrustedFormLoaded, setIsTrustedFormLoaded] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const tfUrlRef = useRef<string>("");
  const scriptLoadedRef = useRef(false);

  const caseTypes = getAllCaseTypes();

  // Load TrustedForm SDK with the CORRECT script from their documentation
  useEffect(() => {
    if (scriptLoadedRef.current) return;

    // Wait for the component to mount and form to be in DOM
    const timer = setTimeout(() => {
      console.log("Loading TrustedForm SDK...");

      // Set up callbacks before loading the script
      window.trustedFormCertUrlCallback = (url: string) => {
        console.log("TrustedForm URL received via callback:", url);
        tfUrlRef.current = url;
        setFormData((prev) => ({ ...prev, trustedFormCertUrl: url }));
        setIsTrustedFormLoaded(true);
      };

      // Use the EXACT script they provided (with modifications for React)
      const scriptContent = `
        (function() {
          var tf = document.createElement('script');
          tf.type = 'text/javascript';
          tf.async = true;
          tf.src = ("https:" == document.location.protocol ? 'https' : 'http') +
            '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
            new Date().getTime() + Math.random();

          tf.onload = function() {
            console.log('TrustedForm script loaded successfully');

            // Check for the hidden field after load
            setTimeout(function() {
              var hiddenField = document.querySelector('input[name="xxTrustedFormCertUrl"]');
              console.log('TrustedForm hidden field found:', !!hiddenField);
              if (hiddenField) {
                console.log('TrustedForm hidden field value:', hiddenField.value);
                // Trigger callback if we have a URL
                if (hiddenField.value && window.trustedFormCertUrlCallback) {
                  window.trustedFormCertUrlCallback(hiddenField.value);
                }
              }
            }, 1000);
          };

          tf.onerror = function() {
            console.error('Failed to load TrustedForm script');
          };

          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(tf, s);
        })();
      `;

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = scriptContent;
      document.body.appendChild(script);

      scriptLoadedRef.current = true;

      // Also check periodically for the field (backup method)
      const checkInterval = setInterval(() => {
        const hiddenField = document.querySelector('input[name="xxTrustedFormCertUrl"]') as HTMLInputElement;
        if (hiddenField && hiddenField.value) {
          console.log('TrustedForm field found via polling:', hiddenField.value);
          tfUrlRef.current = hiddenField.value;
          setFormData((prev) => ({ ...prev, trustedFormCertUrl: hiddenField.value }));
          setIsTrustedFormLoaded(true);
          clearInterval(checkInterval);
        }
      }, 500);

      // Clear interval after 10 seconds to avoid infinite polling
      setTimeout(() => clearInterval(checkInterval), 10000);

    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, []); // Empty dependency array

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setFormStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    if (!formData.agreeToQualification || !formData.agreeToTermsAndContact || !formData.agreeToDisclaimer) {
      setFormStatus({
        type: "error",
        message: "You must agree to all terms and conditions to proceed.",
      });
      return;
    }

    // Get TrustedForm URL - try multiple methods
    const injectedField = document.querySelector('input[name="xxTrustedFormCertUrl"]') as HTMLInputElement | null;
    const tfUrl = injectedField?.value || tfUrlRef.current || "";

    console.log("=== TrustedForm Debug Info ===");
    console.log("Injected field found:", !!injectedField);
    console.log("Injected field value:", injectedField?.value);
    console.log("Callback value:", tfUrlRef.current);
    console.log("Final URL being sent:", tfUrl);
    console.log("==============================");

    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      const response = await axios.post("/api/contact", {
        ...formData,
        trustedFormCertUrl: tfUrl,
        jornayaLeadId: formData.jornayaLeadId || "",
      });

      console.log("Form submission response:", response.data);

      setFormStatus({
        type: "success",
        message:
          "Your case evaluation request has been submitted successfully. A legal representative will contact you shortly.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        caseType: "",
        exposurePeriod: "",
        medicalCondition: "",
        additionalInfo: "",
        agreeToTerms: false,
        agreeToQualification: false,
        agreeToTermsAndContact: false,
        agreeToDisclaimer: false,
        trustedFormCertUrl: "",
        jornayaLeadId: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        type: "error",
        message: "An error occurred. Please try again later or call our office directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="case-evaluation" className="py-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50/40">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 text-primary border-primary/30 bg-primary/5 font-bold"
          >
            100% FREE EVALUATION
          </Badge>

          <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-cyan-700 to-teal-700 bg-clip-text text-transparent">
              Begin Your
            </span>
            <br />
            <span className="text-gray-800">Secure Claim Review</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card className="border border-slate-200/80 shadow-2xl p-0 overflow-hidden bg-white/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-slate-100 to-cyan-50 text-center pb-8">
              <CardTitle className="text-2xl mt-4 font-bold text-primary">
                Verify Eligibility In Minutes
              </CardTitle>
            </CardHeader>

            <CardContent className="p-8">
              {/* Add the noscript fallback as well */}
              <noscript>
                <img src='https://api.trustedform.com/ns.gif' alt="TrustedForm" style={{display: 'none'}} />
              </noscript>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                data-tf-element="form"
                method="POST"
                id="case-evaluation-form"
              >
                <input
                  type="hidden"
                  name="jornayaLeadId"
                  value={formData.jornayaLeadId || ""}
                  readOnly
                />
                <div className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-6 text-center">Your Contact Information</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-bold text-gray-700 flex items-center">
                          <User className="w-4 h-4 mr-2 text-primary" />
                          First Name*
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="mt-2 h-12 border-2 border-gray-200 focus:border-primary"
                          required
                          data-tf-element-role="first-name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="lastName" className="text-sm font-bold text-gray-700 flex items-center">
                          <User className="w-4 h-4 mr-2 text-primary" />
                          Last Name*
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="mt-2 h-12 border-2 border-gray-200 focus:border-primary"
                          required
                          data-tf-element-role="last-name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-sm font-bold text-gray-700 flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-primary" />
                          Email Address*
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-2 h-12 border-2 border-gray-200 focus:border-primary"
                          required
                          data-tf-element-role="email"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-sm font-bold text-gray-700 flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-primary" />
                          Phone Number*
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-2 h-12 border-2 border-gray-200 focus:border-primary"
                          required
                          data-tf-element-role="phone"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Case Details */}
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-6 text-center">Case Details</h3>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="caseType" className="text-sm font-bold text-gray-700 flex items-center">
                          Case Type*
                        </Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("caseType", value)}
                          value={formData.caseType}
                        >
                          <SelectTrigger className="mt-2 h-12 border-2 border-gray-200 focus:border-primary">
                            <SelectValue placeholder="Select your case type" />
                          </SelectTrigger>
                          <SelectContent>
                            {caseTypes.map((caseType) => (
                              <SelectItem key={caseType.id} value={caseType.slug}>
                                {caseType.title}
                              </SelectItem>
                            ))}
                            <SelectItem value="other">Other / Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="additionalInfo" className="text-sm font-bold text-gray-700">
                          Additional Information
                        </Label>
                        <Textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          placeholder="Share anything else that may help us evaluate your case"
                          value={formData.additionalInfo}
                          onChange={handleInputChange}
                          className="mt-2 border-2 border-gray-200 focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Required Agreements */}
                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 space-y-4">
                    <h4 className="font-bold text-primary mb-4">Required Agreements</h4>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeToAll"
                        checked={
                          formData.agreeToQualification &&
                          formData.agreeToTermsAndContact &&
                          formData.agreeToDisclaimer
                        }
                        onCheckedChange={(checked) => {
                          const value = Boolean(checked);
                          setFormData((prev) => ({
                            ...prev,
                            agreeToQualification: value,
                            agreeToTermsAndContact: value,
                            agreeToDisclaimer: value,
                          }));
                        }}
                        className="mt-1"
                        data-tf-element-role="consent-opt-in"
                      />
                      <label
                        htmlFor="agreeToAll"
                        className="text-sm text-gray-800 cursor-pointer leading-relaxed space-y-2"
                        data-tf-element-role="consent-language"
                      >
                        <span>
                          By clicking the button above, I provide my electronic signature hereby agreeing to this
                          website&apos;s{" "}
                          <a href="/privacy-policy" className="font-semibold underline">PRIVACY POLICY</a>,{" "}
                          <a href="/tcpa-consent" className="font-semibold underline">TCPA Consent</a>{" "}
                          &amp;{" "}
                          <a href="/privacy-disclaimer" className="font-semibold underline">Privacy Disclaimer</a>.
                        </span>
                        <span className="block">
                          I expressly consent to receive marketing &amp; telemarketing contact, including calls to my
                          cellular phone, via automatic telephone dialing system, emails, and/or text messages from this
                          website and trusted partners, attorneys or their agents regarding services indicated in this
                          website. I will receive contact even if I previously registered on a state or federal do not
                          contact list.
                        </span>
                        <span className="block">
                          I understand that my consent to receive communications in this manner is not required as a
                          condition of purchasing any goods or services. My telephone company may impose charges for
                          these contacts.
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {formStatus.message && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`p-4 rounded-lg ${
                          formStatus.type === "success"
                            ? "bg-green-50 text-green-800 border border-green-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                      >
                        <div className="flex items-start">
                          {formStatus.type === "success" ? (
                            <CheckCircle2 className="mr-3 mt-0.5 flex-shrink-0 w-5 h-5" />
                          ) : (
                            <AlertCircle className="mr-3 mt-0.5 flex-shrink-0 w-5 h-5" />
                          )}
                          <p className="font-medium">{formStatus.message}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-6">
                    <Button
                      type="submit"
                      name="submit"
                      className="bg-gradient-to-r from-accent to-amber-500 text-primary font-black px-8 py-6 text-lg w-full sm:w-auto"
                      disabled={isSubmitting}
                      data-tf-element-role="submit"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="mr-2 w-5 h-5 border-2 border-primary border-t-transparent rounded-full"
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <span data-tf-element-role="submit-text">Submit My Claim Review</span>
                          <ArrowRight className="ml-3 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseEvaluation;
