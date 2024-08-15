"use client";
import { CaretLeftOutlined } from '@ant-design/icons';
import Link from 'next/link';
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
  return (
    <nav className="flex items-center justify-between p-4 md:p-6 lg:p-8 text-white">
      <h1 className="text-3xl font-bold flex items-center">
        <CaretLeftOutlined onClick={() => router.back()} title="Go Back" className="mr-2 cursor-pointer" />
        <Link href="/" className="hover:text-gray-300 transition-colors pl-4">
          Niranjan Dabhade
        </Link>
      </h1>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-gray-300 transition-colors text-2xl">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
