function Logo({ color }) {
  return (
    <svg className="fill-none h-[0.9375rem] md:h-5" viewBox="0 0 92 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 0H4V4L16 4V16L4 16L4 12H0V16L4 16V20H16L16 16H20L20 4V0ZM40 0H28V4H40V16H28V20H40V16L44 16V4L40 4V0ZM28 4H24V16H28V4ZM52 0H48V20H52L52 12H64V20H68V0H64V8H52L52 0ZM72 0H76V4H80V8H76V20H72V0ZM84 12H80V8L84 8V12ZM84 12L88 12L88 0H92V20H88L88 16H84L84 12Z"
        // fill="url(#paint0_linear_840_2)"
        fill={color}
      />
      <defs>
        <linearGradient id="paint0_linear_840_2" x1="0" y1="0" x2="92" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1890DE" />
          <stop offset="1" stopColor="#075DCE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Logo;
