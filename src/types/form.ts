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
