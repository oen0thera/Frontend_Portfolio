import React from "react";

export type ItemProps = {
  subtitle: string;
  content: React.ReactElement;
  onClick?: React.MouseEventHandler;
  onHover: (isHover: boolean) => void;
};
