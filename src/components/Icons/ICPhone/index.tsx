interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}

function ICPhone(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '20'}
      height={props.height ?? '20'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M7.91872 3.54768C7.66561 2.91492 7.05276 2.5 6.37126 2.5H4.07895C3.20692 2.5 2.5 3.20675 2.5 4.07878C2.5 11.491 8.50898 17.5 15.9212 17.5C16.7933 17.5 17.5 16.793 17.5 15.921L17.5004 13.6283C17.5004 12.9468 17.0856 12.334 16.4528 12.0809L14.2558 11.2024C13.6874 10.9751 13.0402 11.0774 12.57 11.4693L12.0029 11.9422C11.3407 12.4941 10.3664 12.4502 9.75683 11.8407L8.16018 10.2425C7.55065 9.63302 7.50561 8.65945 8.05745 7.99724L8.53027 7.43025C8.92218 6.95996 9.02541 6.31263 8.79805 5.74424L7.91872 3.54768Z"
        stroke={props.stroke ?? 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ICPhone;
