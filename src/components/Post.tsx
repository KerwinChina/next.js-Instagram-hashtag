import React from 'react';
import { ChatAlt2Icon, HeartIcon } from '@heroicons/react/outline';

// Define the props that the Post component expects
interface PostProps {
  imageUrl: string;
  likes: number;
  id?: number;
  comments: number;
}

const Post: React.FC<PostProps> = ({ imageUrl, likes, comments }) => {
  return (
    <div className="relative">
      <img className="w-full h-auto object-cover" src={imageUrl} alt="Post" />
      <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="flex items-center text-white">
          <HeartIcon className="h-6 w-6" />
          {likes}
        </span>
        <span className="flex items-center text-white">
          <ChatAlt2Icon className="h-6 w-6" />
          {comments}
        </span>
      </div>
    </div>
  );
};

export default Post;
