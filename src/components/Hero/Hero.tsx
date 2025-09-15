import './Hero.scss'

interface ComponentProps {
	title?: string;
	subtitle?: string;
}

export default function Hero({ 
	title = "Placeholder Title", 
	subtitle = "Placeholder description text.",
}: ComponentProps) {
	return (
		<div className="c_hero">
			<div className="c_hero--background">
				<img src="/assets/Clientname-Physiotherapist-consultation-in-gym.webp" alt="Physiotherapist consultation in gym" />
			</div>
			<div className="c_hero--inner">
				<h1 className="c_hero--title font--regular">{title}</h1>
				<h3 className="c_hero--subtitle font--regular">{subtitle}</h3>
			</div>
		</div>
	)
}