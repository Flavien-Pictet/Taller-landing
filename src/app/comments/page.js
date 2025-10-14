export const metadata = {
  robots: { index: false, follow: false },
  title: 'Comments Bank',
  description: 'Internal comments bank with quick copy for comments, replies, and assets.'
};

import CommentsClient from './ui/CommentsClient';

export default function Page() {
  return <CommentsClient />;
}
