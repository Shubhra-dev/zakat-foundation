import { useNavigate } from "react-router-dom";

function MenuItem({ text, active, children, link }) {
  const navigate = useNavigate();
  function handleClick() {
    if (!link) return;
    navigate(`/${link}`);
  }
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col  justify-center items-center ${
        active
          ? "bg-accentCyan text-primary font-semibold"
          : "bg-primary text-secondary shadow-sm font-medium hover:bg-accentCyan hover:text-primary"
      } rounded-xl py-8 px-4 text-center cursor-pointer mb-[10%]`}
    >
      {children}
      <h2 className="text-xl pt-2">{text}</h2>
    </div>
  );
}

export default MenuItem;
