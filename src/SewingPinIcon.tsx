import { splitProps } from "solid-js";
import { IconProps } from "./types";

export default function SewingPinIcon(props: IconProps) {
  const [, rest] = splitProps(props, ["color"]);
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M6 3.5C6 2.67157 6.67157 2 7.5 2C8.32843 2 9 2.67157 9 3.5C9 4.32843 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5ZM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5C10 2.11929 8.88071 1 7.5 1C6.11929 1 5 2.11929 5 3.5C5 4.70948 5.85888 5.71836 7 5.94999V13.5C7 13.7761 7.22386 14 7.5 14C7.77614 14 8 13.7761 8 13.5V5.94999Z"
        fill={props.color || "currentColor"}
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}