import React from "react";

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Section;
