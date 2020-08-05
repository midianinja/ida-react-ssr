const Phone = ({ color, size, ...rest }) => {
  return (
    <svg {...rest} width={size} height={size} viewBox="0 0 14 22">
      <path
        d="M2.19507 0L11.7951 0.01C12.8511 0.01 13.7151 0.9 13.7151 2V20C13.7151 21.1 12.8511 22 11.7951 22H2.19507C1.13907 22 0.284668 21.1 0.284668 20V2C0.284668 0.9 1.13907 0 2.19507 0ZM2.19507 18H11.7951V4H2.19507V18Z"
        fill={color}
      />
    </svg>
  );
};

export default Phone;
