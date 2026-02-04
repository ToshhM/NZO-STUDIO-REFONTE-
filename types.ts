
export type VideoPlatform = 'vimeo' | 'youtube';

export interface Video {
  id: string;
  title: string;
  platform: VideoPlatform;
  thumbnail: string;
  url: string;
  hash?: string; // For private Vimeo videos
  description?: string;
}

export interface Category {
  id: string;
  title: string;
  subtitle?: string;
  videos: Video[];
}
