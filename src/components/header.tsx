import Image from 'next/image';
import { logo } from '../utils/images';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Drawer, DrawerProps, Space } from 'antd';

const Cheader = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps['size']>();
  const [activeLink, setActiveLink] = useState('');
  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const menuItems = [
    { name: 'Home', pathName: '/' },
    { name: 'Youth Business', pathName: '/youthname' },
    { name: 'About', pathName: '/about' },
    { name: 'Events', pathName: '/events' },
    { name: 'News', pathName: '/news' },
    { name: 'FAQS', pathName: '/faq' },
  ];
  return (
    <div className="flex justify-between items-center mx-0 md:mx-16">
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
            className={`mx-6 hidden md:inline lg:mx-10 text-primary hover:text-primary font-sanz text-lg font-semibold ${
              activeLink === item.pathName
                ? 'underline-animation'
                : 'hover:underline-animation'
            }`}
            onClick={() => setActiveLink(item.pathName)}
          >
            {item.name}
          </Link>
        ))}
        <div className="block md:hidden font-sanz">
          <Button
            className="bg-[#ffc107] text-primary font-bold font-sanz h-12 w-32 text-xl"
            onClick={showLargeDrawer}
          >
            Menu
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            size={size}
            onClose={onClose}
            open={open}
            className="font-sanz"
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.pathName}
                className={`flex flex-col my-6 text-primary hover:text-primary font-sanz text-lg font-semibold ${
                  activeLink === item.pathName
                    ? 'underline-animation'
                    : 'hover:underline-animation'
                }`}
                onClick={() => {
                  setActiveLink(item.pathName)
                  setOpen(false)
                }}
              >
                {item.name}
              </Link>
            ))}
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Cheader;
