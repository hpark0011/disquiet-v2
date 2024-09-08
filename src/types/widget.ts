type CardSize = '1x1' | '2x1' | '1x2' | '2x2';

interface WidgetCard {
  id: number;
  type?: string;
  content?: string;
  size: CardSize;
}

export type { CardSize, WidgetCard };
