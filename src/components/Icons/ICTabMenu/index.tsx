interface IProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  stroke?: string;
}

function ICTabMenu(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.height ?? '24'}
      height={props.width ?? '24'}
      viewBox="0 0 24 24"
      fill={props.fill ?? 'none'}
    >
      <path
        d="M3 15H21M3 9H21"
        stroke={props?.stroke ?? 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ICTabMenu;
