// testimonial slider data
export const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Anne William',
    position: 'Customer',
    message:
      'Intially, I was doubting your ability, if you can build a complex website like mine but after submitting my work for me, I realise that you are a skillfull and experienced web developer ',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane',
    position: 'Customer',
    message:
      'Honestly, you are fast and very reliable, thank you!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Henry',
    position: 'Customer',
    message:
      'I have worked with different developer but I think you are the best out of all of them',
  },
];


// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import {Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';
// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
 <Swiper
 navigation={true}
 pagination={{
  clickable: true,
 }}
 modules={[Navigation, Pagination]}
 className='h-[400px]'
 >
{testimonialSlider.map((person, index) => {
  return ( 
  <SwiperSlide key={index}>
    <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
      {/* avatar, name, position */}
      <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
        <div className='flex flex-col justify-center text-center'>
          {/* avatar */}
          <div className='mb-2 mx-auto'>
            <Image  src={person.image} width={100} height={100} alt='' />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
          </div>
          {/* name */}
          <div className='text-lg'>{person.name}</div>
          {/* position */}
          <div className='text-[12px] uppercase font-extralight tracking-widest'>
            {person.position
          }</div>
        </div>
      </div>
      {/* quote & message */}
      <div className=' flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20
      xl:before:absolute xl:before:left-0 xl:before:h-[200px] realtive xl:pl-20'>
        {/* Quote icon */}
        <div className='mb-4'>
          < FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
        </div>
        {/* message */}
        <div className='xl:text-lg text-center md:text-left'>
          {person.message}
          </div>
      </div>
    </div>
  </SwiperSlide>
  );
})}
 </Swiper>
  );
};

export default TestimonialSlider;
