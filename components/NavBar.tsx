"use client";

import { MoonFilled, SunFilled } from '@ant-design/icons';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Home', href: 'header' },
  { label: 'About', href: 'about' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'Contact', href: 'contact' },
];

const NavBar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const router=useRouter();
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.href));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavigation = (href: string) => {
    if (pathname !== '/') return;

    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="h-[76px] flex items-center justify-between p-4 text-black dark:text-white  flex-no-wrap fixed w-full top-0 z-50 ">
      <h1 className="text-2xl font-bold flex flex-row items-center">
        <Image alt='Coder' src={"/programmer.png"} height={36} width={36} />
        <div
          onClick={() =>router.replace("/") }
          className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors pl-3 cursor-pointer"
        >
          nironman
        </div>
      </h1>

      <div className='flex flex-row items-center gap-1'>
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant={'outline'}
          size={'lg'}
          className='bg-transparent dark:bg-transparent rounded-full border-none'
        >
          {theme === "light" ? <SunFilled style={{ fontSize: '24px' }} /> : <MoonFilled style={{ fontSize: '24px' }} />}
        </Button>
        {pathname === '/' && (
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer text-xl ${
                  activeSection === item.href ? 'text-blue-500 dark:text-blue-400 font-bold' : ''
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;