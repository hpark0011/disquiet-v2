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
    <div className='bg-white rounded-2xl'>
      <div className='flex justify-between items-center py-2 px-3'>
        <span className='text-sm'>로그를 작성해보세요.</span>
        <a href='#' className='text-xs flex items-center text-link gap-1'>
          로그 작성 팁<Icon name='info.circle' className='w-4 h-4' />
        </a>
      </div>
      <div className='h-[1px] bg-divider-primary' />
      <div className='flex items-start space-x-4 p-4'>
        <Icon name='user' className='w-10 h-10 text-gray-400' />
        <div className='flex-grow'>
          <EditorContent
            editor={editor}
            className='min-h-[56px] rounded-md p-2 mb-2 border-none'
            placeholder='어떤 것을 만들고 있나요?'
          />
          <div className='flex justify-between items-center'>
            <div className='flex space-x-2'>
              <button className='text-blue-500'>
                <Icon name='image' className='w-5 h-4' />
              </button>
              <button className='text-blue-500'>
                <Icon name='poll' className='w-5 h-4' />
              </button>
              <button className='text-blue-500'>
                <Icon name='hashtag' className='w-5 h-4' />
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
