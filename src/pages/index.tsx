import React, { FC } from 'react';
import { Button, Typography } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { homeBg, slide1, slide2 } from '../utils/images';
import CcountDown from '../components/countdown';
import { useRouter } from 'next/router';

type Props = {
  component: React.ReactNode;
};
const App: FC<Props> = () => {
  const { Text } = Typography;
  const router=useRouter();
  return (
    <div className="relative flex flex-col-reverse mt-20 md:mt-0">
      <div className="md:absolute py-10 px-10 custom-bg left-20 top-52 text-2xl z-[99] text-center w-fit md:w-[30rem] font-bold font-sanz">
        <p className="mb-6">COMING SOON</p>
        <p className="text-lg">
          RWANDA YOUTH CONVENTION OTTAWA-GATINAU , 24-25 NOVEMBER
        </p>
        <div className="flex flex-col items-center">
          <p className="my-4">REMAINING</p>
          <CcountDown />
        </div>
        <Button onClick={()=>router.push('/events/book')} className="h-12 w-32 font-bold font-sanz hover:!text-primary text-primary border-none bg-[#ffc107] text-xl mt-10">
          Book
        </Button>
      </div>
      <div className="md:h-32">
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
          className="mySwiper w-screen md:h-screen"
        >
          <SwiperSlide>
            <Image className='object-cover w-full' src={homeBg} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide1} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide2} alt="Image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default App;
