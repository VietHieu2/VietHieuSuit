import * as React from 'react';
import { SVGProps } from 'react';

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      d="m18.029 8.697-1.55 1.55 4.722 4.72H6.666v2.067h14.535l-4.721 4.721 1.549 1.55L25.333 16l-7.304-7.304Z"
      fill="#3F51F2"
    />
  </svg>
);

export default ArrowLeftIcon;
