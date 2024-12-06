import * as React from 'react';
import { SVGProps } from 'react';

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4.114 4.273 5.897 8.43L4 19.727h2.272l4.755-5.572 3.899 5.572H20l-6.179-8.845 5.64-6.609h-2.236l-4.415 5.16-3.604-5.16H4.114Z"
      fill={props.fill ?? '#253858'}
    />
  </svg>
);

export default XIcon;
