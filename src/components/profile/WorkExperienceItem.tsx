import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

export default function Component() {
  return (
    <div className='max-w-2xl mx-auto'>
      <h2 className='text-xl font-semibold'>이력</h2>
      <div className='space-y-6'>
        <div className='flex justify-between items-start'>
          <span className='text-sm text-muted-foreground'>2021 - 재직중</span>
          <h3 className='text-xl font-semibold'>CEO @ Disquiet</h3>
        </div>

        <p className='text-sm text-muted-foreground'>
          2021년 디스콰이엇을 창업하여 개발 및 운영을 해오고 있습니다. PMF를
          찾기 위해 제품 개발, 투자 유치, 팀빌딩에 집중하고 있습니다.
          매쉬업엔젤스, KB 인베스트먼트, 위벤처스, 디캠프에 투자를 받았습니다.
        </p>

        <div>
          <h4 className='text-sm font-semibold mb-2'>스택</h4>
          <div className='flex gap-2'>
            <Badge
              variant='secondary'
              className='bg-yellow-100 text-yellow-800'
            >
              <span className='mr-1'>JS</span>
              JavaScript
            </Badge>
            <Badge
              variant='secondary'
              className='bg-purple-100 text-purple-800'
            >
              <span className='mr-1'>🎨</span>
              Figma
            </Badge>
            <Badge variant='secondary' className='bg-blue-100 text-blue-800'>
              <span className='mr-1'>⚛️</span>
              ReactJS
            </Badge>
          </div>
        </div>

        <div>
          <h4 className='text-sm font-semibold mb-2'>프로덕트</h4>
          <span className='font-semibold'>D* 디스콰이엇</span>
        </div>

        <div>
          <h4 className='text-sm font-semibold mb-2'>팀원</h4>
          <div className='flex -space-x-2 overflow-hidden'>
            {[...Array(6)].map((_, index) => (
              <Avatar key={index} className='border-2 border-background'>
                <AvatarImage
                  src={`/placeholder.svg?height=32&width=32`}
                  alt={`Team member ${index + 1}`}
                />
              </Avatar>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
