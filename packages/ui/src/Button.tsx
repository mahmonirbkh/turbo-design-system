export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button style={{
      color: "blue",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10,
    }} type="button" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
