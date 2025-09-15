import React from "react";
import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  theme?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  icon?: string | null;
  link?: string | null;
  target?: string | null;
}

const Button: React.FC<ButtonProps> = ({
  label = "Button",
  theme = "primary",
  size = "medium",
  icon = null,
}) => {
  const classNames = ["button", theme, size, icon ? "has-icon" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames}>
      <span className="button--inner">{label}</span>

      {icon && (
        <span className="button--icon">
          {/* <Icon type={icon} /> */}
        </span>
      )}
    </button>
  );
};

export default Button