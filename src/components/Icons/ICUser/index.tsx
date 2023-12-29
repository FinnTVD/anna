interface IProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

function ICUser(props: IProps) {
  return (
    <svg
      width={props.width ?? '20'}
      height={props.height ?? '20'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
        fill={props.fill ?? 'black'}
        fillOpacity="0.2"
      />
      <path
        d="M10 11.666C5.85977 11.6706 2.50461 15.0258 2.5 19.166C2.5 19.6262 2.87309 19.9993 3.33332 19.9993H16.6666C17.1269 19.9993 17.5 19.6262 17.5 19.166C17.4954 15.0258 14.1402 11.6706 10 11.666Z"
        fill={props.fill ?? 'black'}
        fillOpacity="0.2"
      />
    </svg>
  );
}

export default ICUser;
