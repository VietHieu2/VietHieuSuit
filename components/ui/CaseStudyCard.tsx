import Image from 'next/image';
import React from 'react';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import StarIcon from '../icons/StarIcon';

interface Props {
  imgSrc: string;
  companyName: string;
  description: string;
}

const CaseStudyCard = ({ imgSrc, companyName, description }: Props) => {
  return (
    <div className="card flex flex-col gap-6 bg-white p-6 md:flex-row">
      <div className="w-full">
        <Image
          src={imgSrc}
          width={0}
          height={0}
          alt=""
          className="h-[260px] w-full rounded-lg object-contain"
        />
      </div>
      <div className="flex w-full flex-col justify-between gap-10 py-4">
        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full items-center justify-between">
            <div className="h-8 w-auto">
              <p className="text-lg font-bold text-[#253858] xl:text-base">
                {companyName}
              </p>
            </div>
          </div>
          <p className="text-sm text-[#253858] xl:text-base">{description}</p>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
