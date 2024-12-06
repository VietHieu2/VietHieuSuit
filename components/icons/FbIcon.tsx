import * as React from 'react';
import { SVGProps } from 'react';

const FbIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 3.046a9 9 0 0 0-9 9c0 4.512 3.324 8.238 7.655 8.888v-6.503H8.428v-2.366h2.226V10.49c0-2.607 1.27-3.75 3.437-3.75 1.037 0 1.586.076 1.846.111v2.065h-1.478c-.92 0-1.241.872-1.241 1.854v1.294h2.695l-.365 2.366h-2.33v6.522C17.612 20.358 21 16.602 21 12.046a9 9 0 0 0-9-9Z"
      fill={props.fill ?? '#253858'}
    />
  </svg>
);

export default FbIcon;
