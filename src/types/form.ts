export interface CaseEvaluationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  caseType: string;
  exposurePeriod: string;
  medicalCondition: string;
  additionalInfo: string;
  agreeToTerms: boolean;
  jornayaLeadId?: string;
  ipAddress?: string;
  userAgent?: string;
  submittedAt?: Date;

  // Case Specific Fields
  ssn?: string;
  dob?: string;
  incidentDate?: string;
  cancerType?: string;
  isDeceased?: string;
  talcPerineal4yr?: string;
  talcBrcaNegative?: string;
  diagnosed18To70?: string;
  diagnosisDate?: string;
  startDate?: string;
  endDate?: string;
  pharmacyName?: string;
  pharmacyAddress?: string;
  pharmacyPhone?: string;
  doctorName?: string;
  facilityName?: string;
  facilityAddress?: string;
  facilityPhone?: string;
  pcpName?: string;
  pcpAddress?: string;
  pcpPhone?: string;
  pcpEmail?: string;
  medicalNotes?: string;
  emergencyName?: string;
  emergencyRelationship?: string;
  emergencyAddress?: string;
  emergencyPhone?: string;
  emergencyEmail?: string;
  dateOfDeath?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  caseType: string;
  ipAddress?: string;
  userAgent?: string;
  submittedAt?: Date;
}

export interface FormStatus {
  type: 'success' | 'error' | '';
  message: string;
}
