export interface Product {
  id: number;
  slug: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  category: string;
  inStock: boolean;
  description?: string;
  ingredients?: string;
  benefits?: string[];
  isFeatured?: boolean;
  isPrescription?: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}

export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  qualification: string;
  experience: number;
  fee: string;
  rating: number;
  patients: number;
  image: string;
  location: string;
  isAvailable: boolean;
  availability: 'today' | 'tomorrow';
  registrationNo?: string;
  languages?: string[];
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  estimatedDelivery: string;
  status: 'placed' | 'progress' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'paid' | 'pending';
  total: number;
  items: OrderItem[];
  shippingAddress?: Address;
  billingAddress?: Address;
}

export interface OrderItem {
  id: number;
  productId: number;
  brand: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface Address {
  id: number;
  name: string;
  phone: string;
  fullAddress: string;
  label?: string;
  isDefaultBilling?: boolean;
  isDefaultShipping?: boolean;
}

export interface Review {
  id: number;
  user: string;
  avatar?: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  isVerified: boolean;
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}
