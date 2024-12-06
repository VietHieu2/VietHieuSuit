import * as React from 'react';
import { SVGProps } from 'react';

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.222 4H5.778C4.796 4 4 4.796 4 5.778v12.444C4 19.204 4.796 20 5.778 20h12.444c.982 0 1.778-.796 1.778-1.778V5.778C20 4.796 19.204 4 18.222 4ZM9.333 16.444H7.091v-6.222h2.242v6.222Zm-1.16-7.362c-.686 0-1.144-.457-1.144-1.067 0-.61.457-1.067 1.219-1.067.685 0 1.143.457 1.143 1.067 0 .61-.457 1.067-1.219 1.067Zm9.16 7.362h-2.17v-3.4c0-.94-.579-1.158-.796-1.158-.217 0-.94.145-.94 1.158v3.4h-2.243v-6.222h2.243v.869c.289-.507.867-.869 1.953-.869 1.085 0 1.953.869 1.953 2.822v3.4Z"
      fill={props.fill ?? '#253858'}
    />
  </svg>
);

export default LinkedInIcon;
