import type { ReactNode } from "react";
import "./global.css";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="example">
			<body>{children}</body>
		</html>
	);
}
