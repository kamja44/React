import type {
  FC,
  DetailedHTMLProps,
  PropsWithChildren,
  HTMLAttributes,
} from "react";
import type { WidthHeight } from "./WidthHeight";
import type { LeftRightTopBotton } from "./LeftRightTopBotton";

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightTopBotton & {
    src?: string;
  };

export const Div: FC<DivProps> = ({
  width,
  height,
  style: _style,
  src,
  className: _className,
  left,
  right,
  top,
  bottom,
  ...props
}) => {
  const style = {
    ..._style,
    width,
    height,
    backgroundImage: src && `url(${src})`,
    left,
    right,
    top,
    bottom,
  };
  const className = ["box-border", src && "bg-gray-300", _className].join(" ");
  return <div {...props} className={className} style={style} />;
};
