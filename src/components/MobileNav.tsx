import { Disclosure } from '@headlessui/react';
import React from 'react';

type NavItem = {
  href: string;
  label: string;
};

type Props = {
  navItems: NavItem[];
};

const MobileNav: React.FC<Props> = ({ navItems }) => {
  return (
    <Disclosure>
      {({ open, close }) => (
        <>
          <Disclosure.Button className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
            <span className="sr-only">Open main menu</span>
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="absolute top-full left-0 right-0 bg-white shadow-md z-50 flex flex-col items-center py-4 space-y-4 md:hidden">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block text-lg text-gray-700 hover:text-blue-600 font-medium px-4 py-2 rounded transition-colors"
                onClick={() => close()}
              >
                {label}
              </a>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MobileNav; 