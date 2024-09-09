import { Log } from '@/types/log';
import PostCard from '@/components/post-card/PostCard';

// Replace this with actual API call in production
import exampleAvatar from '../../../../public/images/profile.jpg'; // Replace with actual image path
import exampleImage from '../../../mock_images/feed/tabs.png'; // Replace with actual image path

async function getLogById(id: string): Promise<Log> {
  return {
    id,
    author: {
      name: 'Author Name', // Replace with actual author name
      role: 'Author Role', // Replace with actual author role
      avatar: exampleAvatar,
    },
    timestamp: new Date().toISOString(),
    content: `This is post ${id}`,
    tags: ['example', 'post'],
    featuredImage: exampleImage,
    views: 0, // Replace with actual views count
    upvotes: 0, // Replace with actual upvotes count
    commentCount: 0, // Replace with actual comment count
    repostCount: 0, // Replace with actual repost count
  };
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getLogById(params.id);
  return { title: `Post ${post.id}` };
}

export default async function LogDetail({
  params,
}: {
  params: { id: string };
}) {
  const post = await getLogById(params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='max-w-[640px] mx-auto mt-8'>
      <PostCard post={post} />
    </div>
  );
}
