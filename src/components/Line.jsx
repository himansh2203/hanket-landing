import React from "react";
import "../App.css";

/**
 * Usage:
 * <Line />                       // default horizontal full
 * <Line variant="short" />       // centered short line
 * <Line variant="vertical" />    // vertical divider
 */
const Line = ({ variant = "full" }) => {
  const cls =
    variant === "vertical"
      ? "line vertical"
      : variant === "short"
      ? "line short"
      : "line full";

  return <div className={cls} aria-hidden="true" />;
};

export default Line;
