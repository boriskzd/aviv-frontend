export interface PostalAddress {
  street_address: string;
  postal_code: string;
  city: string;
  country: string; // The country of the Postal Address,
  // as a ISO 3166-1 alpha-2 country code.	2 chars string
}

export interface ListingFormData {
  name: string;
  postal_address: PostalAddress;
  description: string;
  building_type: 'STUDIO' | 'APARTMENT' | 'HOUSE';
  latest_price_eur: number;
  surface_area_m2: number;
  rooms_count: number;
  contact_phone_number: string; // Listing main contact phone number,
  // following the E.164 standard. Match patten : ^\+[1-9]\d{1,14}$.
}
