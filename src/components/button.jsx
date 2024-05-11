// function Button(props) {
//   return <button className="button">{props.children}</button>;
// }

export const Button = ({ children }) => {
  return (
    <button className="rounded-lg bg-black text-white px-2 py-1 mt-40">
      {children}
    </button>
  );
};

// export default Button;
