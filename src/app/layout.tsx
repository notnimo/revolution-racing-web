import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import type { ReactNode } from "react";
import "./global.css";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="example">
			<head>
				<title>Revolution Racing</title>
				<meta
					name="description"
					content="Revolution Racing is a racing team that competes in the Formula Student competition."
				/>
				<link
					rel="icon"
					type="image/x-icon"
					href="/rev-racing-logos/logo-white.ico"
				/>
			</head>
			<body>{children}</body>
			<body>{children}</body>
			<Analytics />
			<SpeedInsights />
		</html>
	);
}
