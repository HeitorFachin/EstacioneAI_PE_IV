import { Link } from "react-router-dom";

function ButtonMenu({ to, children }) {
  return (
    <Link
      to={to}
      className="flex bg-gray-700 hover:bg-gray-500 p-2 rounded-lg w-2/3 justify-start"
    >
      <p className="flex gap-2 items-center text-xl font-semibold pl-2 text-[#93B1A6]">
        {children}
      </p>
    </Link>
  );
}

export default ButtonMenu;
