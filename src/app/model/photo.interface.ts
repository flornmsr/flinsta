export interface Photo {
  alt_description: string;
  id: number;
  width: number;
  height: number;
  created_at: Date;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  links: {
    html: string;
  }
  user: {
    links: {
      html: string;
    }
    username: string;
    name: string;
    profile_image: { large: string; medium: string; small: string };
  };
};