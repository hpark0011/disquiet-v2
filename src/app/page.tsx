import FeedTabs from '@/components/FeedTabs';
import MainFeed from './(home)/components/MainFeed';

export default function Home() {
  return (
    <main>
      <FeedTabs />
      {/* Rest of your page content */}
      <MainFeed />
    </main>
  );
}
