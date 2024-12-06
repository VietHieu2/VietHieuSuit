import * as React from 'react';
import { SVGProps } from 'react';

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 11.1v1.4h14v-1.4H9Zm0 4.2v1.4h14v-1.4H9Zm0 4.2v1.4h14v-1.4H9Z"
      fill="#17181B"
    />
  </svg>
);

export default MenuIcon;
