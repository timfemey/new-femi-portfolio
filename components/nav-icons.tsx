import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function ProjectIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        d="M10.3351 9.22941L16.9366 5.56191L10.6916 2.09245C10.5825 2.03182 10.4598 2 10.3351 2C10.2103 2 10.0876 2.03182 9.9786 2.09245L3.73358 5.56191L10.3351 9.22941Z"
        fill="currentColor"
      />
      <path
        d="M9.6015 10.4998L3 6.83228V14.4695C2.99999 14.6002 3.03495 14.7286 3.10123 14.8413C3.16752 14.9541 3.26274 15.047 3.37702 15.1106L9.6015 18.5683V10.4998Z"
        fill="currentColor"
      />
      <path
        d="M11.0685 10.4998V18.5683L17.293 15.1106C17.4073 15.047 17.5025 14.9541 17.5688 14.8413C17.6351 14.7286 17.67 14.6002 17.67 14.4695V6.83301L11.0685 10.4998Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HamburgerMenuIcon(props: IconProps) {
  return (
    <svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <line fill="none" x1="1" x2="23" y1="12" y2="12" />
        <line fill="none" x1="1" x2="23" y1="5" y2="5" />
        <line fill="none" x1="1" x2="23" y1="19" y2="19" />
      </g>
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <line fill="none" stroke="currentColor" x1="19" x2="5" y1="5" y2="19" />
        <line fill="none" stroke="currentColor" x1="19" x2="5" y1="19" y2="5" />
      </g>
    </svg>
  );
}
