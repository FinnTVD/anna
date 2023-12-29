interface IProps {
    width?: string | number;
    height?: string | number;
    stroke?: string;
}

function ICFacebook(props: IProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1365.3 1365.3"
            width={props?.width ?? '44'}
            height={props.height ?? '44'}>
            <path
                d="M1365.3 682.7A682.7 682.7 0 10576 1357V880H402.7V682.7H576V532.3c0-171.1 
            102-265.6 257.9-265.6 74.6 0 152.8 13.3 152.8 13.3v168h-86.1c-84.8 0-111.3 52.6-111.3 
            106.6v128h189.4L948.4 880h-159v477a682.8 682.8 0 00576-674.3"
                fill="#fff">
            </path>
        </svg>
    );
}

export default ICFacebook;
