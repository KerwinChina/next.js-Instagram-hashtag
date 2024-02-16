"use client"
import Image from 'next/image'
import Head from './Head';
import ChannelTop from './ChannelTop';
import Post from '../components/Post'; // 根据实际路径调整引用
import React, { useState, useEffect, useRef } from 'react';
interface PostProps {
  images: string;
  id?: number;
  likeCnt: number;
  chatsCnt: number;
}
export default function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // API 请求来获取图片列表
    const fetchPosts = async () => {
      console.info("fetchPosts page=" + page)
      const response = await fetch(`/api/channel/houseplants/posts?page=${page}`);
      if (response.ok) {
        const data: PostProps[] = await response.json();
        //  setPosts(data);
        setPosts([...posts, ...data]);
        setIsLoading(false); // 数据加载完成
      } else {
        // 处理错误响应
        console.error('Failed to fetch posts:', response.statusText);
      }
    };
    if (isLoading) {
      fetchPosts();
    }

  }, [isLoading, page]);
  // 使用 IntersectionObserver 实现无限滚动
  useEffect(() => {
    const options = {
      root: null, // 相对于视口观察
      rootMargin: '20px',
      threshold: 1.0
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => observer && observer.disconnect();
  }, []);

  const handleObserver = (entities: any) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setIsLoading(true); // 开始加载数据

      setPage((prev) => prev + 1);
    }
  };
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Head />
      <ChannelTop />

      <div className="container mx-auto p-4">
        Top posts:
        <div className="grid grid-cols-3 gap-4 ml-20p">
          {posts.map((post) => (
            <Post key={post.id} imageUrl={post.images} likes={post.likeCnt} comments={post.chatsCnt} />
          ))}
        </div>
      </div>
      <div ref={loader}>Loading...</div>
    </main>
  )
}
