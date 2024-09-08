import { CardSize, WidgetCard } from '@/types/widget';
import { useState, useEffect } from 'react';

const initialWidgets: WidgetCard[] = [
  { id: 1, type: 'skills', content: 'Skills', size: '2x1' },
  { id: 2, type: 'project', content: 'Current Project', size: '1x1' },
  { id: 3, type: 'github', content: 'GitHub Activity', size: '1x1' },
  { id: 4, type: 'availability', content: 'Availability Status', size: '1x1' },
  { id: 5, type: 'articles', content: 'Recent Articles', size: '2x1' },
  { id: 6, type: 'playlist', content: 'Current Playlist', size: '1x1' },
];

export const useWidgets = () => {
  const [widgets, setWidgets] = useState<WidgetCard[]>(initialWidgets);

  const changeWidgetSize = (id: number, newSize: CardSize) => {
    setWidgets(
      widgets.map((widget) =>
        widget.id === id ? { ...widget, size: newSize } : widget
      )
    );
  };

  // Calculate the total occupied cells
  const occupiedCells = widgets.reduce((total, widget) => {
    const [width, height] = widget.size.split('x').map(Number);
    return total + width * height;
  }, 0);

  // Calculate the number of placeholder items needed
  const placeholderCount = Math.max(0, 16 - occupiedCells);

  useEffect(() => {
    const fetchWidgets = async () => {
      const response = await fetch('/api/cards');
      const data = await response.json();
      setWidgets(data);
    };

    fetchWidgets();
  }, []);

  return { widgets, setWidgets, changeWidgetSize, placeholderCount };
};
