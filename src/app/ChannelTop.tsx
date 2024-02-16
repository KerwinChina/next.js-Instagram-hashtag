// components/Head.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
const Head = () => {

  const [imageUrl, setImageUrl] = useState("");
  const [postCnt, setPostCnt] = useState(0);
  useEffect(() => {

    const fetchPosts = async () => {
      const response = await fetch(`/api/channel/houseplants`);
      if (response.ok) {
        const data = await response.json();
        //  setPosts(data);
        console.info(data);
        setImageUrl(data.images);
        setPostCnt(data.total);
      } else {
        // 处理错误响应
        console.error('Failed to fetch posts:', response.statusText);
      }
    };

    fetchPosts();
  }, []);
  return (

    <div className="flex items-center space-x-4 w-full " >



      <img
        src={imageUrl}
        alt="Profile"
        style={{ marginLeft: '20%' }}
        className="w-24 h-24 object-cover rounded-full " // 
      />
      {/* 文字部分 */}
      <div>
        <p className="text-lg font-semibold">#houseplants</p> {/* */}
        <p className="text-lg">{postCnt}</p>
        <p className="text-lg">posts</p>
      </div>

    </div>

  );
}

export default Head;
