import Link from 'next/link';
import * as React from 'react';
import type { SVGProps } from 'react';

export const VercelIcon = ({ size = 17 }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: 'currentcolor' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1L16 15H0L8 1Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SpinnerIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: 'currentcolor' }}
  >
    <g clipPath="url(#clip0_2393_1490)">
      <path d="M8 0V4" stroke="currentColor" strokeWidth="1.5" />
      <path
        opacity="0.5"
        d="M8 16V12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.9"
        d="M3.29773 1.52783L5.64887 4.7639"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.1"
        d="M12.7023 1.52783L10.3511 4.7639"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.4"
        d="M12.7023 14.472L10.3511 11.236"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M3.29773 14.472L5.64887 11.236"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.2"
        d="M15.6085 5.52783L11.8043 6.7639"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.7"
        d="M0.391602 10.472L4.19583 9.23598"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.3"
        d="M15.6085 10.4722L11.8043 9.2361"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.8"
        d="M0.391602 5.52783L4.19583 6.7639"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </g>
    <defs>
      <clipPath id="clip0_2393_1490">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Github = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 250"
    width="1em"
    height="1em"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
  </svg>
);

export function StarButton() {
  return (
    <Link
      href="https://github.com/vercel-labs/ai-sdk-preview-reasoning"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-300"
    >
      <Github className="size-4" />
      <span className="hidden sm:inline">Star on GitHub</span>
    </Link>
  );
}

export const GroqIcon = ({ size = 16 }) => {
  return (
    <svg
      data-testid="geist-icon"
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 160 59"
      width={size * (160 / 120)}
      className="pt-1"
      style={{ color: 'currentcolor' }}
    >
      <mask
        id="mask0_4345_1846"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="160"
        height="59"
      >
        <path
          d="M0.273438 0.219727H159.216V58.1817H0.273438V0.219727Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_4345_1846)">
        <path
          d="M95.4635 0.314595C84.4822 0.314595 75.5599 9.19525 75.5599 20.1677C75.5599 31.1402 84.4632 40.0208 95.4635 40.0208C106.464 40.0208 115.367 31.1402 115.367 20.1677C115.348 9.21427 106.445 0.333611 95.4635 0.314595ZM95.4635 32.5664C88.6002 32.5664 83.0333 27.0136 83.0333 20.1677C83.0333 13.3218 88.6002 7.76902 95.4635 7.76902C102.327 7.76902 107.894 13.3218 107.894 20.1677C107.894 27.0136 102.327 32.5664 95.4635 32.5664ZM67.9912 0.39066C67.3049 0.314595 66.6376 0.276562 65.9513 0.276562C65.6081 0.276562 65.284 0.276562 64.9599 0.295578C64.6358 0.314595 64.2926 0.333611 63.9685 0.352628C62.634 0.44771 61.2995 0.675906 60.0031 1.03722C57.3531 1.74082 54.8556 2.99591 52.7013 4.68836C50.4898 6.43787 48.7358 8.68181 47.5347 11.23C46.9437 12.5041 46.5052 13.8543 46.2193 15.2234C46.0858 15.908 45.9905 16.5926 45.9142 17.2772C45.8952 17.6195 45.857 17.9618 45.857 18.3041L45.838 18.8175V19.293L45.8761 32.5854L45.9142 39.2221H53.3685L53.4067 32.5854L53.4448 19.293V18.5893C53.4448 18.3802 53.4829 18.171 53.4829 17.9618C53.5211 17.5434 53.5973 17.1441 53.6736 16.7257C53.8452 15.9271 54.093 15.1474 54.4362 14.4057C55.1225 12.9225 56.152 11.6293 57.4293 10.6025C58.7639 9.53755 60.3081 8.75787 61.9477 8.3205C62.7865 8.0923 63.6635 7.94017 64.5405 7.8641C64.7693 7.84509 64.979 7.82607 65.2078 7.82607C65.4365 7.82607 65.6653 7.80705 65.875 7.80705C66.2944 7.80705 66.7329 7.82607 67.1524 7.8641C68.8491 8.03525 70.4887 8.54869 71.9948 9.38541L75.7124 2.93886C73.3484 1.56968 70.7175 0.694923 67.9912 0.39066ZM20.3484 0.219513C9.36711 0.124431 0.36855 8.92902 0.273226 19.8825C0.177902 30.8359 9.00488 39.8116 19.9862 39.9067H26.8876V32.4713H20.3484C13.4851 32.5474 7.84193 27.0707 7.76567 20.2057C7.68941 13.3408 13.1801 7.73099 20.0624 7.65492H20.3484C27.2117 7.65492 32.7786 13.2077 32.8167 20.0536V38.3284C32.8167 45.1172 27.2689 50.651 20.4819 50.7271C17.2218 50.708 14.1142 49.3959 11.8265 47.0949L6.54553 52.3625C10.206 56.0326 15.1628 58.1244 20.3484 58.1625H20.6153C31.4632 58.0103 40.1757 49.2248 40.2329 38.4044V19.5592C39.966 8.81492 31.1391 0.238529 20.3484 0.219513ZM139.389 0.314595C128.407 0.314595 119.485 9.19525 119.504 20.1677C119.504 31.1212 128.407 40.0018 139.389 40.0018H146.195V32.5664H139.389C132.525 32.5664 126.958 27.0136 126.958 20.1677C126.958 13.3218 132.525 7.76902 139.389 7.76902C145.833 7.76902 151.209 12.6943 151.781 19.1028H151.762V57.2116H159.216V20.1677C159.216 9.21427 150.351 0.314595 139.389 0.314595Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
