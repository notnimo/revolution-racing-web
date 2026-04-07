import { useEffect, useState } from "react";

export function useWindowWidth() {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (typeof window === "undefined") return;
		setWidth(window.innerWidth);
	}, []);

	return width;
}
