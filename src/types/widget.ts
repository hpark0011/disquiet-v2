export type CardSize = '1x1' | '2x1' | '1x2' | '2x2';

export interface WidgetCard {
  id: string;
  type: string;
  content: string;
  size: CardSize;
}
