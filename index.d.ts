import * as React from "react";

export type Position =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";
export type Trigger = "mouseenter" | "focus" | "click" | "manual";
export type Animation = "shift" | "perspective" | "fade" | "scale" | "none";
export type Size = "small" | "regular" | "big";
export type Theme = "dark" | "light" | "transparent";

export interface TooltipProps {
  title?: string;
  disabled?: boolean;
  open?: boolean;
  useContext?: boolean;
  onRequestClose?: () => void;
  position?: Position;
  trigger?: Trigger;
  tabIndex?: number;
  interactive?: boolean;
  interactiveBorder?: number;
  delay?: number;
  hideDelay?: number;
  animation?: Animation;
  arrow?: boolean;
  arrowSize?: Size;
  animateFill?: boolean;
  duration?: number;
  hideDuration?: number;
  distance?: number;
  offset?: number;
  hideOnClick?: boolean | "persistent";
  multiple?: boolean;
  followCursor?: boolean;
  inertia?: boolean;
  transitionFlip?: boolean;
  popperOptions?: any;
  html?: React.ReactElement<any>;
  unmountHTMLWhenHide?: boolean;
  size?: Size;
  sticky?: boolean;
  stickyDuration?: boolean;
  beforeShown?: () => void;
  shown?: () => void;
  beforeHidden?: () => void;
  hidden?: () => void;
  theme?: Theme;
  className?: string;
  style?: React.CSSProperties;
}

export class Tooltip extends React.Component<TooltipProps> {}

export declare function withTooltip<P>(
  component: React.ComponentType<P>,
  options: TooltipProps
): JSX.Element;
