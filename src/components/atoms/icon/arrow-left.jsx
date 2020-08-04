const ArrowLeft = ({ color, size, ...rest }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 9 16" fill="none" {...rest}>
      <path
        d="M8.69102 0.313349C8.28045 -0.10445 7.61852 -0.10445 7.20795 0.313349L0.245083 7.39888C-0.0816943 7.73141 -0.0816943 8.26859 0.245083 8.60112L7.20795 15.6867C7.61852 16.1045 8.28045 16.1045 8.69102 15.6867C9.10159 15.2689 9.10159 14.5953 8.69102 14.1775L2.62469 7.99574L8.6994 1.81402C9.10159 1.40474 9.10159 0.722622 8.69102 0.313349Z"
        fill={color}
      />
    </svg>
  )
}

export default ArrowLeft