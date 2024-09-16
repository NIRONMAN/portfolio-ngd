"use client";
import { CaretLeftOutlined, MoonFilled, SunFilled } from '@ant-design/icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [

  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-me' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/contact' },
  { label: 'Contact', href: '/contact' },
];

const NavBar: React.FC = () => {
  const router = useRouter();
  const {theme,setTheme}=useTheme();
  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <div className="h-[76px] flex items-center justify-between p-4 text-white bg-slate-950 ">
      <h1 className="text-2xl font-bold flex flex-row items-center">
        {/* <CaretLeftOutlined onClick={() => router.back()} /> */}
        <Image alt='Coder' src={"/programmer.png"} height={36} width={36} ></Image>
        <div
          onClick={() => handleNavigation("/")}
          className="hover:text-gray-300 transition-colors pl-3 cursor-pointer"
        >
          nironman
        </div>
      </h1>

      <div className='flex flex-row items-center gap-1'>
        <Button onClick={()=>setTheme(theme==="dark"? "light":"dark")} variant={'outline'} size={'lg'} className='bg-transparent rounded-full border-none'> 
          {
            theme==="light"?<SunFilled size={100}></SunFilled>:<MoonFilled size={100}></MoonFilled>
          }
        </Button>
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li
            key={item.href}
            onClick={() => handleNavigation(item.href)}
            className="hover:text-gray-300 transition-colors cursor-pointer text-xl "
          >
            {item.label}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default NavBar;
