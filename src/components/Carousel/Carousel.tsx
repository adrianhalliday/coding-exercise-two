"use client"

import { useEffect, useRef, useState } from 'react'
import { scrollActiveRef } from '@/hooks/scrollActiveRef'
import './Carousel.scss'

import ButtonProps from "@/fragments/Button"

type Theme = "navy" | "light-grey" | "lime-green" | "yellow" | "white" | "paradise-pink";

type Item = {
	image: {
		sources: {[key: string]: string};
		alt?: string;
		caption?: string;
	},
	title: string;
	caption: string;
}

interface ComponentProps {
	theme: Theme;
	notch: boolean;
	maxPerView: 2 | 3 | 4;
	items: Item[];
	heading: string;
	cta: typeof ButtonProps | null;
}

export default function Carousel({ 
	theme = "white",
	notch = false,
	maxPerView = 4,
	items = [
		{
			image: {
				sources: { base: "/assets/placeholder.webp" },
				alt: "Placeholder image.",
			},
			title: "Lorem ipsum",
			caption: "Lorem ipsum",
		}
	],
	heading = "Placeholder heading",
	cta = null
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

	const [currentSlide, setCurrentSlide] = useState<number>(0);

	function updateSlide(num: number) {
		setCurrentSlide(currentSlide + num);
	}
	useEffect(() => updateSlide(0),[])
	  
	const handlePrev = () => updateSlide(-1);
	const handleNext = () => updateSlide(1);

	return (
		<div 
			className={`c_carousel theme--${theme}`}
			ref={scrollContainer}
			data-max={items.length} 
			data-per-view={maxPerView}
			data-active={currentSlide}
		>
			<div className="c_carousel--header">
				<h2 className="font--bold">{heading}</h2>
				<div className="c_carousel--nav">
					<button
						className="prev"
						disabled={currentSlide === 0}
						onClick={handlePrev}
					>Prev</button>
					<button
						className="next"
						disabled={currentSlide === items.length - Number(scrollContainer.current?.dataset.perView)}
						onClick={handleNext}
					>Next</button>
				</div>
			</div>

			<div className={`c_carousel--container`}>
				<div className="c_carousel--inner">
				{items && items.map((item, index) => (
					<div key={index} className="carousel--slide">
						<img src={item.image.sources.base} alt={item.image.alt} />
						<h3 className="font--bold">{item.title}</h3>
						<p className="font--regular">{item.caption}</p>
					</div>
				))}
				</div>
			</div>

			<div className="c_carousel--footer">
				<button></button>
			</div>
			<div ref={triggerEl} style={{ height: '1px', position: 'absolute', top: '-30svh' }} />
		</div>
	)
}