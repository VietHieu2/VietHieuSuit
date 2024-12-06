import * as React from 'react';
import { SVGProps } from 'react';

const ArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      d="M12 5 6.52 10.478l1.163 1.162 3.54-3.541V19h1.55V8.099l3.54 3.54 1.163-1.161L11.999 5Z"
      fill="#fff"
    />
  </svg>
);

export default ArrowUpIcon;
