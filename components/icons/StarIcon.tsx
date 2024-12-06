import * as React from 'react';
import { SVGProps } from 'react';

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      d="M21 9.961h-6.742L12 3.44 9.742 9.961 3 9.978l5.347 4.111-1.91 6.47L12 16.745l5.562 3.814-1.909-6.469L21 9.961Z"
      fill="#FFC400"
    />
  </svg>
);

export default StarIcon;
