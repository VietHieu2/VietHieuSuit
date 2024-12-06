import React from 'react';
import StarIcon from '../icons/StarIcon';

type RatingProps = {
  rating: number;
};

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex">
      {Array.from({ length: rating }, (_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
};
