'use client';

import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Icon from '@/components/Icon';
import { Button } from './ui/button';

interface LogEditorProps {
  onSubmit: (content: string) => void;
  onClose?: () => void;
  isModal?: boolean; // Add this prop
}

const LogEditor: React.FC<LogEditorProps> = ({
  onSubmit,
  onClose,
  isModal = false,
}) => {
  const [content, setContent] = useState('');

  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  const handlePost = () => {
    onSubmit(content);
    editor?.commands.setContent('');
  };

  return (
    <div className='bg-white rounded-2xl w-full'>
      <div className='flex justify-between items-center py-2 px-3'>
        <span className='text-xs'>로그를 작성해보세요.</span>
        <a href='#' className='text-xs flex items-center text-link gap-1'>
          로그 작성 팁<Icon name='info.circle' className='w-4 h-4' />
        </a>
      </div>
      <div className='h-[1px] bg-divider-primary' />
      <div className='flex items-start space-x-4 px-3 py-3'>
        <div className='flex-grow'>
          <EditorContent
            editor={editor}
            className={`${
              isModal ? 'min-h-[96px]' : 'min-h-[56px]'
            } rounded-md p-2 mb-2 border-none`}
            placeholder='어떤 것을 만들고 있나요?'
          />
          <div className='flex justify-between items-center'>
            <div className='flex space-x-2 pl-1'>
              <button className='text-blue-500'>
                <Icon name='photo.fill' className='w-6 h-5' />
              </button>
              <button className='text-blue-500'>
                <Icon name='checklist' className='w-6 h-5' />
              </button>
              <button className='text-primary flex items-center'>
                <Icon name='number' className='w-6 h-5' />
                <span className='text-xs'>태그 달기</span>
              </button>
            </div>
            <div className='flex space-x-1'>
              <Button variant='secondary' size='xs' onClick={onClose}>
                취소
              </Button>
              <Button variant='primary' size='xs' onClick={handlePost}>
                로그 남기기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogEditor;
