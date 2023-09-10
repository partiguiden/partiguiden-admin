type ButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className="inline-block p-2 bg-primary text-foreground-primary rounded-lg hover:opacity-75"
      {...rest}
    >
      {children}
    </button>
  );
}