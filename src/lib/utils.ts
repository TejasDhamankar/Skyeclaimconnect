import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CaseType } from "@/types/case";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAllCaseTypes = (): CaseType[] => {
  const cases: CaseType[] = [
    // Existing cases
    {
      id: "1",
      slug: "camp-lejeune",
      title: "Camp Lejeune Water Contamination",
      shortDescription: "Military personnel and families exposed to contaminated water at Camp Lejeune may qualify for compensation.",
      fullDescription: "From 1953 to 1987, the water supply at Marine Corps Base Camp Lejeune in North Carolina was contaminated with dangerous chemicals including TCE, PCE, benzene, and vinyl chloride. Military personnel, their families, and civilian workers who lived or worked at the base during this period were exposed to these harmful substances, which have been linked to various cancers, Parkinson's disease, and other serious health conditions. The Camp Lejeune Justice Act of 2022 now allows affected individuals to seek compensation for their injuries.",
      imageUrl: "/images/cases/camp.jpg",
      compensationInfo: "Compensation amounts vary based on several factors, including the type and severity of your condition, duration of exposure, medical expenses, lost wages, and pain and suffering. Some Camp Lejeune settlements have ranged from $100,000 to over $1 million.",
      eligibilityCriteria: [
        "Stationed, lived, or worked at Camp Lejeune for at least 30 days between August 1953 and December 1987",
        "Developed a qualifying health condition such as cancer, Parkinson's disease, or birth defects",
        "Must file claim before August 10, 2024 (two years after the Camp Lejeune Justice Act was signed)"
      ],
      relatedConditions: [
        "Bladder Cancer",
        "Breast Cancer",
        "Esophageal Cancer",
        "Female Infertility",
        "Kidney Cancer",
        "Leukemia",
        "Liver Cancer",
        "Lung Cancer",
        "Miscarriage",
        "Multiple Myeloma",
        "Non-Hodgkin's Lymphoma",
        "Parkinson's Disease",
        "Renal Toxicity",
        "Scleroderma"
      ],
      faqs: [
        {
          question: "Who is eligible to file a Camp Lejeune water contamination claim?",
          answer: "Veterans, family members, and civilian workers who lived or worked at Camp Lejeune for at least 30 days between August 1953 and December 1987 and have since developed a qualifying health condition may be eligible to file a claim."
        },
        {
          question: "What if my loved one who was exposed has passed away?",
          answer: "Family members may file wrongful death claims on behalf of deceased veterans or dependents who were exposed to contaminated water at Camp Lejeune and later developed a qualifying condition."
        },
        {
          question: "Will filing a claim affect my VA benefits?",
          answer: "No. Filing a Camp Lejeune lawsuit will not affect your existing VA healthcare benefits or disability compensation. Any settlement you receive through a lawsuit is in addition to your VA benefits."
        }
      ]
    },
    {
      id: "2",
      slug: "3m-earplugs",
      title: "3M Combat Arms Earplugs",
      shortDescription: "Military service members who suffered hearing damage after using defective 3M earplugs may be eligible for compensation.",
      fullDescription: "Between 2003 and 2015, 3M Company supplied the U.S. military with Combat Arms Earplugs Version 2 (CAEv2), which were standard issue for military personnel serving in combat zones like Iraq and Afghanistan. These dual-ended earplugs were designed to provide two levels of hearing protection: one end for blocking all sound, and the other for blocking loud impulse sounds while allowing soldiers to hear commands and approaching enemies. However, the earplugs had a design defect that prevented them from forming a proper seal in the ear canal, leaving users vulnerable to hearing damage from loud combat and training noises. As a result, many service members developed hearing loss, tinnitus (ringing in the ears), and other auditory issues.",
      imageUrl: "/images/cases/earplug.jpg",
      compensationInfo: "Compensation in 3M earplug cases varies based on the severity of hearing damage and its impact on your life. Settlements may cover medical expenses, lost wages, pain and suffering, and decreased quality of life. Some individual verdicts have reached into the millions, though most settlements are lower.",
      eligibilityCriteria: [
        "Served in the U.S. military between 2003 and 2015",
        "Used 3M Combat Arms Earplugs during service",
        "Diagnosed with hearing loss, tinnitus, or other hearing-related condition"
      ],
      relatedConditions: [
        "Hearing Loss",
        "Tinnitus (Ringing in the Ears)",
        "Auditory Processing Disorder",
        "Permanent Hearing Damage"
      ],
      faqs: [
        {
          question: "How do I know if I used 3M Combat Arms Earplugs during my service?",
          answer: "The dual-ended Combat Arms Earplugs Version 2 (CAEv2) were standard issue to many service members deployed to Iraq and Afghanistan between 2003 and 2015. If you served during this time and were issued earplugs, there's a good chance they were the 3M product in question."
        },
        {
          question: "What evidence do I need for my 3M earplug claim?",
          answer: "Important evidence includes military service records, medical records documenting your hearing issues, diagnosis of hearing loss or tinnitus, and documentation of when and where you used the 3M earplugs. Our legal team can help you gather the necessary documentation."
        }
      ]
    },
    {
      id: "3",
      slug: "roundup",
      title: "Roundup Weed Killer",
      shortDescription: "Individuals exposed to Roundup herbicide who later developed cancer may qualify for substantial compensation.",
      fullDescription: "Roundup, manufactured by Monsanto (now owned by Bayer), is one of the world's most widely used herbicides. Its active ingredient, glyphosate, has been linked to the development of non-Hodgkin's lymphoma and other forms of cancer. Thousands of lawsuits have been filed against Bayer alleging that long-term exposure to Roundup caused users to develop cancer and that the company failed to warn consumers about the potential risks. In 2015, the International Agency for Research on Cancer (IARC) classified glyphosate as 'probably carcinogenic to humans,' fueling concerns about Roundup's safety.",
      imageUrl: "/images/cases/roundup.jpg",
      compensationInfo: "Roundup lawsuits have resulted in some of the largest product liability settlements in history. Bayer has set aside over $10 billion to resolve Roundup claims. Individual settlements vary widely, with some plaintiffs receiving several million dollars, especially in cases involving serious illness or death.",
      eligibilityCriteria: [
        "Regular exposure to Roundup weed killer (typically over several years)",
        "Diagnosed with non-Hodgkin's lymphoma or another qualifying cancer",
        "Diagnosis occurred within a reasonable time after exposure"
      ],
      relatedConditions: [
        "Non-Hodgkin's Lymphoma",
        "B-cell Lymphoma",
        "T-cell Lymphoma",
        "Chronic Lymphocytic Leukemia",
        "Multiple Myeloma",
        "Hairy Cell Leukemia"
      ],
      faqs: [
        {
          question: "Who is most at risk from Roundup exposure?",
          answer: "Those with the highest risk include agricultural workers, landscapers, gardeners, groundskeepers, and others who used Roundup regularly as part of their job. Homeowners who frequently used Roundup for lawn care over many years may also be at risk."
        },
        {
          question: "Is Roundup still on the market?",
          answer: "Yes, Roundup products are still available for sale in the United States. However, Bayer has announced plans to reformulate Roundup for the U.S. residential market to remove glyphosate while continuing to sell glyphosate-based formulations for agricultural use."
        }
      ]
    },
    {
      id: "4",
      slug: "cpap",
      title: "CPAP Machine Recall",
      shortDescription: "Users of recalled Philips CPAP, BiPAP, or ventilator devices who suffered injuries may be eligible for compensation.",
      fullDescription: "In June 2021, Philips Respironics issued a recall for millions of CPAP (Continuous Positive Airway Pressure), BiPAP (Bi-Level Positive Airway Pressure), and mechanical ventilator devices manufactured between 2009 and April 26, 2021. The recall was prompted by potential health risks associated with the polyester-based polyurethane (PE-PUR) sound abatement foam used in these devices. This foam can degrade over time, releasing potentially harmful particles and chemicals that users might inhale or ingest. The FDA has classified this as a Class I recall, the most serious type, indicating that use of these devices may cause serious injuries or death.",
      imageUrl: "/images/cases/cpap.jpg",
      compensationInfo: "Compensation in Philips CPAP lawsuits may cover medical expenses, ongoing treatment costs, lost wages, pain and suffering, and in some cases, punitive damages. The exact amount varies based on the severity of injuries and individual circumstances.",
      eligibilityCriteria: [
        "Used a recalled Philips CPAP, BiPAP, or ventilator device",
        "Experienced symptoms or diagnosed with a condition potentially related to foam degradation or exposure",
        "Used the device within the relevant timeframe (generally between 2009 and April 2021)"
      ],
      relatedConditions: [
        "Respiratory Issues (Inflammation, Irritation)",
        "Asthma",
        "Chemical Exposure Effects",
        "Headache",
        "Airway Inflammation",
        "Cancer (Lung, Kidney, Liver)",
        "Organ Damage",
        "Sinus Infection"
      ],
      faqs: [
        {
          question: "How do I know if my CPAP device is part of the recall?",
          answer: "You can check if your device is affected by looking up the serial number on the Philips Respironics recall website or by contacting Philips directly. Recalled devices include most DreamStation models made before April 26, 2021, as well as several other CPAP, BiPAP, and ventilator models."
        },
        {
          question: "What should I do if I have a recalled device?",
          answer: "Consult with your doctor before stopping use of your device, as the benefits may outweigh the risks for some users. Register your device with Philips for the recall, and consider alternative treatment options after discussing with your healthcare provider. If you've experienced health issues, document your symptoms and seek medical attention."
        }
      ]
    },
    // Additional cases from reference websites
    {
      id: "9",
      slug: "tylenol-autism",
      title: "Tylenol Autism & ADHD",
      shortDescription: "Children exposed to acetaminophen (Tylenol) before birth who developed autism or ADHD may qualify for compensation.",
      fullDescription: "Recent scientific studies have suggested a potential link between prenatal exposure to acetaminophen (the active ingredient in Tylenol and many other over-the-counter pain relievers) and an increased risk of autism spectrum disorder (ASD) and attention deficit hyperactivity disorder (ADHD) in children. Lawsuits allege that manufacturers and retailers of acetaminophen products failed to warn pregnant women about the potential risks of using these medications during pregnancy. These cases are based on multiple research studies, including a 2021 consensus statement published in Nature Reviews Endocrinology where 91 medical experts warned against using acetaminophen during pregnancy unless medically necessary.",
      imageUrl: "/images/cases/tylenol.jpg",
      compensationInfo: "As this litigation is still in its early stages, specific settlement amounts haven't been established. Compensation may cover medical expenses, therapy costs, educational support, lost earning capacity, and pain and suffering related to autism or ADHD diagnoses linked to prenatal acetaminophen exposure.",
      eligibilityCriteria: [
        "Mother used acetaminophen (Tylenol or generic versions) during pregnancy",
        "Child diagnosed with autism spectrum disorder (ASD) or ADHD",
        "Clear documentation of acetaminophen use during pregnancy and subsequent diagnosis"
      ],
      relatedConditions: [
        "Autism Spectrum Disorder (ASD)",
        "Attention Deficit Hyperactivity Disorder (ADHD)",
        "Developmental Delays",
        "Language Impairments",
        "Behavioral Issues"
      ],
      faqs: [
        {
          question: "Does all acetaminophen use during pregnancy cause autism or ADHD?",
          answer: "No, research suggests a potential increased risk, not a guaranteed outcome. Studies indicate that factors such as the amount, frequency, and duration of acetaminophen use during pregnancy may influence the level of risk. Many children whose mothers took acetaminophen during pregnancy do not develop these conditions."
        },
        {
          question: "What evidence will I need for a Tylenol autism lawsuit?",
          answer: "Important evidence includes medical records documenting acetaminophen use during pregnancy (such as doctor recommendations, prescriptions, or purchase receipts), the child's diagnostic records for autism or ADHD, and documentation of ongoing treatments and therapies. Our legal team can help determine if your case qualifies."
        }
      ]
    },
    {
      id: "10",
      slug: "hair-relaxer",
      title: "Hair Relaxer Cancer",
      shortDescription: "Women who regularly used chemical hair relaxers or straighteners and developed uterine, ovarian, or breast cancer may be eligible for compensation.",
      fullDescription: "Recent scientific research, including a 2022 study from the National Institutes of Health, has found that women who used chemical hair straightening or relaxing products may have an increased risk of developing uterine cancer, endometrial cancer, ovarian cancer, and breast cancer. These products contain potentially harmful endocrine-disrupting chemicals that can be absorbed through the scalp, especially if there are burns or lesions present during application. Lawsuits allege that manufacturers of these hair relaxer products, including L'Oréal, SoftSheen-Carson, Namaste, Dark & Lovely, and others, failed to warn consumers about these serious health risks despite allegedly being aware of the dangers.",
      imageUrl: "/images/cases/hair.png",
      compensationInfo: "Hair relaxer lawsuits are currently in the early stages of litigation. Potential compensation may include medical expenses, pain and suffering, lost wages, diminished quality of life, and punitive damages in some cases. The amount will likely vary based on factors such as the type and stage of cancer, treatment requirements, and individual circumstances.",
      eligibilityCriteria: [
        "Regular use of chemical hair relaxers or straighteners (usually for several years)",
        "Diagnosed with uterine cancer, endometrial cancer, ovarian cancer, or breast cancer",
        "No significant family history or genetic predisposition to the diagnosed cancer"
      ],
      relatedConditions: [
        "Uterine Cancer",
        "Endometrial Cancer",
        "Ovarian Cancer",
        "Breast Cancer",
        "Uterine Fibroids"
      ],
      faqs: [
        {
          question: "Which hair relaxer products are involved in lawsuits?",
          answer: "Lawsuits include various chemical hair straightening and relaxer products, particularly those marketed to Black women. Brands named in legal actions include Dark & Lovely, Just for Me, Optimum, Motions, TCB Naturals, Soft & Beautiful, and others manufactured by companies such as L'Oréal USA, SoftSheen-Carson, Revlon, and Strength of Nature."
        },
        {
          question: "Is there a connection between hair relaxers and specific types of cancer?",
          answer: "Research has found the strongest link between chemical hair relaxers and uterine cancer, with one NIH study showing women who used these products more than four times per year had more than double the risk of developing uterine cancer. Studies have also suggested potential links to ovarian and breast cancer, though research is ongoing."
        }
      ]
    },
    {
      id: "11",
      slug: "zantac",
      title: "Zantac Cancer",
      shortDescription: "Users of Zantac (ranitidine) who developed cancer may qualify for compensation after the discovery of a cancer-causing contaminant in the medication.",
      fullDescription: "In 2019, the FDA announced that Zantac (ranitidine) and its generic versions contained N-nitrosodimethylamine (NDMA), a probable human carcinogen. This discovery led to a market-wide recall of all ranitidine products in 2020. NDMA can form when ranitidine breaks down, especially when exposed to heat or over time during storage. Lawsuits allege that manufacturers, including GlaxoSmithKline, Boehringer Ingelheim, Sanofi, and Pfizer, knew or should have known about the NDMA contamination but failed to warn consumers about the cancer risks. Many Zantac users who took the medication regularly for heartburn, acid reflux, or GERD have since been diagnosed with various types of cancer, particularly of the digestive system.",
      imageUrl: "/images/cases/zantac.webp",
      compensationInfo: "A $500 million settlement was announced in July 2023 to resolve approximately 70,000 Zantac claims. Individual settlements for qualifying cases will vary based on cancer type, severity, age at diagnosis, duration of Zantac use, and other factors. Additional litigation is still ongoing for certain cancer types.",
      eligibilityCriteria: [
        "Regular use of prescription or over-the-counter Zantac/ranitidine (typically for at least one year)",
        "Diagnosed with a qualifying cancer type (bladder, stomach, esophageal, liver, pancreatic, colorectal)",
        "Diagnosis occurred after using Zantac regularly and within a reasonable timeframe after exposure"
      ],
      relatedConditions: [
        "Bladder Cancer",
        "Stomach Cancer",
        "Esophageal Cancer",
        "Liver Cancer",
        "Pancreatic Cancer",
        "Colorectal Cancer"
      ],
      faqs: [
        {
          question: "Does all ranitidine exposure cause cancer?",
          answer: "No, not everyone who took Zantac or generic ranitidine will develop cancer. The risk appears to be related to the amount and duration of exposure, as well as individual factors that affect cancer susceptibility. The legal cases focus on the manufacturers' alleged failure to warn about potential risks or properly test their products."
        },
        {
          question: "Can I still file a Zantac lawsuit?",
          answer: "Yes, while some settlement agreements have been reached, many claims are still being actively litigated. The ability to file depends on factors such as when you were diagnosed with cancer, what type of cancer you have, your history of Zantac use, and the statute of limitations in your state. It's important to consult with an attorney promptly to evaluate your specific situation."
        }
      ]
    },
    {
      id: "12",
      slug: "firefighting-foam",
      title: "Firefighting Foam (AFFF)",
      shortDescription: "Firefighters and others exposed to AFFF (aqueous film-forming foam) who developed cancer may be eligible for compensation.",
      fullDescription: "Aqueous film-forming foam (AFFF) has been widely used since the 1970s to fight flammable liquid fires, particularly at military bases, airports, and firefighter training facilities. This foam contains per- and polyfluoroalkyl substances (PFAS), sometimes called 'forever chemicals' because they don't break down naturally in the environment or human body. Scientific research has linked PFAS exposure to various types of cancer and other health conditions. Lawsuits allege that manufacturers of AFFF, including 3M and DuPont, knew about the potential health risks but failed to warn users or develop safer alternatives. Those at highest risk include firefighters, military personnel (especially those on naval ships or air bases), and communities near facilities where AFFF was regularly used.",
      imageUrl: "/images/cases/foam.jpg",
      compensationInfo: "In June 2023, 3M announced a settlement agreement of up to $12.5 billion to resolve AFFF litigation. Additional settlements may be forthcoming from other manufacturers. The compensation available will vary based on factors such as the type and stage of cancer, duration of exposure, and individual circumstances.",
      eligibilityCriteria: [
        "Significant exposure to AFFF firefighting foam (occupational or environmental)",
        "Diagnosed with a cancer associated with PFAS exposure (kidney, testicular, pancreatic, etc.)",
        "Clear timeline connecting foam exposure to cancer diagnosis"
      ],
      relatedConditions: [
        "Kidney Cancer",
        "Testicular Cancer",
        "Pancreatic Cancer",
        "Bladder Cancer",
        "Prostate Cancer",
        "Non-Hodgkin's Lymphoma",
        "Thyroid Disease",
        "Liver Damage",
        "Elevated Cholesterol"
      ],
      faqs: [
        {
          question: "Who was typically exposed to firefighting foam?",
          answer: "Those with highest exposure include firefighters (both military and civilian), military personnel stationed at bases where AFFF was used (particularly Navy and Air Force bases), airport workers involved in firefighting or training, and residents living near military bases, airports, or training facilities where AFFF contaminants entered the groundwater."
        },
        {
          question: "Is firefighting foam still being used?",
          answer: "While many facilities are transitioning to PFAS-free firefighting foams, AFFF is still used in some locations, particularly where required by federal regulations. However, the Department of Defense has been directed to phase out AFFF by October 2024, and many states have enacted legislation restricting its use."
        }
      ]
    },
    {
      id: "13",
      slug: "infant-formula-nec",
      title: "Infant Formula NEC",
      shortDescription: "Premature infants who developed necrotizing enterocolitis (NEC) after consuming cow's milk-based formula may be eligible for compensation.",
      fullDescription: "Necrotizing enterocolitis (NEC) is a serious gastrointestinal condition primarily affecting premature infants, where intestinal tissue becomes inflamed and dies. Research has indicated that premature babies fed cow's milk-based formulas, such as Similac or Enfamil, may have a significantly higher risk of developing NEC compared to those fed with human breast milk. Lawsuits allege that manufacturers of these formulas, including Abbott Laboratories (Similac) and Mead Johnson (Enfamil), failed to properly warn parents and medical providers about the increased risk of NEC associated with their products when used in premature infants.",
      imageUrl: "/images/cases/infant.jpg",
      compensationInfo: "Compensation in NEC formula cases may include medical expenses, future medical care, pain and suffering, and in cases of infant death, wrongful death damages. These cases are still developing, but given the serious nature of NEC and its consequences, substantial compensation may be available in successful claims.",
      eligibilityCriteria: [
        "Premature infant (born before 37 weeks gestation)",
        "Fed cow's milk-based formula (such as Similac or Enfamil) in the NICU or shortly after",
        "Diagnosed with necrotizing enterocolitis (NEC)",
        "Suffered serious complications requiring surgery or resulting in death"
      ],
      relatedConditions: [
        "Intestinal Perforation",
        "Short Bowel Syndrome",
        "Sepsis",
        "Developmental Delays",
        "Cerebral Palsy (in severe cases)",
        "Intestinal Stricture",
        "Need for Ostomy or Feeding Tube"
      ],
      faqs: [
        {
          question: "How is NEC linked to baby formula?",
          answer: "Multiple scientific studies have found that premature infants fed cow's milk-based formulas are more likely to develop NEC than those fed human milk. The exact mechanism isn't fully understood, but it's believed that premature intestines may have difficulty properly digesting cow's milk proteins, leading to inflammation and injury to the intestinal walls."
        },
        {
          question: "What should I do if my child was diagnosed with NEC after being fed formula?",
          answer: "First, ensure your child is receiving appropriate medical care. Then, gather all medical records related to your child's birth, NICU stay, feeding regimen, and NEC diagnosis and treatment. Keep any documentation about the formula your child received. Contact a qualified attorney who specializes in NEC formula cases to discuss your potential legal options."
        }
      ]
    },
    // Continuing with additional cases
    {
      id: "14",
      slug: "exactech",
      title: "Exactech Joint Replacement",
      shortDescription: "Patients with failed Exactech knee, hip, or ankle replacements may be eligible for compensation due to defective polyethylene inserts.",
      fullDescription: "In February 2022, Exactech expanded a recall of its joint replacement systems due to defective packaging of polyethylene inserts. The packaging failed to contain a secondary barrier layer that prevents oxygen from diffusing into the plastic insert, causing the plastic to degrade prematurely. This oxidation can lead to accelerated wear, bone loss, component fatigue, and premature joint replacement failure. The recall affects thousands of knee, ankle, and hip replacement systems implanted since 2004. Lawsuits allege that Exactech knew or should have known about these issues but failed to warn patients and surgeons about the risks.",
      imageUrl: "/images/cases/exactech.jpg",
      compensationInfo: "Compensation in Exactech cases may cover revision surgery costs, medical expenses, pain and suffering, lost wages, and diminished quality of life. Settlement amounts will likely depend on factors such as the severity of complications, number of revision surgeries needed, and impact on daily functioning.",
      eligibilityCriteria: [
        "Received an Exactech knee, ankle, or hip replacement system after 2004",
        "Experienced premature device failure or complications",
        "Required or scheduled for revision surgery",
        "Device is part of the recall (Optetrak, Truliant, Vantage, or other Exactech systems)"
      ],
      relatedConditions: [
        "Joint Pain and Swelling",
        "Instability or Loosening",
        "Osteolysis (Bone Loss)",
        "Polyethylene Wear",
        "Component Fatigue Cracking/Fracture",
        "Limited Mobility",
        "Revision Surgery"
      ],
      faqs: [
        {
          question: "How do I know if my Exactech implant is recalled?",
          answer: "Exactech has provided a look-up tool on their website where patients can enter their implant serial number to determine if it's part of the recall. Your orthopedic surgeon or their office staff may also be able to verify if your specific device is affected. The recall mainly includes Optetrak, Optetrak Logic, Truliant knee systems, Vantage ankle systems, and certain hip inserts."
        },
        {
          question: "What should I do if I have a recalled Exactech joint replacement?",
          answer: "First, consult with your orthopedic surgeon to evaluate your implant's condition and determine if you're experiencing any symptoms of premature wear. Your surgeon may recommend imaging tests such as X-rays to assess the implant. Even if you're not currently experiencing symptoms, regular monitoring is important. If you have complications, document all symptoms and medical visits, and contact an attorney to discuss your legal options."
        }
      ]
    },
    {
      id: "15",
      slug: "pfas-water-contamination",
      title: "PFAS Water Contamination",
      shortDescription: "People exposed to PFAS-contaminated water who developed cancer or other serious conditions may qualify for compensation.",
      fullDescription: "Per- and polyfluoroalkyl substances (PFAS) are a group of man-made chemicals that have been manufactured since the 1940s and used in everything from non-stick cookware to water-resistant clothing, food packaging, and firefighting foam. These 'forever chemicals' persist in the environment and human body, and have contaminated drinking water systems serving millions of Americans. Scientific studies have linked PFAS exposure to various health effects, including cancer, thyroid disease, decreased fertility, developmental issues in children, and immune system suppression. Lawsuits target manufacturers of PFAS chemicals, including 3M and DuPont, as well as companies that used these chemicals in their products, alleging they knew about the potential health risks but failed to warn the public.",
      imageUrl: "/images/cases/pfas.jpg",
      compensationInfo: "Several major settlements have been announced, including a $10.3 billion settlement by 3M in June 2023 to resolve public water supplier claims. Compensation in individual cases varies based on exposure level, type and severity of illness, and other factors. Additional settlements are expected as litigation progresses.",
      eligibilityCriteria: [
        "Exposure to PFAS-contaminated water (typically in a known contamination area)",
        "Diagnosed with a condition linked to PFAS exposure (certain cancers, thyroid disease, etc.)",
        "Evidence connecting contamination to local water supply"
      ],
      relatedConditions: [
        "Kidney Cancer",
        "Testicular Cancer",
        "Thyroid Disease and Cancer",
        "Ulcerative Colitis",
        "High Cholesterol",
        "Pregnancy-Induced Hypertension",
        "Immune System Effects",
        "Liver Damage"
      ],
      faqs: [
        {
          question: "How do I know if my water is contaminated with PFAS?",
          answer: "You can check the Environmental Working Group's PFAS Contamination Map or review water quality reports from your local utility. If you live near a military base, airport, firefighter training facility, or industrial plant that used PFAS, your risk may be higher. Water testing services can also check your water for PFAS contamination."
        },
        {
          question: "What levels of PFAS are considered dangerous?",
          answer: "The EPA has established a health advisory level of 0.004 parts per trillion (ppt) for PFOA and 0.02 ppt for PFOS, two of the most studied PFAS chemicals. These extremely low levels reflect growing concern about even minimal exposure. However, many water systems contain PFAS at levels much higher than these guidelines."
        }
      ]
    },
    {
      id: "16",
      slug: "hair-straightener-cancer",
      title: "Hair Straightener Cancer",
      shortDescription: "Women who regularly used chemical hair straighteners and developed uterine or other reproductive cancers may be eligible for compensation.",
      fullDescription: "In October 2022, a study from the National Institutes of Health found that women who frequently use chemical hair straightening or relaxer products may have more than twice the risk of developing uterine cancer compared to those who don't use these products. The study, which followed over 33,000 women for nearly 11 years, is particularly significant for Black women, who use hair straightening products at higher rates. These products often contain endocrine-disrupting chemicals like phthalates, parabens, and formaldehyde that can be absorbed through the scalp, especially when there are burns or abrasions present during application. Lawsuits allege that manufacturers failed to warn consumers about these serious health risks despite allegedly having knowledge of the dangers.",
      imageUrl: "/images/cases/hairst.jpg",
      compensationInfo: "Hair straightener cancer lawsuits are in the early stages of litigation. Compensation may include medical expenses, pain and suffering, lost wages, diminished quality of life, and possibly punitive damages. The amounts will likely vary based on factors such as cancer type and stage, treatment requirements, and individual circumstances.",
      eligibilityCriteria: [
        "Regular use of chemical hair straighteners/relaxers for several years",
        "Diagnosed with uterine cancer, endometrial cancer, ovarian cancer, or uterine fibroids",
        "No significant family history or genetic predisposition to the diagnosed condition"
      ],
      relatedConditions: [
        "Uterine Cancer",
        "Endometrial Cancer",
        "Ovarian Cancer",
        "Uterine Fibroids",
        "Breast Cancer",
        "Hormonal Disorders"
      ],
      faqs: [
        {
          question: "Which hair straightening products are involved in these lawsuits?",
          answer: "Lawsuits name various chemical hair straightening and relaxer products, particularly those marketed to Black women. Brands potentially involved include Dark & Lovely, Just for Me, Optimum, Motions, TCB Naturals, Soft & Beautiful, African Pride, Creme of Nature, ORS Olive Oil, and others manufactured by companies like L'Oréal, SoftSheen-Carson, Revlon, and Strength of Nature."
        },
        {
          question: "How is chemical hair straightener use linked to cancer?",
          answer: "Research suggests that chemical hair straighteners contain endocrine-disrupting chemicals that can mimic hormones in the body, potentially leading to hormonal cancers like uterine and ovarian cancer. These chemicals can be absorbed through the scalp, especially when there are burns or lesions present during application. The frequent application of these products over many years may increase exposure and risk."
        }
      ]
    },
    {
      id: "17",
      slug: "toxic-baby-food",
      title: "Toxic Baby Food",
      shortDescription: "Children exposed to heavy metals in baby food who developed autism or ADHD may qualify for compensation.",
      fullDescription: "In February 2021, a U.S. Congressional report revealed that several major baby food manufacturers were selling products containing dangerous levels of toxic heavy metals, including arsenic, lead, cadmium, and mercury. These heavy metals can have serious neurodevelopmental effects on developing brains, potentially contributing to autism spectrum disorder (ASD), attention deficit hyperactivity disorder (ADHD), and other neurological conditions. Lawsuits allege that baby food manufacturers knew their products contained these harmful substances but failed to warn parents about the risks or take adequate steps to reduce contamination levels. Affected brands named in litigation include Gerber, Beech-Nut, Earth's Best Organic, Parent's Choice (Walmart), Happy Baby (Nurture), and others.",
      imageUrl: "/images/cases/toxic.webp",
      compensationInfo: "As toxic baby food litigation is still developing, specific settlement amounts haven't been established. Compensation may cover medical expenses, therapy costs, educational support, lost earning capacity, and pain and suffering related to neurodevelopmental conditions linked to heavy metal exposure during critical developmental periods.",
      eligibilityCriteria: [
        "Child consumed commercial baby foods from named manufacturers during first years of life",
        "Child diagnosed with autism spectrum disorder, ADHD, or other qualifying developmental condition",
        "Clear documentation of baby food consumption and subsequent diagnosis"
      ],
      relatedConditions: [
        "Autism Spectrum Disorder (ASD)",
        "Attention Deficit Hyperactivity Disorder (ADHD)",
        "Cognitive Impairment",
        "Developmental Delays",
        "Learning Disabilities",
        "Behavioral Problems"
      ],
      faqs: [
        {
          question: "Which baby food brands are involved in the lawsuits?",
          answer: "Brands named in the Congressional report and subsequent lawsuits include Gerber, Beech-Nut, Earth's Best Organic (Hain Celestial Group), Parent's Choice (Walmart), Happy Baby (Nurture Inc.), Plum Organics (Campbell Soup), and Sprout Organic Foods. However, the issue may affect additional manufacturers as testing continues."
        },
        {
          question: "How can heavy metals in baby food affect child development?",
          answer: "Heavy metals like lead, arsenic, mercury, and cadmium are neurotoxins that can cross the blood-brain barrier and interfere with brain development, particularly during the critical first years of life. Even low levels of exposure can affect cognitive function, behavior, attention, and social skills. The developing brain is especially vulnerable to these toxins, which may contribute to conditions like autism and ADHD."
        }
      ]
    },
    {
      id: "18",
      slug: "paraquat",
      title: "Paraquat Herbicide",
      shortDescription: "Agricultural workers exposed to Paraquat herbicide who developed Parkinson's disease may qualify for compensation.",
      fullDescription: "Paraquat dichloride is a highly toxic herbicide used for weed and grass control in agricultural settings. Despite being banned in more than 30 countries due to its extreme toxicity, it remains one of the most widely used herbicides in the United States, primarily in commercial farming. Scientific research has established a potential link between paraquat exposure and an increased risk of developing Parkinson's disease, a progressive nervous system disorder affecting movement. Lawsuits allege that manufacturers of paraquat products, including Syngenta and Chevron, failed to adequately warn users about the potential neurological risks associated with exposure to the chemical, even when used as directed with safety equipment.",
      imageUrl: "/images/cases/paraquat.jpg",
      compensationInfo: "In 2023, a significant $220 million settlement was announced to resolve paraquat lawsuits, with individual payouts expected to range from $5,000 to $300,000 depending on factors like age at diagnosis, exposure level, and case strength. Additional litigation is ongoing with potential for further settlements.",
      eligibilityCriteria: [
        "Exposure to paraquat through occupational use, proximity to agricultural spraying, or contaminated water",
        "Diagnosed with Parkinson's disease or Parkinsonism",
        "Clear timeline connecting exposure to later development of symptoms"
      ],
      relatedConditions: [
        "Parkinson's Disease",
        "Parkinsonism",
        "Tremors",
        "Bradykinesia (Slow Movement)",
        "Muscle Rigidity",
        "Balance Problems",
        "Cognitive Impairment (in advanced cases)"
      ],
      faqs: [
        {
          question: "Who is most at risk for paraquat exposure?",
          answer: "Those with the highest risk include licensed applicators who directly handle and spray paraquat, agricultural workers in fields where paraquat was applied, farmers, tank mixers/loaders, chemical transporters, and those living near heavily sprayed agricultural areas. The risk is highest for those with repeated exposure over time."
        },
        {
          question: "How can I prove I was exposed to paraquat?",
          answer: "Documentation that can help establish paraquat exposure includes employment records showing work in agriculture, pesticide application licenses, purchase receipts for paraquat products, spraying logs or records, medical records noting occupational chemical exposure, and witness statements from co-workers or employers. Our legal team can help you gather and organize this documentation."
        }
      ]
    },
    {
      id: "19",
      slug: "talcum-powder",
      title: "Talcum Powder Cancer",
      category: "Talc",
      featured: true,
      shortDescription: "Women who developed ovarian cancer after using talcum powder products may be entitled to compensation.",
      fullDescription: "For decades, many women used talcum powder products, such as Johnson & Johnson's Baby Powder and Shower to Shower, for feminine hygiene purposes. However, scientific research has suggested a potential link between talcum powder use in the genital area and an increased risk of ovarian cancer. Lawsuits allege that talc manufacturers, particularly Johnson & Johnson, were aware of studies indicating this risk but failed to warn consumers. In October 2023, Johnson & Johnson reached a $6.475 billion settlement agreement to resolve most talcum powder lawsuits after their previous attempts to handle the litigation through bankruptcy were rejected by courts. The controversy centers around the potential contamination of talc with asbestos (a known carcinogen) due to the natural proximity of these minerals in the earth, as well as concerns about talc particles themselves traveling to the ovaries and causing inflammation that may lead to cancer.",
      imageUrl: "/images/cases/talcum-powder.avif",
      compensationInfo: "Johnson & Johnson has proposed a settlement of $6.475 billion to resolve talcum powder claims. Individual compensation would vary based on factors such as age at diagnosis, severity of illness, and whether the case involved death. Previous jury verdicts in talcum powder cases ranged from millions to billions of dollars, though many were later reduced on appeal.",
      eligibilityCriteria: [
        "Regular use of talcum powder products in the genital area for an extended period (typically years)",
        "Diagnosed with ovarian cancer or mesothelioma",
        "No significant family history of ovarian cancer or genetic predisposition"
      ],
      relatedConditions: [
        "Ovarian Cancer",
        "Fallopian Tube Cancer",
        "Primary Peritoneal Cancer",
        "Mesothelioma (in rare cases)"
      ],
      faqs: [
        {
          question: "Does all talcum powder cause cancer?",
          answer: "Not necessarily. The concern is primarily with talcum powder that may contain traces of asbestos due to contamination during the mining process, as well as the potential inflammatory effects of talc particles themselves. Modern talcum powder products often use alternatives like cornstarch, and manufacturers have implemented more rigorous testing for asbestos. The lawsuits focus on older formulations and usage patterns spanning decades."
        },
        {
          question: "Is there a statute of limitations for filing a talcum powder lawsuit?",
          answer: "Yes, there are time limits for filing talcum powder lawsuits that vary by state. Generally, the clock starts running at the time of diagnosis or when you should have reasonably known about the connection between your cancer and talcum powder use. Given the recent settlement announcement, it's essential to consult with an attorney promptly to understand the specific deadlines that apply to your situation."
        }
      ]
    },
    {
      id: "20",
      slug: "hernia-mesh",
      title: "Hernia Mesh Complications",
      shortDescription: "Patients who suffered complications after hernia repair surgery using surgical mesh may qualify for compensation.",
      fullDescription: "Hernia mesh is a medical device used to provide additional support to damaged tissue around hernias during surgical repair. While mesh can be effective in preventing hernia recurrence, certain types of surgical mesh products have been associated with serious complications. Thousands of patients have reported adverse effects including severe pain, infection, adhesion (when the mesh sticks to internal organs), bowel obstruction, mesh migration (when the mesh moves from its original placement), and the need for revision surgery. Several manufacturers have faced lawsuits alleging that their hernia mesh products were defectively designed or that they failed to adequately warn about potential risks.",
      imageUrl: "/images/cases/hernia-mesh.jpg",
      compensationInfo: "Compensation in hernia mesh cases typically covers medical expenses, revision surgeries, lost wages, pain and suffering, and decreased quality of life. Settlement amounts vary widely depending on the severity of complications, with some cases resolving for tens of thousands of dollars and others for hundreds of thousands. Manufacturers like C.R. Bard and Ethicon have reached settlements in some cases, while litigation against other manufacturers continues.",
      eligibilityCriteria: [
        "Underwent hernia repair surgery where mesh was implanted",
        "Experienced complications such as pain, infection, adhesion, obstruction, or mesh failure",
        "Required revision surgery or ongoing medical treatment due to mesh complications"
      ],
      relatedConditions: [
        "Chronic Pain",
        "Infection",
        "Adhesion to Organs",
        "Bowel Obstruction",
        "Mesh Migration",
        "Perforation of Organs",
        "Hernia Recurrence",
        "Inflammatory Response"
      ],
      faqs: [
        {
          question: "Which hernia mesh products are involved in lawsuits?",
          answer: "Multiple hernia mesh products from various manufacturers have been subject to litigation, including certain products made by Ethicon (Physiomesh), Atrium Medical (C-QUR), and Davol/C.R. Bard (Kugel Patch, PerFix Plug, Ventralex, and others). The specific products involved in lawsuits continue to evolve as new issues emerge."
        },
        {
          question: "How long do I have to file a hernia mesh lawsuit?",
          answer: "The statute of limitations varies by state and depends on when your injury occurred or when you discovered it was related to the hernia mesh. Typically, you have between 1-6 years to file a claim, but this timeline can be complex in medical device cases. It's best to consult with an attorney as soon as possible to ensure your claim is filed within the appropriate timeframe."
        }
      ]
    },
    {
      id: "21",
      slug: "lds-sex-abuse",
      title: "LDS Church Sex Abuse",
      shortDescription: "Survivors of sexual abuse within the Church of Jesus Christ of Latter-day Saints (Mormon Church) may be eligible for compensation.",
      fullDescription: "In recent years, numerous allegations have emerged regarding the Church of Jesus Christ of Latter-day Saints' (LDS Church) handling of sexual abuse cases. Lawsuits allege that church officials failed to report abuse to authorities, protected abusers, and used the church's abuse helpline to shield the institution rather than help victims. A significant investigation by the Associated Press in 2022 revealed how the church's helpline was often used to direct abuse reports to church attorneys rather than law enforcement, potentially enabling continued abuse. Cases involve abuse by church leaders, members in positions of authority, and abuse that occurred during church-sponsored activities or on church property. Survivors allege that the church's culture of secrecy and protection of its reputation created an environment where abuse could continue.",
      imageUrl: "/images/cases/lds.jpg",
      compensationInfo: "Compensation in LDS abuse cases may include damages for therapy costs, emotional trauma, pain and suffering, and sometimes punitive damages intended to reform institutional practices. Settlement amounts vary widely based on factors such as the nature and duration of abuse, its impact on the survivor's life, and the evidence of institutional negligence. Some religious institution abuse cases have resulted in settlements ranging from tens of thousands to millions of dollars.",
      eligibilityCriteria: [
        "Experienced sexual abuse connected to the LDS Church or its activities",
        "Abuse perpetrated by church leaders, members, or occurred during church functions",
        "Evidence of church negligence, cover-up, or failure to take appropriate action",
        "Claim filed within the applicable statute of limitations (which varies by state)"
      ],
      relatedConditions: [
        "Post-Traumatic Stress Disorder (PTSD)",
        "Depression and Anxiety",
        "Substance Abuse Issues",
        "Self-Harm Behaviors",
        "Trust and Relationship Difficulties",
        "Spiritual Trauma",
        "Sexual Dysfunction"
      ],
      faqs: [
        {
          question: "Is there a time limit for filing an LDS abuse claim?",
          answer: "Yes, but many states have extended their statutes of limitations for childhood sexual abuse claims in recent years. Some states have even opened 'lookback windows' that temporarily allow survivors to file claims regardless of when the abuse occurred. The applicable time limit depends on the state where the abuse took place, your age when it occurred, when you discovered the connection between your injuries and the abuse, and other factors. It's important to consult with an attorney promptly to understand your options."
        },
        {
          question: "What evidence is needed for an LDS abuse case?",
          answer: "Helpful evidence can include records of church participation, documentation of reporting the abuse to church authorities, medical or therapy records related to trauma, witness statements from others who knew about the abuse or church's response, communications with church officials, and documentation of how the abuse has impacted your life. However, many successful cases proceed even without extensive documentation, as attorneys understand that survivors often don't have perfect evidence of abuse that occurred years or decades ago."
        },
        {
          question: "Will I have to publicly share my story if I file a claim?",
          answer: "Many LDS abuse cases resolve through confidential settlements before reaching a public trial. Your attorney can file court documents using your initials rather than your full name to protect your privacy. While the legal process may require you to share your experience with certain individuals like your legal team and potentially in depositions, this is different from making your story public. Your attorney will work to protect your privacy throughout the process."
        }
      ]
    },
    {
      id: "22",
      slug: "depo-provera",
      title: "Depo Provera Brain Tumor",
      category: "Depo Provera",
      featured: true,
      shortDescription: "Women who used Depo Provera birth control shots and developed brain tumors may be eligible for compensation.",
      fullDescription: "Depo Provera is a long-acting birth control injection that contains medroxyprogesterone acetate, a synthetic hormone. Recent studies have suggested a potential link between prolonged use of Depo Provera and an increased risk of developing meningiomas, which are typically benign brain tumors that develop in the protective membranes surrounding the brain and spinal cord. A 2024 study published in the BMJ found that women who used Depo Provera for more than a year had a significantly increased risk of developing these brain tumors. Lawsuits allege that Pfizer, the manufacturer of Depo Provera, failed to adequately warn patients and healthcare providers about this serious potential side effect, despite evidence suggesting the connection between synthetic progestins and brain tumor development.",
      imageUrl: "/images/cases/depo.webp",
      compensationInfo: "Depo Provera brain tumor lawsuits are in the early stages of litigation. Compensation may include medical expenses for tumor treatment and surgery, ongoing medical monitoring, lost wages, pain and suffering, and diminished quality of life. Settlement amounts will likely vary based on factors such as tumor size and location, treatment required, and long-term effects on cognitive function and daily activities.",
      eligibilityCriteria: [
        "Used Depo Provera birth control injections for an extended period (typically one year or more)",
        "Diagnosed with meningioma or other brain tumor",
        "Clear medical documentation of both Depo Provera use and brain tumor diagnosis",
        "No other significant risk factors for brain tumor development"
      ],
      relatedConditions: [
        "Meningioma",
        "Intracranial Meningioma",
        "Spinal Meningioma",
        "Headaches and Migraines",
        "Vision Problems",
        "Seizures",
        "Cognitive Impairment",
        "Balance and Coordination Issues"
      ],
      faqs: [
        {
          question: "How long do you need to use Depo Provera to be at risk for brain tumors?",
          answer: "Research suggests that the risk appears to increase with longer duration of use, particularly after one year of continuous use. The 2024 BMJ study found the highest risk among women who used Depo Provera for more than one year, with risk increasing further with longer periods of use."
        },
        {
          question: "Are meningiomas always cancerous?",
          answer: "Most meningiomas are benign (non-cancerous), but they can still cause serious problems due to their location in the brain. Even benign brain tumors can cause headaches, seizures, vision problems, and other neurological symptoms. Some meningiomas may require surgical removal, radiation treatment, or ongoing monitoring, and can significantly impact quality of life."
        },
        {
          question: "Is Depo Provera still available?",
          answer: "Yes, Depo Provera is still available and widely used as a birth control method. However, the recent research findings have led to increased scrutiny and calls for better warning labels. Women currently using or considering Depo Provera should discuss the potential risks and benefits with their healthcare providers."
        }
      ]
    },
    {
      id: "23",
      slug: "roblox-addiction",
      title: "Roblox Gaming Addiction",
      category: "Roblox",
      featured: true,
      shortDescription: "Children who developed gaming addiction and related mental health issues from Roblox may be eligible for compensation.",
      fullDescription: "Roblox is an online gaming platform popular among children and teenagers that allows users to create and play games created by other users. Lawsuits allege that Roblox Corporation deliberately designed their platform to be addictive, using psychological manipulation techniques similar to gambling mechanisms to keep young users engaged for excessive amounts of time. These techniques allegedly include variable reward schedules, social pressure mechanics, fear of missing out (FOMO) triggers, and in-game purchases that create compulsive spending behaviors. Parents and mental health experts have raised concerns about children spending 8-12 hours daily on the platform, neglecting sleep, school, social relationships, and physical health. Lawsuits claim that Roblox knew or should have known that their design choices could lead to addictive behaviors in children but prioritized profits over child welfare.",
      imageUrl: "/images/cases/roblox.png",
      compensationInfo: "Roblox addiction lawsuits are still in early stages of litigation. Potential compensation may include costs for mental health treatment, therapy expenses, educational support for academic difficulties, medical expenses for related health issues, and damages for emotional distress. The amount would likely depend on the severity of addiction, impact on the child's development and family relationships, and treatment requirements.",
      eligibilityCriteria: [
        "Child was a regular Roblox user who developed compulsive gaming behaviors",
        "Excessive gaming time (typically 4+ hours daily) that interfered with normal activities",
        "Documented mental health, academic, or behavioral problems related to gaming",
        "Professional diagnosis or treatment for gaming addiction or related conditions"
      ],
      relatedConditions: [
        "Gaming Disorder/Internet Gaming Addiction",
        "Depression and Anxiety",
        "Sleep Disorders and Insomnia",
        "Academic Performance Decline",
        "Social Isolation",
        "Attention Deficit Issues",
        "Aggressive Behavior",
        "Physical Health Problems (eye strain, poor posture, lack of exercise)"
      ],
      faqs: [
        {
          question: "How is Roblox different from other video games in terms of addiction potential?",
          answer: "Lawsuits allege that Roblox uses particularly manipulative design elements targeting children, including social features that create peer pressure, unpredictable reward systems similar to gambling, constant notifications and events that create fear of missing out, and a virtual economy that encourages real money spending. Unlike traditional games with clear endpoints, Roblox is designed to keep users engaged indefinitely."
        },
        {
          question: "What evidence is needed for a Roblox addiction lawsuit?",
          answer: "Helpful evidence includes documentation of excessive gaming time (screen time reports, gaming logs), medical or therapy records related to behavioral changes, school records showing academic decline, communications with Roblox customer service about account issues, records of in-game purchases, and testimony from family members about behavioral changes. Professional evaluation by a mental health expert familiar with gaming addiction can also be important."
        },
        {
          question: "Are there age requirements for these lawsuits?",
          answer: "These lawsuits typically focus on minors (under 18) who developed addictive behaviors while using Roblox, as children are considered more vulnerable to manipulative design tactics. The specific age range and other eligibility criteria may vary as the litigation develops. Parents or guardians would typically file these claims on behalf of affected children."
        }
      ]
    },
    {
      id: "24",
      slug: "motor-vehicle-accident",
      title: "MVA (Motor Vehicle Accident)",
      category: "MVA",
      featured: true,
      shortDescription: "Victims of car accidents, truck collisions, motorcycle crashes, and other motor vehicle incidents may be entitled to compensation.",
      fullDescription: "Motor vehicle accidents are one of the leading causes of personal injury in the United States, resulting in millions of injuries and thousands of deaths each year. These accidents can involve cars, trucks, motorcycles, buses, and other vehicles, and can be caused by various factors including distracted driving, drunk driving, speeding, reckless driving, poor weather conditions, mechanical failures, or defective auto parts. Victims of motor vehicle accidents may suffer from a wide range of injuries, from minor cuts and bruises to severe traumatic brain injuries, spinal cord damage, broken bones, and internal injuries. In many cases, these accidents result from another party's negligence, entitling victims to compensation for their medical expenses, lost wages, pain and suffering, and other damages.",
      imageUrl: "/images/cases/mva.jpg",
      compensationInfo: "Compensation in motor vehicle accident cases varies widely based on factors such as the severity of injuries, medical expenses, lost income, property damage, degree of fault, and long-term impact on quality of life. Settlements can range from thousands of dollars for minor injuries to millions for catastrophic injuries or wrongful death. Insurance policy limits and available assets of at-fault parties also affect potential compensation.",
      eligibilityCriteria: [
        "Injured in a motor vehicle accident caused by another party's negligence",
        "Documented injuries requiring medical treatment",
        "Clear evidence of fault or liability on the part of another driver or entity",
        "Accident occurred within the statute of limitations period (varies by state)"
      ],
      relatedConditions: [
        "Traumatic Brain Injury (TBI)",
        "Spinal Cord Injuries",
        "Broken Bones and Fractures",
        "Whiplash and Neck Injuries",
        "Back Injuries",
        "Internal Injuries",
        "Burns",
        "Post-Traumatic Stress Disorder (PTSD)",
        "Permanent Disability",
        "Scarring and Disfigurement"
      ],
      faqs: [
        {
          question: "What should I do immediately after a motor vehicle accident?",
          answer: "First, seek medical attention for any injuries, even if they seem minor. Call the police to file an accident report, exchange insurance information with other drivers, take photos of the accident scene and vehicle damage, collect contact information from witnesses, and avoid admitting fault. Contact an experienced personal injury attorney as soon as possible to protect your rights."
        },
        {
          question: "How long do I have to file a motor vehicle accident claim?",
          answer: "The statute of limitations for motor vehicle accident claims varies by state, typically ranging from 1-6 years from the date of the accident. However, it's important to contact an attorney and begin the claims process as soon as possible, as evidence can be lost and witness memories can fade over time. Some claims against government entities have much shorter deadlines."
        },
        {
          question: "What if the other driver doesn't have insurance?",
          answer: "If the at-fault driver is uninsured, you may still have options for compensation through your own uninsured motorist coverage, underinsured motorist coverage, or by pursuing a personal lawsuit against the at-fault driver. Your attorney can help evaluate all available sources of compensation and determine the best strategy for your specific situation."
        }
      ]
    },
    {
      id: "27",
      slug: "rideshare",
      title: "Rideshare Accident Claims",
      category: "Rideshare",
      featured: true,
      shortDescription: "Passengers, drivers, and pedestrians injured in Uber or Lyft crashes may be eligible for compensation.",
      fullDescription: "Rideshare accidents involve Uber, Lyft, and other app-based transportation services. Liability can depend on whether the driver was logged into the app, waiting for a ride, or actively transporting a passenger, which affects which insurance policies apply. Injured passengers, rideshare drivers, pedestrians, bicyclists, and occupants of other vehicles may all have claims. These cases often require careful investigation of driver conduct, app status, and available insurance coverage to maximize compensation.",
      imageUrl: "/images/cases/mva.jpg",
      compensationInfo: "Compensation may include medical expenses, future care costs, lost wages, diminished earning capacity, pain and suffering, and property damage. Amounts depend on injury severity, available insurance limits, and comparative fault.",
      eligibilityCriteria: [
        "Injured in a crash involving an Uber, Lyft, or other rideshare vehicle",
        "The rideshare driver or another party was at least partially at fault",
        "Documented injuries requiring medical treatment",
        "Accident occurred within the applicable statute of limitations"
      ],
      relatedConditions: [
        "Traumatic Brain Injury (TBI)",
        "Whiplash and Neck Injuries",
        "Broken Bones and Fractures",
        "Spinal Cord Injuries",
        "Back and Shoulder Injuries",
        "Internal Injuries",
        "Soft Tissue Injuries",
        "Lacerations and Scarring",
        "Post-Traumatic Stress Disorder (PTSD)"
      ],
      faqs: [
        {
          question: "Who pays for a rideshare accident?",
          answer: "It depends on the driver's app status. If the driver was offline, their personal auto insurance typically applies. If they were waiting for a ride or en route to pick up a passenger, rideshare coverage may apply. If a passenger was in the vehicle, the rideshare company usually provides higher commercial limits. Coverage rules vary by state, so a case review is important."
        },
        {
          question: "What if I was a rideshare passenger?",
          answer: "Passengers can usually pursue claims against the at-fault driver, and rideshare insurance may cover injuries when the ride is active. In some cases, multiple policies apply. An attorney can help identify all available coverage and maximize recovery."
        },
        {
          question: "What should I do after a rideshare crash?",
          answer: "Seek medical care, call the police, and report the crash in the rideshare app. Take photos of the scene, collect driver and witness information, and save trip details or screenshots. Avoid giving recorded statements to insurers before getting legal advice."
        }
      ]
    },
    {
      id: "28",
      slug: "ozempic",
      title: "Ozempic & GLP-1 Injury Claims",
      category: "Ozempic",
      featured: true,
      shortDescription: "Patients who used Ozempic or similar GLP-1 medications and developed severe gastrointestinal injuries may qualify for compensation.",
      fullDescription: "Ozempic and similar GLP-1 receptor agonists have been linked in litigation to serious gastrointestinal complications, including gastroparesis and bowel obstruction. Claimants allege manufacturers failed to adequately warn about persistent stomach paralysis symptoms and related injuries that disrupted daily life and required ongoing treatment.",
      imageUrl: "/images/cases/tylenol.jpg",
      compensationInfo: "Compensation may include medical costs, lost wages, diminished earning capacity, and pain and suffering. Value depends on diagnosis severity, treatment duration, and long-term functional impact.",
      eligibilityCriteria: [
        "Used Ozempic or a similar GLP-1 medication",
        "Diagnosed with severe GI injury such as gastroparesis or bowel obstruction",
        "Symptoms required medical treatment and documentation"
      ],
      relatedConditions: [
        "Gastroparesis",
        "Persistent Vomiting",
        "Bowel Obstruction",
        "Severe Abdominal Pain",
        "Nutritional Complications"
      ],
      faqs: [
        {
          question: "Do I need a formal diagnosis to file an Ozempic claim?",
          answer: "A documented diagnosis strongly supports claim eligibility. Medical records that connect medication use with ongoing gastrointestinal injury are important."
        },
        {
          question: "Are only Ozempic users eligible?",
          answer: "Potential eligibility may also include users of similar GLP-1 medications, depending on injury pattern and legal criteria."
        }
      ]
    },
    {
      id: "29",
      slug: "wtc-exposure",
      title: "WTC Exposure Illness Claims",
      category: "WTC",
      featured: true,
      shortDescription: "First responders, workers, and residents exposed to World Trade Center toxins may be eligible for compensation and benefits support.",
      fullDescription: "After the September 11, 2001 attacks, responders and nearby communities were exposed to hazardous dust and debris. Many later developed respiratory disease, cancers, and other chronic conditions. Claims may involve compensation pathways and support through qualified legal intake and documentation.",
      imageUrl: "/images/cases/camp.jpg",
      compensationInfo: "Compensation and benefits can vary based on diagnosis, exposure history, and eligibility program requirements. Claims can include medical support, lost income recovery, and wrongful death damages where applicable.",
      eligibilityCriteria: [
        "Presence in a qualifying WTC exposure zone or response role",
        "Diagnosed with a qualifying condition tied to WTC exposure",
        "Supporting employment, location, or medical documentation"
      ],
      relatedConditions: [
        "Chronic Respiratory Disease",
        "Asthma",
        "Sinus Disease",
        "GERD",
        "Qualifying Cancers",
        "PTSD"
      ],
      faqs: [
        {
          question: "Can non-first responders qualify for WTC-related claims?",
          answer: "Yes. Depending on exposure history, local workers, students, residents, and cleanup personnel may also qualify."
        },
        {
          question: "What records are most useful for WTC intake?",
          answer: "Medical records, proof of location or employment during exposure windows, and prior benefit-program documentation are typically helpful."
        }
      ]
    },
    {
      id: "25",
      slug: "slip-and-fall",
      title: "Slip and Fall Accident",
      shortDescription: "People injured in slip and fall accidents on someone else's property may be eligible for compensation due to negligent property maintenance.",
      fullDescription: "Slip and fall accidents, also known as premises liability cases, occur when someone is injured due to dangerous or hazardous conditions on another person's or entity's property. These accidents can happen in various locations including grocery stores, restaurants, shopping malls, office buildings, hotels, private residences, parking lots, and sidewalks. Common causes include wet or slippery floors, uneven surfaces, poor lighting, broken stairs, debris or obstacles in walkways, icy conditions, torn carpeting, and inadequate warning signs. Property owners and managers have a legal duty to maintain their premises in a reasonably safe condition and to warn visitors of known hazards. When they fail to meet this duty and someone is injured as a result, they may be held liable for damages.",
      imageUrl: "/images/cases/slipnfall.avif",
      compensationInfo: "Compensation in slip and fall cases depends on the severity of injuries, medical expenses, lost wages, degree of property owner negligence, and the injured person's degree of fault (if any). Settlements can range from thousands of dollars for minor injuries to hundreds of thousands or more for severe injuries requiring surgery, long-term care, or resulting in permanent disability. Factors like ongoing medical treatment needs and impact on earning capacity also affect compensation amounts.",
      eligibilityCriteria: [
        "Injured in a slip, trip, or fall accident on someone else's property",
        "Accident caused by a dangerous or hazardous condition on the property",
        "Property owner knew or should have known about the dangerous condition",
        "Documented injuries requiring medical treatment",
        "Accident reported and documented (when possible)"
      ],
      relatedConditions: [
        "Broken Bones and Fractures",
        "Hip Fractures",
        "Wrist and Arm Injuries",
        "Traumatic Brain Injury",
        "Spinal Injuries",
        "Knee and Ankle Injuries",
        "Soft Tissue Injuries",
        "Bruises and Lacerations",
        "Chronic Pain",
        "Limited Mobility"
      ],
      faqs: [
        {
          question: "What makes a property owner liable for my slip and fall injury?",
          answer: "Property owners can be held liable if they knew or should have reasonably known about a dangerous condition and failed to fix it or warn visitors about it. This could include things like failing to clean up spills promptly, not maintaining proper lighting, ignoring broken stairs, or not placing warning signs around hazardous areas. The key is proving that the property owner was negligent in maintaining safe conditions."
        },
        {
          question: "What should I do immediately after a slip and fall accident?",
          answer: "Seek medical attention right away, even for seemingly minor injuries. Report the accident to the property owner or manager and ask for an incident report to be filed. Take photos of the accident scene, the hazardous condition, and your injuries if possible. Collect contact information from witnesses. Keep records of all medical treatment and expenses. Avoid giving detailed statements to insurance companies before consulting with an attorney."
        },
        {
          question: "Can I still recover compensation if I was partially at fault for my accident?",
          answer: "In many states, you may still be able to recover compensation even if you were partially at fault, though your compensation may be reduced by your percentage of fault. This is called comparative negligence. For example, if you were found to be 20% at fault and your damages were $100,000, you might recover $80,000. The specific rules vary by state, so it's important to consult with a local attorney."
        }
      ]
    },
    {
      id: "26",
      slug: "dog-bite",
      title: "Dog Bite Injury",
      shortDescription: "Victims of dog attacks and bites may be entitled to compensation from the dog owner for medical expenses, scarring, and trauma.",
      fullDescription: "Dog bite incidents affect millions of Americans each year, with children being particularly vulnerable to serious injuries. Dog attacks can result in severe physical injuries including deep lacerations, puncture wounds, nerve damage, infections, scarring, and in some cases, permanent disfigurement. Beyond physical injuries, dog bite victims often experience psychological trauma, including fear of dogs, anxiety, and post-traumatic stress disorder. Most states have specific laws regarding dog owner liability, with many following either strict liability rules (where the owner is responsible regardless of the dog's history) or the 'one bite rule' (where owners are liable if they knew or should have known their dog was dangerous). Dog owners may be held responsible not only for direct attacks but also for injuries that occur when people fall or are knocked down while trying to avoid an aggressive dog.",
      imageUrl: "/images/cases/dog-bite.webp",
      compensationInfo: "Compensation in dog bite cases typically covers medical expenses, plastic surgery and scar revision costs, lost wages, pain and suffering, and psychological counseling. For children, compensation may also include future medical needs and emotional trauma. Settlement amounts vary widely, from thousands for minor bites to hundreds of thousands or more for severe injuries involving extensive scarring, nerve damage, or psychological trauma. Homeowner's or renter's insurance often covers these claims.",
      eligibilityCriteria: [
        "Bitten or attacked by someone else's dog",
        "Documented injuries requiring medical treatment",
        "Clear identification of the dog and its owner",
        "Incident occurred in a location where you had a legal right to be",
        "Reported to appropriate authorities (animal control, police) when possible"
      ],
      relatedConditions: [
        "Deep Lacerations and Puncture Wounds",
        "Scarring and Disfigurement",
        "Nerve Damage",
        "Infections (including risk of rabies)",
        "Broken Bones",
        "Muscle and Tendon Damage",
        "Post-Traumatic Stress Disorder (PTSD)",
        "Anxiety and Fear of Dogs",
        "Need for Plastic Surgery",
        "Permanent Disability"
      ],
      faqs: [
        {
          question: "What should I do immediately after a dog bite?",
          answer: "Seek immediate medical attention, as dog bites can cause serious infections even if they appear minor. Clean the wound thoroughly if possible. Identify the dog and owner, and get their contact and insurance information. Take photos of your injuries and the location where the bite occurred. Report the incident to local animal control authorities and police. Get contact information from any witnesses. Keep detailed records of all medical treatment and expenses."
        },
        {
          question: "Am I entitled to compensation even if I was on the dog owner's property?",
          answer: "In many cases, yes. Most states hold dog owners liable for bites that occur on their property if the victim was lawfully present (such as a mail carrier, delivery person, or invited guest). However, compensation may be limited if you were trespassing or provoking the dog. The specific laws vary by state, with some states having strict liability and others requiring proof that the owner knew the dog was dangerous."
        },
        {
          question: "What if the dog has no history of aggression?",
          answer: "In states with strict liability dog bite laws, the owner can be held responsible even if the dog has never bitten anyone before and showed no previous signs of aggression. These laws recognize that any dog can bite and that owners should be responsible for their pets' actions. However, some states still follow the 'one bite rule,' where owners are only liable if they knew or should have known their dog was dangerous."
        }
      ]
    }

  ];

  const copyOverrides: Record<string, { short: string; background: string; compensation?: string }> = {
    "depo-provera": {
      short: "Clients diagnosed with meningioma after extended Depo Provera use may qualify for legal review and compensation.",
      background:
        "Depo Provera litigation centers on whether long-term injectable contraceptive use increased brain-tumor risk without adequate warning language. Case review typically evaluates duration of use, diagnosis timing, imaging records, and treatment history.",
    },
    "roblox-addiction": {
      short: "Families reporting harmful compulsive Roblox use and measurable behavioral impact may be eligible for claim screening.",
      background:
        "Roblox-related claims focus on alleged addictive platform design, in-game spending loops, and youth harm. Screening usually reviews usage patterns, school or clinical impacts, purchase history, and mental-health documentation.",
    },
    rideshare: {
      short: "Passengers, drivers, and third parties injured in Uber/Lyft crashes can be evaluated for layered insurance recovery.",
      background:
        "Rideshare claims depend on app status at collision time, fault allocation, and available policy tiers. Intake typically includes police reporting, app trip records, injury treatment timelines, and insurer correspondence.",
    },
    "talcum-powder": {
      short: "Long-term talc users diagnosed with ovarian cancer or related conditions may qualify for compensation review.",
      background:
        "Talc litigation reviews whether consistent product use and diagnosis patterns support product-liability claims. Evaluation generally includes brand history, use duration, pathology records, and treatment documentation.",
    },
    ozempic: {
      short: "Consumers with severe GI injury after Ozempic or similar GLP-1 use may qualify for legal intake.",
      background:
        "GLP-1 injury claims examine persistent gastrointestinal complications, warning adequacy, and continuity of care. Case screening commonly requires prescribing records, symptom progression, and specialist evaluations.",
    },
    "motor-vehicle-accident": {
      short: "MVA claim intake supports victims with documented injuries, fault evidence, and unresolved financial loss.",
      background:
        "Motor-vehicle cases are assessed around negligence, policy limits, medical causation, and wage impact. Strong files usually include crash reports, treatment records, imaging, and documented work disruption.",
    },
    "wtc-exposure": {
      short: "Individuals with qualifying WTC exposure and related illness can be assessed for compensation and benefit pathways.",
      background:
        "WTC exposure matters often involve complex proof of location, role, and diagnosis eligibility. Intake typically reviews residence/employment history, exposure windows, and certified medical evidence.",
    },
    pfas: {
      short: "PFAS-exposed communities and individuals with linked illnesses may be eligible for claim evaluation.",
      background:
        "PFAS cases focus on contamination pathways, duration of exposure, and medically supported outcomes. Reviews usually include water-source history, environmental reports, and condition-specific treatment records.",
    },
    "pfas-water-contamination": {
      short: "PFAS water contamination victims with documented health impact may qualify for structured legal review.",
      background:
        "These claims evaluate contamination source, chronic exposure, and diagnosis connection. Intake generally combines water-quality history with medical documentation and timing analysis.",
    },
    exactech: {
      short: "Patients with premature Exactech implant failure may be eligible for revision-related compensation claims.",
      background:
        "Exactech litigation examines implant model, oxidation risk, failure timeline, and revision need. Strong intake files include implant labels, surgeon notes, imaging, and post-op complication history.",
    },
    "hair-straightener-cancer": {
      short: "Frequent chemical straightener users with reproductive cancer diagnoses may qualify for case screening.",
      background:
        "Hair-straightener litigation evaluates product exposure frequency, diagnosis type, and treatment burden. Intake often reviews brand history, pathology records, and longitudinal care documentation.",
    },
  };

  const defaultShort = (title: string) =>
    `${title} claim evaluations are available for individuals with documented injury, exposure, or product-use history.`;

  const defaultBackground = (title: string) =>
    `${title} case screening focuses on legal eligibility, documentation strength, and timeline fit. Intake teams typically review diagnosis records, exposure or usage history, and supporting evidence before referral.`;

  const defaultComp = (title: string) =>
    `Potential ${title.toLowerCase()} compensation may include medical costs, lost income, ongoing care, and non-economic damages, depending on documented severity and liability evidence.`;

  return cases.map((c) => {
    const override = copyOverrides[c.slug] || copyOverrides[c.slug.replace("-water-contamination", "")] || null;
    return {
      ...c,
      shortDescription: override?.short ?? defaultShort(c.title),
      fullDescription: override?.background ?? defaultBackground(c.title),
      compensationInfo: override?.compensation ?? defaultComp(c.title),
    };
  });
};



export const getCaseBySlug = async (slug: string): Promise<CaseType | undefined> => {
  const allCases = getAllCaseTypes();
  return allCases.find(c => c.slug === slug);
};
