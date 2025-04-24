const Button = ({children, className='', ...props}) => {
    return (
        <button
        className={`bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
};

export default Button;
// This Button component is a reusable button styled with Tailwind CSS. It accepts children, className, and other props. The button has a default yellow background, black text, padding, rounded corners, and a hover effect that changes the background color to a darker shade of yellow. The className prop allows for additional custom styling when using the component.