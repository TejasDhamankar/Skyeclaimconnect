export interface CaseType {
  id: string;
  slug: string;
  title: string;
  category?: string;
  featured?: boolean;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  compensationInfo: string;
  eligibilityCriteria: string[];
  relatedConditions: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  caseType: string;
  quote: string;
  rating: number;
  date: string;
}
