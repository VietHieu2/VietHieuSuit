import * as React from 'react';
import { SVGProps } from 'react';

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      d="M8.182 6.667 6.666 8.183 14.484 16l-7.818 7.818 1.516 1.516 7.817-7.818 7.818 7.818 1.516-1.516L17.515 16l7.818-7.817-1.516-1.516-7.818 7.818-7.817-7.818Z"
      fill="#17181B"
    />
  </svg>
);

export default CloseIcon;
