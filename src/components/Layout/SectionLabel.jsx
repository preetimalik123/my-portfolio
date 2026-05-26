// components/Layout/SectionLabel.jsx

import "./SectionLabel.css";

export default function SectionLabel({
  children,
}) {
  return (
    <p className="sectionLabel">
      {children}
    </p>
  );
}