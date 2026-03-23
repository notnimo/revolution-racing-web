import { Analytics } from "@vercel/analytics/next";
import type { ReactNode } from "react";
import "./global.css";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="example">
			<body>{children}</body>
			<Analytics />
		</html>
	);
}
