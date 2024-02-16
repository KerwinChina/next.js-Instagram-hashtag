// components/Head.tsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image'
const Head = () => {
  // 使用 state 来跟踪按钮是否被点击
  const [loginClicked, setLoginClicked] = useState(true);
  const [signupClicked, setSignupClicked] = useState(false);
  const handleLoginClick = () => {
    setLoginClicked(true);
    setSignupClicked(false);
  };

  const handleSignupClick = () => {
    setSignupClicked(true);
    setLoginClicked(false);
  };
  return (
    <div className="flex justify-between items-center w-full ">

      <div className="text-white  w-1/4 " style={{ marginLeft: '20%' }}>

        <Image
          src="/ins.png"
          alt="instagram  Logo"
          className="dark:invert "
          width={200}
          height={68}
          priority
        />
      </div>

      <div className="flex-grow-0" style={{ marginRight: '20%' }}>
        {loginClicked == false ? (
          <span className="text-black mr-2 cursor-pointer" onClick={() => handleLoginClick()}>Login</span>
        ) : (
          <button className="bg-[#0092F6] text-white px-4 py-2 rounded hover:bg-[#0092F6] mr-2" onClick={() => setLoginClicked(true)}>Login</button>
        )}
        {signupClicked ? (
          <button className="bg-[#0092F6] text-white px-4 py-2 rounded hover:bg-[#0092F6]" onClick={() => setSignupClicked(false)}>Sign Up</button>
        ) : (
          <span className="text-black cursor-pointer" onClick={() => handleSignupClick()}>Sign Up</span>
        )}
      </div>

    </div>
  );
}

export default Head;
