import client from '@/services/apollo-client'
import { GET_HOME } from '@/gql/Pages'

import Image from 'next/image'
import { HeroHome } from '@/components/sections/hero-home'
import { Sections } from '@/components/sections/dynamic-sections'

async function getData() {
	const res = await client.query({
		query: GET_HOME,
		fetchPolicy: 'no-cache',
	})

	if (!res.data?.home?.data?.attributes) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.data.home.data.attributes
}

export default async function Home() {
	const { hero, seo, sections } = await getData()

	return (
		<main className="">
			{hero && <HeroHome {...hero} />}
			{sections && <Sections sections={sections} />}
		</main>
	)
}
