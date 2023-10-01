export function SectionHeader({ title, subtitle, text }) {
	return (
		<header className="grid gap-2">
			{subtitle && <h6>{subtitle}</h6>}
			{title && <h2>{title}</h2>}
			{text && <p>{text}</p>}
		</header>
	)
}
