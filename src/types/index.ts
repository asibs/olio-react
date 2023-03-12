export interface Listing {
  id: number;
  title: string;
  description: string;
  section: string;
  location: Location;
  created_at: string;
  updated_at: string;
  status: string;
  expiry: string;
  collection_notes: string;
  reactions: Reactions;
  photos: Photo[];
  user: User;
}

export interface Location {
  latitude: number;
  longitude: number;
  distance: number;
}

export interface Reactions {
  likes: number;
  views: number;
}

export interface Photo {
  uid: string;
  files: {
    original: string;
    large: string;
    medium: string;
    small: string;
  }
}

export interface User {
  id: number;
  first_name: string;
  current_avatar: {
    original: string;
    large: string;
    small: string;
  }
  rating: {
    rating: number;
  }
}
