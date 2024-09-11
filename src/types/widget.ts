import { Profile } from './profile';

export type CardSize = '1x1' | '2x1' | '1x2' | '2x2';

export interface WidgetCard {
  id: string;
  type: string;
  content: string;
  size: CardSize;
}

export interface BentoGridProps {
  profile: Profile;
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}
