import React from "react"
import Calendar from './icons/Calendar.svg';
import ArrowRight from './icons/ArrowRight.svg';
import Menu from './icons/Menu.svg';

type IconType = 'Calendar' | 'ArrowRight' | 'Menu';

interface IconProps extends React.SVGProps<SVGSVGElement> {
	type: IconType;
	width?: number;
	height?: number;
}

const icons: Record<IconType, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
	Calendar: Calendar,
	ArrowRight: ArrowRight,
	Menu: Menu,
};
  
function Icon({ type, width = 24, height = 24 }: IconProps) {
	const IconComponent = icons[type];

	return (
		<IconComponent 
			width={width} 
			height={height}
		/>
	);
};

export default Icon