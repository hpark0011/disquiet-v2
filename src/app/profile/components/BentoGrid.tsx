import React from 'react';
import { Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Profile } from '@/types/profile';
import BentoItem, { BentoItemData } from './BentoItem';
import { Button } from '@/components/ui/button';
import DragDropContextWithNoSSR from './DragDropContextWithNoSSR';

interface BentoGridProps {
  profile: Profile;
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const BentoGrid: React.FC<BentoGridProps> = ({
  profile,
  isEditMode,
  setIsEditMode,
}) => {
  const [items, setItems] = React.useState<BentoItemData[]>([
    { id: 'item-1', type: 'skills', content: 'Skills', colSpan: 2, rowSpan: 1 },
    {
      id: 'item-2',
      type: 'project',
      content: 'Current Project',
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 'item-3',
      type: 'github',
      content: 'GitHub Activity',
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 'item-4',
      type: 'availability',
      content: 'Availability Status',
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 'item-5',
      type: 'articles',
      content: 'Recent Articles',
      colSpan: 2,
      rowSpan: 1,
    },
    {
      id: 'item-6',
      type: 'playlist',
      content: 'Current Playlist',
      colSpan: 1,
      rowSpan: 1,
    },
  ]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
  };

  return (
    <div className='my-8'>
      <Button onClick={() => setIsEditMode(!isEditMode)} className='mb-4'>
        {isEditMode ? 'Save Layout' : 'Edit Layout'}
      </Button>
      <DragDropContextWithNoSSR onDragEnd={onDragEnd}>
        <Droppable droppableId='bento-grid'>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='grid grid-cols-4 gap-4'
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridAutoRows: '120px',
              }}
            >
              {items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                  isDragDisabled={!isEditMode}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        gridColumn: `span ${item.colSpan || 1}`,
                        gridRow: `span ${item.rowSpan || 1}`,
                      }}
                    >
                      <BentoItem item={item} isEditMode={isEditMode} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContextWithNoSSR>
    </div>
  );
};

export default BentoGrid;
