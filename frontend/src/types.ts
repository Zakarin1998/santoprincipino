export interface TokenData {
  name: string;
  symbol: string;
  tagline: string;
  contractAddress: string;
  socialLinks: {
    telegram: string;
    twitter: string;
    opensea: string;
  };
  tokenomics: {
    totalSupply: string;
    circulating: string;
    marketCap: string;
    taxBuy: string;
    taxSell: string;
  };
  safu: string[];
  chart: string;
  priceHistory: {
    date: string;
    price: number;
  }[];
}

export interface Relic {
  symbol: string;
  name: string;
  description: string;
  contract?: string;
}

export interface UniswapOrigin {
  title: string;
  description: string;
}

export interface UniswapOrigins {
  jacky_hayden: UniswapOrigin;
  devcon4: UniswapOrigin;
  ashleigh: UniswapOrigin;
}

// Nuovi tipi per i dati di Chiara
export interface ChiaraProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  bioDetails: string[];
  avatarImage: string;
  subtitle: string;
  socialLinks: {
    instagram: string;
    twitter: string;
    discord: string;
  };
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
}

export interface CommissionType {
  type: string;
  price: string;
  description: string;
}

export interface CommissionsInfo {
  status: string;
  waitTime: string;
  types: CommissionType[];
  notes: string[];
}

export interface Testimonial {
  name: string;
  avatar: string;
  comment: string;
  rating: number;
}

export interface ChiaraData {
  profile: ChiaraProfile;
  gallery: GalleryItem[];
  commissions: CommissionsInfo;
  testimonials: Testimonial[];
}
