function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md bg-[#5B54F6] px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#4F46E5] ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;