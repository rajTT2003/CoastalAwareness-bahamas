const SerachInput = ({ placeholder = 'Search', className = '', ...props}) => {
    return (
        <input
      type="text"
      placeholder={placeholder}
      className={`w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 ${className}`}
      {...props}
    />

    );

};
export default SerachInput;
// // This SearchInput component is a styled input field for search functionality. It accepts a placeholder, className, and other props. The input has full width, padding, a border, rounded corners, and a focus effect that changes the border color to yellow. The className prop allows for additional custom styling when using the component.