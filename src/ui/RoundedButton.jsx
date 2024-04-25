function RoundedButton({ children, bg, textColor, padding }) {
  return (
    <button
      className={`${bg ? bg : "bg-acctenRed"} ${
        padding ? padding : " px-6 py-3"
      } ${
        textColor ? textColor : "text-primary"
      } rounded-full bg-accentRed text-primary font-bold text-xl shadow-md`}
    >
      {children}
    </button>
  );
}

export default RoundedButton;
