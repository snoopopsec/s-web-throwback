interface BlinkTextProps {
  children: React.ReactNode;
  className?: string;
}

export const BlinkText = ({ children, className = "" }: BlinkTextProps) => {
  return (
    <span className={`blink ${className}`}>
      {children}
    </span>
  );
};