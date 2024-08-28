'use client';

import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Icon from '@/components/Icon';
import { Button } from './ui/button';

const TwitterLikeEditor: React.FC = () => {
  const [content, setContent] = useState('');

  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  const handlePost = () => {
    console.log('Posted:', content);
    editor?.commands.setContent('');
  };

  return (
    <div className='bg-white shadow rounded-2xl p-4'>
      <div className='flex items-start space-x-4'>
        <Icon name='user' className='w-10 h-10 text-gray-400' />
        <div className='flex-grow'>
          <EditorContent
            editor={editor}
            className='min-h-[72px] border rounded-lg p-2 mb-2'
          />
          <div className='flex justify-between items-center'>
            <div className='flex space-x-2'>
              <button className='text-blue-500'>
                <Icon name='image' className='w-5 h-4' />
              </button>
              <button className='text-blue-500'>
                <Icon name='paperclip' className='w-5 h-4' />
              </button>
            </div>
            <div className='flex space-x-2'>
              <Button variant='secondary' size='sm'>
                Settings
              </Button>
              <Button variant='primary' size='sm' onClick={handlePost}>
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterLikeEditor;
