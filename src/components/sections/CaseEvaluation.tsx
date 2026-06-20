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
    street: "",
    city: "",
    state: "",
    zip: "",
    caseType: "",
    exposurePeriod: "",
    medicalCondition: "",
    additionalInfo: "",
    ssn: "",
    dob: "",
    incidentDate: "",
    cancerType: "",
    isDeceased: "",
    hasSsn: "",
    talcPerineal4yr: "",
    talcBrcaNegative: "",
    diagnosed18To70: "",
    diagnosisDate: "",
    startDate: "",
    endDate: "",
    pharmacyName: "",
    pharmacyAddress: "",
    pharmacyPhone: "",
    doctorName: "",
    facilityName: "",
    facilityAddress: "",
    facilityPhone: "",
    pcpName: "",
    pcpAddress: "",
    pcpPhone: "",
    pcpEmail: "",
    medicalNotes: "",
    emergencyName: "",
    emergencyRelationship: "",
    emergencyAddress: "",
    emergencyPhone: "",
    emergencyEmail: "",
    dateOfDeath: "",
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
  const [zipError, setZipError] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const tfUrlRef = useRef<string>("");
  const scriptLoadedRef = useRef(false);

  const caseTypes = getAllCaseTypes();

  const isZipValid = (zip: string) => {
    return /^\d{5}$/.test(zip);
  };

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
    
    if (name === "zip") {
      const cleaned = value.replace(/\D/g, "").substring(0, 5);
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      
      if (cleaned.length > 0 && cleaned.length < 5) {
        setZipError("Zip code must be exactly 5 digits");
      } else {
        setZipError("");
      }
    } else if (name === "state") {
      setFormData((prev) => ({ ...prev, [name]: value.replace(/[^a-z]/gi, "").substring(0, 2).toUpperCase() }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: checked }));
  };

  const getMissingPursuingFields = () => {
    const requiredBaseFields: Array<[keyof ExtendedFormData, string]> = [
      ["firstName", "First Name"],
      ["lastName", "Last Name"],
      ["email", "Email Address"],
      ["phone", "Phone Number"],
      ["state", "State"],
      ["zip", "Zip"],
    ];

    const depoFields: Array<[keyof ExtendedFormData, string]> = [
      ["ssn", "Social Security Number"],
      ["dob", "Date of Birth"],
      ["startDate", "Use Start Date"],
      ["endDate", "Use End Date"],
      ["pharmacyName", "Pharmacy Name"],
      ["pharmacyAddress", "Pharmacy Address"],
      ["pharmacyPhone", "Pharmacy Phone"],
      ["doctorName", "Doctor Name"],
      ["facilityName", "Facility Name"],
      ["facilityAddress", "Facility Address"],
      ["facilityPhone", "Facility Phone"],
      ["pcpName", "Primary Care Provider Name"],
      ["pcpAddress", "Primary Care Provider Address"],
      ["pcpPhone", "Primary Care Provider Phone"],
      ["pcpEmail", "Primary Care Provider Email"],
      ["medicalNotes", "Medical Notes"],
      ["emergencyName", "Emergency Contact Name"],
      ["emergencyRelationship", "Emergency Contact Relationship"],
      ["emergencyAddress", "Emergency Contact Address"],
      ["emergencyPhone", "Emergency Contact Phone"],
      ["emergencyEmail", "Emergency Contact Email"],
      ["dateOfDeath", "Date of Death"],
      ["cancerType", "Cancer Type"],
    ];

    const talcFields: Array<[keyof ExtendedFormData, string]> = [
      ["cancerType", "Cancer Type"],
      ["isDeceased", "Is the person deceased?"],
      ["talcPerineal4yr", "Used talcum powder perineally for 4+ years"],
      ["talcBrcaNegative", "BRCA negative"],
      ["diagnosed18To70", "Diagnosed between ages 18 and 70"],
      ["diagnosisDate", "Diagnosis Date"],
      ["hasSsn", "Has Social Security Number"],
    ];

    const requiredFields =
      formData.caseType === "depo-provera"
        ? [...requiredBaseFields, ...depoFields]
        : formData.caseType === "talcum-powder"
          ? [...requiredBaseFields, ...talcFields]
          : [];

    return requiredFields
      .filter(([field]) => !String(formData[field] || "").trim())
      .map(([, label]) => label);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.caseType) {
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

    const missingPursuingFields = getMissingPursuingFields();
    if (missingPursuingFields.length > 0) {
      setFormStatus({
        type: "error",
        message: `Please complete the required campaign fields: ${missingPursuingFields.join(", ")}.`,
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
        street: "",
        city: "",
        state: "",
        zip: "",
        caseType: "",
        exposurePeriod: "",
        medicalCondition: "",
        additionalInfo: "",
        ssn: "",
        dob: "",
        incidentDate: "",
        cancerType: "",
        isDeceased: "",
        hasSsn: "",
        talcPerineal4yr: "",
        talcBrcaNegative: "",
        diagnosed18To70: "",
        diagnosisDate: "",
        startDate: "",
        endDate: "",
        pharmacyName: "",
        pharmacyAddress: "",
        pharmacyPhone: "",
        doctorName: "",
        facilityName: "",
        facilityAddress: "",
        facilityPhone: "",
        pcpName: "",
        pcpAddress: "",
        pcpPhone: "",
        pcpEmail: "",
        medicalNotes: "",
        emergencyName: "",
        emergencyRelationship: "",
        emergencyAddress: "",
        emergencyPhone: "",
        emergencyEmail: "",
        dateOfDeath: "",
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
    <section id="case-evaluation" className="bg-primary px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge
            variant="outline"
            className="mb-6 rounded-none border-[rgba(194,148,90,0.35)] bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-accent)]"
          >
            100% FREE EVALUATION
          </Badge>

          <h2 className="mb-6 font-serif text-5xl leading-none text-white md:text-6xl">
            <span className="text-white">
              Begin Your
            </span>
            <br />
            <span className="italic text-[var(--color-accent)]">Secure Claim Review</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden border border-white/10 bg-[#fbf7f0] p-0 text-primary shadow-2xl">
            <CardHeader className="border-b border-[#e6ddcf] bg-[#f6efe2] pb-8 text-center">
              <CardTitle className="mt-4 font-serif text-4xl text-primary">
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
                    <h3 className="mb-6 text-center font-serif text-3xl text-primary">Your Contact Information</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="firstName" className="flex items-center text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">
                          <User className="w-4 h-4 mr-2 text-primary" />
                          First Name*
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                          required
                          data-tf-element-role="first-name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="lastName" className="flex items-center text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">
                          <User className="w-4 h-4 mr-2 text-primary" />
                          Last Name*
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                          required
                          data-tf-element-role="last-name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="flex items-center text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">
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
                          className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                          required
                          data-tf-element-role="email"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="flex items-center text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">
                          <Phone className="w-4 h-4 mr-2 text-primary" />
                          Phone Number*
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                          required
                          data-tf-element-role="phone"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                      <div>
                        <Label htmlFor="street" className="flex items-center text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">
                          Street
                        </Label>
                        <Input
                          id="street"
                          name="street"
                          placeholder="Street address"
                          value={formData.street || ""}
                          onChange={handleInputChange}
                          className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                        />
                      </div>

                      <div>
                        <Label htmlFor="city" className="flex items-center text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">
                          City
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          placeholder="City"
                          value={formData.city || ""}
                          onChange={handleInputChange}
                          className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                      <div>
                        <Label htmlFor="state" className="flex items-center text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">
                          State*
                        </Label>
                        <Input
                          id="state"
                          name="state"
                          placeholder="2-letter state"
                          value={formData.state || ""}
                          onChange={handleInputChange}
                          className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                          maxLength={2}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="zip" className="flex items-center text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">
                          Zip*
                        </Label>
                        <Input
                          id="zip"
                          name="zip"
                          placeholder="5-digit zip code"
                          value={formData.zip || ""}
                          onChange={handleInputChange}
                          className={`mt-2 h-12 rounded-none border ${zipError ? 'border-red-500' : 'border-[#d8cdbd]'} bg-white focus:border-primary`}
                          required
                        />
                        {zipError && (
                          <p className="mt-1 text-[10px] text-red-500 font-bold uppercase tracking-wider">{zipError}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Case Details */}
                  <div>
                    <h3 className="mb-6 text-center font-serif text-3xl text-primary">Case Details</h3>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="caseType" className="flex items-center text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">
                          Case Type*
                        </Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("caseType", value)}
                          value={formData.caseType}
                        >
                          <SelectTrigger className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary">
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
                        <Label htmlFor="additionalInfo" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">
                          Additional Information
                        </Label>
                        <Textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          placeholder="Share anything else that may help us evaluate your case"
                          value={formData.additionalInfo}
                          onChange={handleInputChange}
                          className="mt-2 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Case-Specific Additional Questions */}
                  {(formData.caseType === "depo-provera" || formData.caseType === "talcum-powder") && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-6 border-l-4 border-[var(--color-accent)] bg-[#fdfaf5] p-6"
                    >
                      <h3 className="font-serif text-2xl text-primary">Additional Case Details</h3>

                      {formData.caseType === "depo-provera" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="ssn" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Social Security Number*</Label>
                            <Input
                              id="ssn"
                              name="ssn"
                              placeholder="e.g. 000-00-0000"
                              value={formData.ssn}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="dob" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Date of Birth*</Label>
                            <Input
                              id="dob"
                              name="dob"
                              type="date"
                              value={formData.dob}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="startDate" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Use Start Date*</Label>
                            <Input
                              id="startDate"
                              name="startDate"
                              type="date"
                              value={formData.startDate}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="endDate" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Use End Date*</Label>
                            <Input
                              id="endDate"
                              name="endDate"
                              type="date"
                              value={formData.endDate}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="pharmacyName" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Pharmacy Name*</Label>
                            <Input
                              id="pharmacyName"
                              name="pharmacyName"
                              placeholder="Name of pharmacy where Depo was purchased"
                              value={formData.pharmacyName}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="pharmacyPhone" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Pharmacy Phone*</Label>
                            <Input
                              id="pharmacyPhone"
                              name="pharmacyPhone"
                              placeholder="Pharmacy phone number"
                              value={formData.pharmacyPhone || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <Label htmlFor="pharmacyAddress" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Pharmacy Address*</Label>
                            <Input
                              id="pharmacyAddress"
                              name="pharmacyAddress"
                              placeholder="Pharmacy street address"
                              value={formData.pharmacyAddress || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="doctorName" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Doctor Name*</Label>
                            <Input
                              id="doctorName"
                              name="doctorName"
                              placeholder="Prescribing doctor"
                              value={formData.doctorName || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="facilityName" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Facility Name*</Label>
                            <Input
                              id="facilityName"
                              name="facilityName"
                              placeholder="Treating facility"
                              value={formData.facilityName || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <Label htmlFor="facilityAddress" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Facility Address*</Label>
                            <Input
                              id="facilityAddress"
                              name="facilityAddress"
                              placeholder="Facility address"
                              value={formData.facilityAddress || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="facilityPhone" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Facility Phone*</Label>
                            <Input
                              id="facilityPhone"
                              name="facilityPhone"
                              placeholder="Facility phone number"
                              value={formData.facilityPhone || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="pcpName" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Primary Care Provider Name*</Label>
                            <Input
                              id="pcpName"
                              name="pcpName"
                              placeholder="PCP name"
                              value={formData.pcpName || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <Label htmlFor="pcpAddress" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Primary Care Provider Address*</Label>
                            <Input
                              id="pcpAddress"
                              name="pcpAddress"
                              placeholder="PCP address"
                              value={formData.pcpAddress || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="pcpPhone" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Primary Care Provider Phone*</Label>
                            <Input
                              id="pcpPhone"
                              name="pcpPhone"
                              placeholder="PCP phone number"
                              value={formData.pcpPhone || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="pcpEmail" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Primary Care Provider Email*</Label>
                            <Input
                              id="pcpEmail"
                              name="pcpEmail"
                              type="email"
                              placeholder="PCP email address"
                              value={formData.pcpEmail || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <Label htmlFor="medicalNotes" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Medical Notes*</Label>
                            <Textarea
                              id="medicalNotes"
                              name="medicalNotes"
                              placeholder="Relevant diagnosis, treatment, and Depo-Provera details"
                              value={formData.medicalNotes || ""}
                              onChange={handleInputChange}
                              className="mt-2 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="emergencyName" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Emergency Contact Name*</Label>
                            <Input
                              id="emergencyName"
                              name="emergencyName"
                              placeholder="Emergency contact"
                              value={formData.emergencyName || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="emergencyRelationship" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Emergency Relationship*</Label>
                            <Input
                              id="emergencyRelationship"
                              name="emergencyRelationship"
                              placeholder="Relationship"
                              value={formData.emergencyRelationship || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <Label htmlFor="emergencyAddress" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Emergency Contact Address*</Label>
                            <Input
                              id="emergencyAddress"
                              name="emergencyAddress"
                              placeholder="Emergency contact address"
                              value={formData.emergencyAddress || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="emergencyPhone" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Emergency Contact Phone*</Label>
                            <Input
                              id="emergencyPhone"
                              name="emergencyPhone"
                              placeholder="Emergency contact phone"
                              value={formData.emergencyPhone || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="emergencyEmail" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Emergency Contact Email*</Label>
                            <Input
                              id="emergencyEmail"
                              name="emergencyEmail"
                              type="email"
                              placeholder="Emergency contact email"
                              value={formData.emergencyEmail || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="dateOfDeath" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Date of Death*</Label>
                            <Input
                              id="dateOfDeath"
                              name="dateOfDeath"
                              type="date"
                              value={formData.dateOfDeath || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="cancerType" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Cancer Type*</Label>
                            <Input
                              id="cancerType"
                              name="cancerType"
                              placeholder="Cancer type"
                              value={formData.cancerType || ""}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                        </div>
                      )}

                      {formData.caseType === "talcum-powder" && (
                        <div className="space-y-6">
                          <div>
                            <Label htmlFor="cancerType" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Type of Cancer*</Label>
                            <Input
                              id="cancerType"
                              name="cancerType"
                              placeholder="e.g. Ovarian, Mesothelioma"
                              value={formData.cancerType}
                              onChange={handleInputChange}
                              className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="diagnosisDate" className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Diagnosis Date*</Label>
                              <Input
                                id="diagnosisDate"
                                name="diagnosisDate"
                                type="date"
                                value={formData.diagnosisDate}
                                onChange={handleInputChange}
                                className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary"
                                required
                              />
                            </div>
                            <div>
                              <Label className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Is the person deceased?*</Label>
                              <Select onValueChange={(v) => handleSelectChange("isDeceased", v)} value={formData.isDeceased}>
                                <SelectTrigger className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary">
                                  <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Yes">Yes</SelectItem>
                                  <SelectItem value="No">No</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Used talcum powder perineally for 4+ years?*</Label>
                              <Select onValueChange={(v) => handleSelectChange("talcPerineal4yr", v)} value={formData.talcPerineal4yr}>
                                <SelectTrigger className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary">
                                  <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Yes">Yes</SelectItem>
                                  <SelectItem value="No">No</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">BRCA negative?*</Label>
                              <Select onValueChange={(v) => handleSelectChange("talcBrcaNegative", v)} value={formData.talcBrcaNegative}>
                                <SelectTrigger className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary">
                                  <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Yes">Yes</SelectItem>
                                  <SelectItem value="No">No</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Diagnosed between ages 18 and 70?*</Label>
                              <Select onValueChange={(v) => handleSelectChange("diagnosed18To70", v)} value={formData.diagnosed18To70}>
                                <SelectTrigger className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary">
                                  <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Yes">Yes</SelectItem>
                                  <SelectItem value="No">No</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">Has Social Security Number?*</Label>
                              <Select onValueChange={(v) => handleSelectChange("hasSsn", v)} value={formData.hasSsn}>
                                <SelectTrigger className="mt-2 h-12 rounded-none border border-[#d8cdbd] bg-white focus:border-primary">
                                  <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Yes">Yes</SelectItem>
                                  <SelectItem value="No">No</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Required Agreements */}
                  <div className="space-y-4 border border-[#dfd3c4] bg-[#f8f1e6] p-6">
                    <h4 className="mb-4 font-serif text-3xl text-primary">Required Agreements</h4>

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
                        className="cursor-pointer space-y-2 text-sm leading-relaxed text-primary/80"
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
                      className="h-14 w-full rounded-none border border-[rgba(194,148,90,0.8)] bg-primary px-8 text-[12px] font-medium uppercase tracking-[0.28em] text-white hover:bg-[var(--color-accent)] hover:text-primary sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting || !isZipValid(formData.zip || "")}
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
