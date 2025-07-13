/* eslint-disable react/prop-types */
function ButtonModal({ bgColor, ...props }) {
  const mobile = "max-sm:text-base max-sm:px-1 max-sm:w-[45%]";
  return (
    <button
      {...props}
      className={`w-[40%] text-lg font-semibold px-4 py-3 text-white rounded-md ${bgColor} ${mobile}`}
    >
      {props.children}
    </button>
  );
}

export default ButtonModal;
