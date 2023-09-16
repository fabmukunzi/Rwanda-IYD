import { slide1 } from '@/src/utils/images';
import { Avatar, Card } from 'antd';
import Image from 'next/image';

const About = () => {
  const { Meta } = Card;
  return (
    <div className="mt-20 font-sanz flex flex-col gap-10">
      <div className="md:h-80 w-screen md:w-[70%] md:grid grid-cols-5 gap-8 items-center mx-auto">
        <div className="col-span-3">
          <Image className="h-80 object-cover" src={slide1} alt="image" />
        </div>
        <div className="col-span-2 text-center">
          <p className="text-3xl">Who We Are ?</p>
          <p>
            The International Rwanda Youth for Development (IRYD) is a forum of
            alternative and independent young people whose mission is to
            strategically inspire young Rwandans, people of African descent and
            friends of Rwanda in Canada and around the world to get involved in
            the economic development of their country.
          </p>
        </div>
      </div>
      <p className="text-3xl text-center text-primary font-semibold md:my-6">
        EXECUTIVE TEAM
      </p>
      <div className="flex flex-wrap gap-5 justify-around mb-5">
        <Card
          hoverable
          style={{ width: 370 }}
          cover={<Image alt="example" src={slide1} />}
        >
          <Meta
            title="MOSES GASHIRABAKE"
            description="Co-Founder/Co-President and Sponsorship Director
"
          />
        </Card>
        <Card
          hoverable
          style={{ width: 370 }}
          cover={<Image alt="example" src={slide1} />}
        >
          <Meta
            title="HABINEZA JAURES"
            description="Co-Founder/Co-President & marketing manager"
          />
        </Card>
        <Card
          hoverable
          style={{ width: 370 }}
          cover={<Image alt="example" src={slide1} />}
        >
          <Meta title="KUNDWA DORIANE" description="Vice president" />
        </Card>
      </div>
    </div>
  );
};
export default About;
