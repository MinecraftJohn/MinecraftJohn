function EmailIcon({ className, fill }) {
  return (
    <svg className={className} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.5 1C14.8807 1 16 2.11929 16 3.5V11.5C16 12.8807 14.8807 14 13.5 14H2.5C1.11929 14 0 12.8807 0 11.5V3.5C0 2.11929 1.11929 1 2.5 1H13.5ZM15 4.961L8.25351 8.93097C8.12311 9.00767 7.96661 9.02045 7.82751 8.96932L7.74649 8.93097L1 4.963V11.5C1 12.3284 1.67157 13 2.5 13H13.5C14.3284 13 15 12.3284 15 11.5V4.961ZM13.5 2H2.5C1.67157 2 1 2.67157 1 3.5V3.802L8 7.91991L15 3.801V3.5C15 2.67157 14.3284 2 13.5 2Z"
        fill={fill}
      />
    </svg>
  );
}

export default EmailIcon;