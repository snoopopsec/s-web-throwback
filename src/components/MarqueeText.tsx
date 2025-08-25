interface MarqueeTextProps {
  children: React.ReactNode;
  className?: string;
}

export const MarqueeText = ({ children, className = "" }: MarqueeTextProps) => {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-content">
        {children}
      </div>
    </div>
  );
};