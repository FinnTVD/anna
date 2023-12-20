interface IProps {
  width: string | number;
  height: string | number;
  fill?: string;
}

export function ICDecreaseIcon(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '24'}
      height={props.height ?? '25'}
      viewBox="0 0 24 25"
      fill={props.fill ?? 'none'}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 12.5H18H6Z"
        fill="#6A6A6A"
      />
      <path
        d="M6 12.5H18"
        stroke="#262626"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
