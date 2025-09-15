"use client"

import { useEffect, useRef } from 'react'
import { scrollActiveRef } from '@/hooks/scrollActiveRef'
import { wrapText } from '@/hooks/wrapText'
import './TextImage.scss'

type Theme = "navy" | "light-grey" | "light-green" | "yellow" | "white" | "pink";

interface ComponentProps {
	theme: Theme;
	alignment?: "reverse" | null;
	image: {
		sources: {[key: string]: string};
		alt?: string;
		caption?: string;
	}
	content: string;
}

export default function Hero({ 
	theme = "light-green",
	alignment = null,
	image = {
		sources: { base: "/assets/placeholder.webp" },
		alt: "Placeholder image.",
	},
	content = "Placeholder component content."
}: ComponentProps) {
	const { scrollActive, triggerEl } = scrollActiveRef();
	const scrollContainer = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (scrollActive && scrollContainer.current) {
			// Forces reflow so animations trigger properly- hacky workaround in place of GSAP
			scrollContainer.current.offsetHeight;
			scrollContainer.current.classList.add('scroll-active');
		}
	}, [scrollActive]);

	const srcset = Object.entries(image.sources)
		.map(([key, url]) => `${url} ${key !== 'base' ? `${key}w` : ''}`)
		.join(', ');

	const html: string = wrapText("word","span",content);

	return (
		<div ref={scrollContainer} className={`c_text-image ${alignment ?? ''}`}>
			<div className={`c_text-image--content theme--${theme}`}>
				<p className="c_text-image--text font--bold" dangerouslySetInnerHTML={{ __html: html }}></p>
			</div>
			<div className="c_text-image--image">
				<img
					src={image.sources.base ?? ''}
					srcSet={srcset} 
					alt={image.alt ?? ''} 
				/>
				{(image.caption && 
					<div className="caption font--regular">{image.caption}</div>
				)}
			</div>
			<div ref={triggerEl} style={{ height: '1px', position: 'absolute', top: '-30svh' }} />
		</div>
	)
}