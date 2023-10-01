import dynamic from 'next/dynamic'

const SECTIONS = {
	ComponentSectionAbout: dynamic(() => import('@/components/sections/about')),
}

export function useDynamic({ typename }) {
	return SECTIONS[typename]
}
