import React from 'react';
import DragDropContextWithNoSSR from './DragDropContextWithNoSSR';
import { Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Profile } from '@/types/profile';
import BentoItem, { BentoItemData } from './BentoItem';
import { Button } from '@/components/ui/button';

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
      <Button
        variant={'outline'}
        size='sm'
        onClick={() => setIsEditMode(!isEditMode)}
        className='mb-4'
      >
        {isEditMode ? 'Save Layout' : 'Edit Layout'}
      </Button>
      <DragDropContextWithNoSSR onDragEnd={onDragEnd}>
        <Droppable droppableId='bento-grid' direction='horizontal'>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='grid grid-cols-4 gap-2'
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
                  {(provided, snapshot) => (
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
                      <BentoItem
                        item={item}
                        isEditMode={isEditMode}
                        isDragging={snapshot.isDragging}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default BentoGrid;
