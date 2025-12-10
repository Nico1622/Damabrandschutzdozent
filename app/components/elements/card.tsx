import { ReactNode } from "react";

interface FeatureBoxProps {
  icon?: ReactNode;
  title?: string;
  date?: ReactNode;
  children: ReactNode;
  dataBadge?: string | number;
  className?: string;
}

export default function FeatureBox({ icon, title, date, children, dataBadge, className }: FeatureBoxProps) {
  return (
    <div className={`card-items${className ? ` ${className}` : ""}`} data-badge={dataBadge}>
      <div className="card-icon">
        {icon}
      </div>

      {date && <span className="date">{date}</span>}

      {title && <h3 className="card-headline">{title}</h3>}

      <div className="card-text">{children}</div>
    </div>
  );
}
