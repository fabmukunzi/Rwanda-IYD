import Image from 'next/image';
import { logo } from '../utils/images';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Cheader = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');
  const menuItems = [
    { name: 'Home', pathName: '/' },
    { name: 'Youth Business', pathName: '/youthname' },
    { name: 'About', pathName: '/about' },
    { name: 'Events', pathName: '/events' },
    { name: 'News', pathName: '/news' },
    { name: 'FAQS', pathName: '/faq' },
  ];
  return (
    <div className="flex justify-between items-center mx-6">
      <Image
        src={logo}
        alt="Logo"
        width={90}
        height={90}
        className="cursor-pointer"
        onClick={() => router.push('/')}
      />
      <div>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.pathName}
            className={`mx-10 text-primary hover:text-primary font-sanz text-lg font-semibold ${
              activeLink === item.pathName ? 'underline-animation' : 'hover:underline-animation'
            }`}
            onClick={() => setActiveLink(item.pathName)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cheader;
