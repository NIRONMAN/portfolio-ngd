"use client";
import { CaretLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import React from 'react';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'About Me', href: '/about-me' },
  { label: 'Contact Me', href: '/contact' },
];

const NavBar: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <div className="flex items-center justify-between p-4 text-white">
      <h1 className="text-3xl font-bold flex flex-row items-center">
        <CaretLeftOutlined onClick={() => router.back()} />
        <div
          onClick={() => handleNavigation("/")}
          className="hover:text-gray-300 transition-colors pl-10 cursor-pointer"
        >
          Niranjan Dabhade
        </div>
      </h1>
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li
            key={item.href}
            onClick={() => handleNavigation(item.href)}
            className="hover:text-gray-300 transition-colors cursor-pointer text-2xl "
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
