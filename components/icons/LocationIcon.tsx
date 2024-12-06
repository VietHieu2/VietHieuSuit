import * as React from 'react';
import { SVGProps } from 'react';

const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 5a4.9 4.9 0 0 0-4.9 4.9C7.1 13.4 12 19 12 19s4.9-5.6 4.9-9.1A4.9 4.9 0 0 0 12 5Zm0 6.65a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z"
      fill="#fff"
      fillOpacity={0.5}
    />
  </svg>
);

export default LocationIcon;
