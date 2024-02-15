export default function Button({ children, ...props }) {
  return (
    <button {...props}>
      <span>{children}</span>
    </button>
  );
}
