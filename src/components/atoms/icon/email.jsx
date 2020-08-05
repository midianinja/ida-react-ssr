const Email = ({ color, size, ...rest }) => {
  return (
    <svg {...rest} width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM12 13L4 8V18H20V8L12 13Z"
        fill={color}
      />
    </svg>
  );
};

export default Email;
