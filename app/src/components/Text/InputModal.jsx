/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const InputModal = forwardRef(({ placeholder, ...props }, ref) => {
  return (
    <label className="relative self-center block w-full py-3 text-base border border-gray-200 rounded-md shadow-sm max-sm:bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
      <input
        {...props}
        ref={ref}
        placeholder={placeholder}
        className="w-full px-2 text-xl placeholder-transparent uppercase border-none peer focus:border-transparent focus:outline-none focus:ring-0"
      />
      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs">
        {placeholder}
      </span>
    </label>
  );
});

export default InputModal;
