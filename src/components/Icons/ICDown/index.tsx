interface IProps {
    width?: string | number;
    height?: string | number;
    fill?: string;
}

function ICDown(props: IProps) {
    return (
        <svg width={props.width ?? 74} height={props.height ?? 74} viewBox="0 0 74 74" fill={props.fill ?? 'none'} xmlns="http://www.w3.org/2000/svg">
            <path d="M41.3174 5.25487L41.3165 5.25396C41.2724 5.20968 41.22 5.17456 41.1623 5.15064C41.1047 5.12671 41.0428 5.11443 40.9803 5.11451L40.9797 5.11452L31.4821 5.11457L31.4813 5.11457C31.219 5.11413 31.005 5.32689 31.005 5.59173L30.505 5.59173L31.005 5.59176L31.0019 51.0763L31.0019 52.2833L30.1484 51.4299L10.5449 31.8264C10.4079 31.6893 10.202 31.6487 10.025 31.7222C9.84607 31.7966 9.73009 31.9705 9.73009 32.1632L9.73092 45.5959L9.73092 45.596C9.73092 45.7218 9.78158 45.844 9.87127 45.9337L35.8928 71.9552C36.079 72.1414 36.382 72.1414 36.5682 71.9551L62.5891 45.9343L62.5894 45.9339C62.6338 45.8896 62.669 45.837 62.693 45.7791L63.1549 45.9707L62.693 45.7791C62.7171 45.7212 62.7294 45.6591 62.7294 45.5965L62.7314 32.163L41.3174 5.25487ZM41.3174 5.25487C41.4045 5.34203 41.4577 5.46109 41.4577 5.59257L41.9577 5.59258L41.4577 5.59259L41.4593 51.0762L41.4593 52.2833L42.3128 51.4298L61.9163 31.8262M41.3174 5.25487L61.9163 31.8262M61.9163 31.8262C61.9833 31.7594 62.0685 31.7139 62.1612 31.6954C62.2538 31.6769 62.3498 31.6862 62.4371 31.7222M61.9163 31.8262L62.4371 31.7222M62.4371 31.7222C62.5241 31.7583 62.5985 31.8195 62.6509 31.8979C62.7033 31.9763 62.7313 32.0685 62.7313 32.1628L62.4371 31.7222Z" stroke="#F58F5E" />
            <path d="M41.8359 5.06635C42.0776 22.0965 42.1209 5.48549 42.1202 5.75504L42.0019 51.1189L61.6056 31.5152C61.7424 31.3785 61.9163 31.2852 62.1055 31.2471C62.2947 31.2089 62.4907 31.2275 62.6687 31.3006C62.8466 31.374 62.9983 31.4985 63.105 31.6584C63.2116 31.8184 63.2682 32.0066 63.2678 32.1993L63.2305 45.5976C63.2301 45.7257 63.2045 45.8526 63.1551 45.971C63.1057 46.0894 63.0335 46.1971 62.9426 46.2878L36.9217 72.3087C36.5403 72.6902 35.9223 72.6918 35.5429 72.3124L9.65844 46.4279C9.47648 46.246 9.37354 45.9978 9.37422 45.7393L9.40876 32.3419C9.40981 31.9477 9.6482 31.5922 10.0126 31.44C10.377 31.2878 10.7966 31.371 11.0746 31.649L30.5748 51.1491L30.6514 22.1266C30.6047 39.766 30.6528 21.5876 30.6514 22.1266L42.0776 22.0965C42.0315 39.7729 41.4022 4.80646 41.5204 4.85524C42.0778 22.0107 41.7458 4.97577 41.8359 5.06635Z" fill="#F58F5E" />
        </svg>
    );
}

export default ICDown;
