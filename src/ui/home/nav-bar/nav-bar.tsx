export function NavBar() {
	const childStyle = "rounded-sm bg-rr-accent-blue";
	return (
		<div className="flex flex-row justify-around min-w-[100vh] sticky top-0 z-50 bg-rr-dark-blue rounded-sm">
			<div className={childStyle}>top</div>
			<div className={childStyle}>mid</div>
			<div className={childStyle}>bottom</div>
		</div>
	);
}
