export interface ServiceItem {
  id: string;
  category: 'automotive' | 'residential';
  title: string;
  badge: string;
  description: string;
  features: string[];
  duration: string;
  whatsappMessage: string;
  image: string;
  popular?: boolean;
}

export interface DifferentialItem {
  iconName: string;
  title: string;
  tag: string;
  description: string;
}

export interface TestimonialItem {
  author: string;
  role: string;
  city: string;
  avatarText: string;
  rating: number;
  text: string;
  vehicleOrService: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Geral' | 'Automóvel' | 'Residencial';
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  subtitle: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappUrl: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
    fullFormatted: string;
  };
  googleMapsDirectionsUrl: string;
  googleMapsEmbedUrl: string;
  rating: {
    score: number;
    totalReviews: number;
    platform: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}
