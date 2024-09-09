export interface Profile {
  name: string;
  username: string;
  bio: string;
  followers: number;
  following: number;
  avatar: string;
  coverImage?: string;
  company?: string;
  location?: string;
  website?: string;
}

export interface ProfileHeaderProps {
  profile: Profile;
}
