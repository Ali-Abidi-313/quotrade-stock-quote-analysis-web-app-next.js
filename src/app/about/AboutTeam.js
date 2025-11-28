
import Heading from '@/components/Heading';
import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})
function Creator() {
  return (
    <div className='relative flex flex-col lg:flex-row items-center justify-center gap-10 mt-28'>
      <div className='absolute top-70 text-center'>
        <Heading title={'ABOUT CREATOR'} size={'text-4xl'}/>
      </div>
      <div className='about absolute flex top-100 flex-col justify-center '>
        <div className='relative right-65 -top-4'>
          <Image src="/About-Creator.jpg" alt="creator-image" width={250} height={200} quality={100} priority className='rounded-full '/>
          <p className={`${roboto.className} absolute my-8 font-bold text-lg`}>SYED ALI MOHAMMAD ABIDI</p>
        </div>
        <div className={` ${roboto.className} font-normal w-120 space-y-5 absolute left-45`}>
          <p>I’m a 3rd-year Computer Science Engineering student at Indraprastha University, New Delhi, with a deep passion for innovation, creativity, and technology. I specialize in building engaging web experiences and scalable applications using React, Node.js, Express, MongoDB, Next.js, Java, and SQL.
          </p>
          <p>
          As a member of the Google Developer Group at my college, I actively contribute to tech communities and constantly work to sharpen my skills in AI integration, full-stack development, and clean code practices.</p>
          <p>
            Beyond coding, I’m a spiritual soul who believes in simplicity, dignity, and meaningful living. I'm health-conscious, nature-loving, and always looking to grow—personally and professionally.</p>
          <p>
            Let’s connect, collaborate, and create something that truly matters.</p>
        </div>
      </div>
    </div>

  );
}

export default Creator;