import { SectionHeader } from '../shared/section-header'

export default function AboutSection({ header = null, image = null, features = null }) {
	return <section className="container">{header && <SectionHeader {...header} />}</section>
}
