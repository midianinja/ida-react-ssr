const Logo = ({ color, colors, size, ...rest }) => {
  return (
    <svg {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path d="M23.3829 15.5835L17.7654 1.24954C17.6016 0.801604 17.2739 0.447969 16.8526 0.235789C16.3844 3.23011e-05 15.8695 -0.0706946 15.3546 0.0943348C14.863 0.259364 14.4417 0.589423 14.1842 1.06094L8.84759 11.222C8.77737 11.3399 8.73055 11.4578 8.70715 11.5757C8.5433 12.1179 8.59012 12.7073 8.84759 13.226C9.10506 13.7446 9.54978 14.1218 10.0881 14.2869L21.2998 17.8232C21.4636 17.8704 21.6275 17.8939 21.8147 17.8939C22.0254 17.8939 22.236 17.8468 22.4233 17.7761C23.2893 17.446 23.7106 16.4558 23.3829 15.5835ZM22.2828 16.3615C22.2126 16.6209 21.9317 16.7623 21.6743 16.6916L10.4626 13.1552C10.4158 13.1317 10.3456 13.1081 10.2988 13.0845C10.0881 12.9666 9.92428 12.778 9.83065 12.5187C9.73703 12.2594 9.78384 12.0236 9.90087 11.7879L15.2609 1.62675C15.3546 1.46172 15.495 1.34384 15.6588 1.27312C15.7525 1.22597 15.8461 1.22597 15.9397 1.22597C16.244 1.22597 16.5249 1.41457 16.6653 1.72105L22.2828 16.055C22.3062 16.1258 22.3062 16.2436 22.2828 16.3615Z" fill={color || colors[0]} />
        <path d="M11.3053 4.07858L5.78141 2.3104C5.26647 2.14538 4.68131 2.28683 4.30681 2.66404C4.02594 2.94695 3.8855 3.30058 3.8855 3.70137V16.2672C3.8855 17.2102 4.47066 18.0354 5.3601 18.3183L10.9542 20.11C11.6564 20.3458 12.4054 20.4636 13.131 20.4636H13.3651C14.4418 20.4165 15.4482 20.0864 16.2675 19.4735C17.6484 18.4597 18.3975 16.8094 18.3975 14.8291V13.5796C18.374 9.59528 15.2142 5.32809 11.3053 4.07858ZM5.7112 17.1866C5.31329 17.0688 5.05582 16.6915 5.05582 16.2908V3.70137C5.05582 3.55991 5.17285 3.44204 5.33669 3.44204C5.3601 3.44204 5.38351 3.44204 5.40691 3.46561L10.9308 5.23378C14.3716 6.34184 17.1803 10.0904 17.1803 13.6267V14.8526C17.1803 16.4322 16.5952 17.7289 15.5419 18.5069C14.4418 19.332 12.9204 19.4735 11.2819 18.9548L5.7112 17.1866Z" fill={color || colors[1]} />
        <path d="M6.36653 7.89788L1.91932 6.45976C1.77888 6.41261 1.61504 6.38904 1.4746 6.38904C1.07669 6.38904 0.725598 6.55407 0.444721 6.8134C0.140438 7.11988 0 7.47352 0 7.8743V20.4401C0 21.3831 0.585159 22.2083 1.49801 22.4912L5.96863 23.9293C6.10906 23.9765 6.27291 24 6.41335 24C7.20916 24 7.86454 23.3399 7.86454 22.5148V9.94896C7.86454 9.00593 7.25598 8.18079 6.36653 7.89788ZM6.67082 9.94896V22.5148C6.67082 22.5383 6.67082 22.5619 6.64741 22.5855C6.624 22.6562 6.57719 22.7034 6.50697 22.7505C6.43675 22.7741 6.36653 22.7977 6.29631 22.7741L1.8491 21.3596C1.4512 21.2417 1.19373 20.8645 1.19373 20.4637V7.8743C1.19373 7.73285 1.31076 7.61497 1.4746 7.61497C1.49801 7.61497 1.52141 7.61497 1.54482 7.63855L6.01544 9.07666C6.38994 9.17096 6.67082 9.5246 6.67082 9.94896Z" fill={color || colors[2]} />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="23.5" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
