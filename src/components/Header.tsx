import React from 'react';
import { Logo } from './Logo';
interface HeaderProps {
  openModal: () => void;
}
export function Header({
  openModal
}: HeaderProps) {
  return <header className="w-full absolute top-0 left-0 z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
      <Logo />
      <button onClick={openModal} className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium text-sm">
        Get Started
      </button>
    </div>
  </header>;
}