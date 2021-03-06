import * as React from "react";

function SvgTwitter(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.333 3.342c-.833.408-1.65.574-2.5.825-.934-1.054-2.319-1.113-3.65-.614-1.33.498-2.202 1.716-2.183 3.114V7.5c-2.704.07-5.113-1.162-6.667-3.333 0 0-3.485 6.194 3.334 9.166-1.56 1.04-3.116 1.74-5 1.667 2.756 1.503 5.76 2.02 8.361 1.264 2.984-.866 5.435-3.102 6.376-6.451.28-1.02.42-2.071.414-3.128-.001-.207 1.259-2.31 1.515-3.344v0z"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgTwitter;
