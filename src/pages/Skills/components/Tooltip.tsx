import { FC, ReactNode, useRef } from 'react';
import './tooltip.scss';

interface Props {
  children: ReactNode;
  tooltip?: string;
  style?: React.CSSProperties;
}

const ToolTip: FC<Props> = ({ children, tooltip, style }): JSX.Element => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} className="tooltip-container">
      {children}
      {tooltip ? (
        <span ref={tooltipRef} className="tooltip" style={style}>
          {tooltip}
        </span>
      ) : null}
    </div>
  );
};

export default ToolTip;
