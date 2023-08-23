function ErrorIcon({ className, fill }) {
  return (
    <svg className={className} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2ZM8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3ZM8 10C8.41421 10 8.75 10.3358 8.75 10.75C8.75 11.1642 8.41421 11.5 8 11.5C7.58579 11.5 7.25 11.1642 7.25 10.75C7.25 10.3358 7.58579 10 8 10ZM8 4.5C8.24546 4.5 8.44961 4.67688 8.49194 4.91012L8.5 5V8.5C8.5 8.77614 8.27614 9 8 9C7.75454 9 7.55039 8.82312 7.50806 8.58988L7.5 8.5V5C7.5 4.72386 7.72386 4.5 8 4.5Z"
        fill={fill}
      />
    </svg>
  );
}

export default ErrorIcon;
