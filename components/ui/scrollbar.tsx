import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/css/OverlayScrollbars.css";

type ScrollbarProps = {
  className?: string;
  children: React.ReactNode;
  options?: any;
  style?: any;
};

export const Scrollbar: React.FC<ScrollbarProps> = ({
  children,
  className,
  options,
  style,
}) => {
  return (
    <OverlayScrollbarsComponent
      options={{
        className: `${className} os-host-flexbox`,
        // scrollbars: {
        //   autoHide: 'leave',
        // },
        ...options,
      }}
      style={style}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};
