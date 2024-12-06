import React from 'react';
import Image from 'next/image';

type TestimonialProps = {
  name: string;
  role: string;
  companyLogo: string;
  companyName: string;
  image: string;
  review: string;
};

export const TestimonialCard: React.FC<TestimonialProps> = ({
  image,
  review,
}) => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-between gap-5 rounded-xl bg-white p-6 shadow-xl">
      <div className="flex flex-col gap-2">
        <Image
          src={image}
          width={0}
          height={0}
          alt=""
          className="h-[278.67px] w-full rounded-lg object-contain"
        />
        <p className="text-sm font-light text-gray-600">{review}</p>
      </div>
    </div>
  );
};
