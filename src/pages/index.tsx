import React, { FC } from 'react';
import { Typography } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { homeBg, slide1, slide2 } from '../utils/images';

type Props = {
  component: React.ReactNode;
};
const App: FC<Props> = () => {
  const { Text } = Typography;
  return (
    <div className="">
      <div className="h-32">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-screen"
        >
          <SwiperSlide>
            <div className="relative">
            <div className="absolute py-10 px-10 custom-bg left-20 top-80 text-2xl text-center w-[30rem] font-bold">
                <p className='mb-6'>COMING SOON</p>
                <p className='text-lg'>RWANDA YOUTH CONVENTION OTTAWA-GATINAU , 24-25 NOVEMBER</p>
              </div>
              <Image src={homeBg} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <div className="absolute py-10 px-10 custom-bg left-20 top-80 text-2xl text-center w-[30rem] font-bold">
                <p className='mb-6'>COMING SOON</p>
                <p className='text-lg'>RWANDA YOUTH CONVENTION OTTAWA-GATINAU , 24-25 NOVEMBER</p>
              </div>
              <Image src={slide1} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
            <div className="absolute py-10 px-10 custom-bg left-20 top-80 text-2xl text-center w-[30rem] font-bold">
                <p className='mb-6'>COMING SOON</p>
                <p className='text-lg'>RWANDA YOUTH CONVENTION OTTAWA-GATINAU , 24-25 NOVEMBER</p>
              </div>
              <Image src={slide2} alt="Image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default App;
