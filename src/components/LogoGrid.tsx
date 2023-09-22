import React from 'react';
import '../pages/Skills/index.scss';
import ToolTip from './Tooltip';

type LogoGridProps = {
  logos: {
    logoSrc: string;
    classname?: string;
    tooltip?: string;
    onHover?: () => void; // Correctly define onHover as a function type
    onHoverOut?: () => void; // Correctly define onHover as a function type
  }[];
};

export const LogoGrid: React.FC<LogoGridProps> = (props) => {
  const { logos } = props;

  const content = logos.map((logo, index) => {
    return (
      <ToolTip tooltip={logo.tooltip}>
        <div
          className="logo-tab"
          key={index}
          onMouseEnter={() => logo.onHover?.()}
          onMouseLeave={() => logo.onHoverOut?.()}
        >
          <img
            className={`logo ${logo.classname}`}
            src={logo.logoSrc}
            alt="Logo"
          />
        </div>
      </ToolTip>
    );
  });

  return <div className="logoGrid">{content}</div>;
};

export default LogoGrid;
