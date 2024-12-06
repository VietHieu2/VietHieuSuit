import * as React from 'react';
import { SVGProps } from 'react';

const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.24 14.713c-.49-.012-1.107-.04-1.496-.109-.422-.075-.929-.22-1.286-.33a.791.791 0 0 0-.793.196l-1.724 1.714a11.957 11.957 0 0 1-2.954-2.171 11.96 11.96 0 0 1-2.171-2.954L9.53 9.334a.791.791 0 0 0 .197-.793c-.11-.356-.256-.863-.33-1.285-.07-.39-.097-1.006-.11-1.496a.778.778 0 0 0-.78-.76h-2.73C5.438 5 5 5.255 5 5.778c0 3.53 1.431 6.902 3.862 9.36A13.362 13.362 0 0 0 18.222 19c.523 0 .778-.437.778-.778v-2.73a.778.778 0 0 0-.76-.78Z"
      fill="#fff"
      fillOpacity={0.5}
    />
  </svg>
);

export default PhoneIcon;
