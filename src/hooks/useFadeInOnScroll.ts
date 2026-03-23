import { useEffect } from "react";

export function useFadeInOnScroll(selector: string = ".fade-in-section") {
	useEffect(() => {
		const handler = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("fade-in-visible");
				} else {
					// Remove the class when element exits viewport to allow re-triggering
					entry.target.classList.remove("fade-in-visible");
				}
			});
		};

		const observer = new IntersectionObserver(handler, {
			threshold: 0.15,
			rootMargin: "0px 0px -50px 0px",
		});

		const elements = document.querySelectorAll(selector);
		elements.forEach((el) => {
			observer.observe(el);
		});

		return () => {
			elements.forEach((el) => observer.unobserve(el));
			observer.disconnect();
		};
	}, [selector]);
}
