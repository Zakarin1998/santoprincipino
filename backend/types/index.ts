export interface SocialLinks {
  instagram: string
  twitter: string
  discord: string
}

export interface ChiaraProfile {
  name: string
  title: string
  tagline: string
  bio: string
  bioDetails: string[]
  avatarImage: string
  subtitle: string
  socialLinks: SocialLinks
}

export interface GalleryItem {
  id: number
  title: string
  image: string
  description: string
  category: string
}

export interface CommissionType {
  type: string
  price: string
  description: string
}

export interface CommissionsInfo {
  status: string
  waitTime: string
  types: CommissionType[]
  notes: string[]
}

export interface Testimonial {
  name: string
  avatar: string
  comment: string
  rating: number
}

export interface ChiaraData {
  profile: ChiaraProfile
  gallery: GalleryItem[]
  commissions: CommissionsInfo
  testimonials: Testimonial[]
}

export interface Fairy {
  id: number
  title: string
  image: string
  description: string
  details: string
  powers: string[]
  category: string
}