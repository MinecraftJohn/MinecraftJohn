function CheckSVG({ className, fill }) {
  return (
    <svg className={className} viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 1.38416L10.6158 0L4.36875 6.24709L1.38416 3.26251L0 4.64667L4.36826 9.01493L12 1.38416Z"
        fill={fill}
      />
    </svg>
  );
}

export default CheckSVG;
