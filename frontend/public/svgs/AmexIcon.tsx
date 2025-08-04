import React from 'react';
type SVGProps = React.SVGProps<SVGSVGElement>;
const AmexIcon = (props:SVGProps) => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="1" y="1" width="24" height="24" rx="3" fill="currentColor"/>
    <path d="M7.5 10.4H10.9L9.2 17.6H5.8L7.5 10.4Z" fill="#1c034a"/>
    <path d="M17.1 10.4H20.5L18.8 17.6H15.4L17.1 10.4Z" fill="#1c034a"/>
    <path d="M12.3 10.4H15.7L14 17.6H10.6L12.3 10.4Z" fill="#1c034a"/>
  </svg>
);
export default AmexIcon;