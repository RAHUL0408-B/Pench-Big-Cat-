export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  children: number;
  roomsCount: number;
  preferredCategory: string;
  preferredRoom?: string;
  specialRequests?: string;
  agreePrivacy: boolean;
  honeypot?: string;
}

export interface InquiryApiResponse {
  success: boolean;
  message: string;
  inquiryId?: string;
  errors?: Record<string, string[]>;
}
