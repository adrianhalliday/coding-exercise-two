import { useEffect, useRef, useState } from 'react'

export const useScrollActiveRef = () => {
	const [scrollActive, setScrollActive] = useState<boolean>(false);
	const triggerEl = useRef<HTMLDivElement>(null);
  
	useEffect(() => {
	  if (!triggerEl.current) return;
  
	  const observer = new IntersectionObserver(
		(entries) => {
		  entries.forEach((entry) => {
			setScrollActive(!entry.isIntersecting);
		  });
		},
		{
		  root: null,
		  rootMargin: '0px',
		  threshold: 0
		}
	  );
  
	  observer.observe(triggerEl.current);
  
	  return () => {
		observer.disconnect();
	  };
	}, []);
  
	return { scrollActive, triggerEl };
  };