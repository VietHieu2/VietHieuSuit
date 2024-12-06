import * as React from 'react';
import { SVGProps } from 'react';

const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 5c-3.858 0-7 3.142-7 7s3.142 7 7 7h3.5v-1.4H12A5.589 5.589 0 0 1 6.4 12c0-3.101 2.499-5.6 5.6-5.6 3.101 0 5.6 2.499 5.6 5.6v1.05a1.04 1.04 0 0 1-1.05 1.05 1.04 1.04 0 0 1-1.05-1.05V12A3.51 3.51 0 0 0 12 8.5 3.51 3.51 0 0 0 8.5 12a3.51 3.51 0 0 0 3.5 3.5c.99 0 1.882-.42 2.52-1.087a2.454 2.454 0 0 0 2.03 1.087A2.46 2.46 0 0 0 19 13.05V12c0-3.858-3.142-7-7-7Zm0 4.9c1.168 0 2.1.932 2.1 2.1a2.09 2.09 0 0 1-2.1 2.1A2.09 2.09 0 0 1 9.9 12c0-1.168.932-2.1 2.1-2.1Z"
      fill="#fff"
      fillOpacity={0.5}
    />
  </svg>
);

export default EmailIcon;
