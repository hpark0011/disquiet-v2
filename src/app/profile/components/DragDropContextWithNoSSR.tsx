import React from 'react';
import { DragDropContext, DragDropContextProps } from 'react-beautiful-dnd';
import dynamic from 'next/dynamic';

const DragDropContextWithNoSSR = dynamic(
  () =>
    Promise.resolve((props: DragDropContextProps) => (
      <DragDropContext {...props} />
    )),
  { ssr: false }
);

export default DragDropContextWithNoSSR;
