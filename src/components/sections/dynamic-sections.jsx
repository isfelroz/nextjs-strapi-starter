import { useDynamic } from '@/hooks/useDynamic'

export function Sections({ sections }) {
	if (!sections.length) return
	return (
		<>
			{sections.map((section, key) => {
				return <DynamicSection key={key} {...section} />
			})}
		</>
	)
}

export function DynamicSection({ __typename, ...args }) {
	const Section = useDynamic({ typename: __typename })

	if (!Section) return null
	return <Section {...args} />
}
