interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  ...props
}) => {
  const baseClass = "px-4 py-2 rounded-md";
  const styles = {
    primary: "bg-violet-600 text-white",
    outline: "border-1 text-violet-600 border-violet-600",
  };
  return <button className={`${baseClass} ${styles[variant]}`} {...props} />;
};
