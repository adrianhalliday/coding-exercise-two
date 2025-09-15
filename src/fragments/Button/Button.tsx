import React from "react";
import Link from 'next/link'
import Icon from '@/fragments/Icon'
import './Button.scss'

type IconType = 'Calendar' | 'ArrowRight';
type Theme = "navy" | "light-grey" | "lime-green" | "yellow" | "white" | "paradise-pink";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  theme: Theme;
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
  icon?: IconType | null;
  link: URL | null;
  target?: string | null;
  className: string;
}

const Button: React.FC<ButtonProps> = ({
  label = "Button",
  theme = "lime-green",
  variant = "primary",
  link = new URL("/", "http://localhost"),
  size = "medium",
  icon = null,
  target,
  className
}) => {
  const classNames = [className, "button", "font--bold", `theme--${theme}`, variant, size, icon ? "has-icon" : ""]
    .filter(Boolean)
    .join(" ");

  const iconSizes: {[key: string]: number} = {
    small: 16,
    medium: 18,
    large: 22,
  }

  return (
    <Link href={link?.toString() || "/"} className={classNames}>
      <span className="button--inner">{label}</span>

      {icon && (
        <span className="button--icon">
          {<Icon width={iconSizes[size]} height={iconSizes[size]} type={icon} />}
        </span>
      )}
    </Link>
  );
};

export default Button