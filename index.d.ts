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
  html?: React.ReactElement<any>;
  position?: Position;
  animation?: Animation;
  animateFill?: boolean;
  arrow?: boolean;
  arrowSize?: Size;
  delay?: number;
  hideDelay?: number;
  trigger?: Trigger;
  duration?: number;
  hideDuration?: number;
  interactive?: boolean;
  interactiveBorder?: number;
  theme?: Theme;
  offset?: number;
  hideOnClick?: boolean | "persistent";
  multiple?: boolean;
  followCursor?: boolean;
  inertia?: boolean;
  popperOptions?: any;
  onShow: () => void,
  onShown: () => void,
  onHide: () => void,
  onHidden: () => void,
  disabled?: boolean;
  size?: Size;
  className?: string;
  style?: React.CSSProperties;
  distance?: number;
  onRequestClose?: () => void;
  sticky?: boolean;
  stickyDuration?: boolean;
  tag?: 'div' | 'span' | 'a';
  touchHold?: boolean;
  unmountHTMLWhenHide?: boolean;
  zIndex?: number;
  rawTemplate?: any;
  title?: string;
  open?: boolean;
  useContext?: boolean;
  tabIndex?: number;
  transitionFlip?: boolean;
  unmountHTMLWhenHide?: boolean;
  beforeShown?: () => void;
  shown?: () => void;
  beforeHidden?: () => void;
  hidden?: () => void;
}

export class Tooltip extends React.Component<TooltipProps> { }

export declare function withTooltip<P>(
  component: React.ComponentType<P>,
  options: TooltipProps
): JSX.Element;
