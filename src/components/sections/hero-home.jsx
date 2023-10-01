export function HeroHome({ title = null, subtitle = null, text = null, image = null }) {
	return (
		<section id="home" class="bg-white dark:bg-gray-900 h-screen grid place-content-center">
			<div className="container py-8 px-4 text-center lg:py-16 lg:px-12">
				<h6 className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
					{subtitle}
				</h6>
				<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
					{title}
				</h1>
				<p className="mb-8 font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
					{text}
				</p>
			</div>
		</section>
	)
}
