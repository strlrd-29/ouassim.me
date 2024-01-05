import Link from 'next/link'

import { Header } from '~/components/header'
import { ProjectCard } from './components/project-card'

export default function Home() {
	return (
		<main className="flex flex-col gap-12">
			<Header />
			<div className="space-y-8">
				<h2 className="text-3xl text-balance font-mono font-semibold">
					Software Engineer Focused on{' '}
					<span className="text-[#0BD8B6]">Typescript</span>,{' '}
					<span className="text-[#FFA057]">Python</span> and{' '}
					<span className="text-[#70B8FF]">Go.</span>
				</h2>
				<div className="space-y-2">
					<p>
						Currently working as a Software engineer{' '}
						<Link
							href="https://big-mama.io"
							target="_blank"
							className="underline decoration-wavy decoration-primary"
						>
							@BIGmama Technology
						</Link>
						. Still pursuing my master&apos;s degree in Data Science & AI. On my
						free time I like contributing to open-source projects.
					</p>
					<p>
						I use arch Btw! check out my dotfiles{' '}
						<Link
							href="https://github.com/strlrd-29/.dotfiles"
							target="_blank"
							className="font-semibold text-s underline decoration-wavy decoration-primary"
						>
							here.
						</Link>
					</p>
				</div>
			</div>
			<div className="space-y-8">
				<h2 className="text-3xl font-mono font-semibold">Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
					<ProjectCard
						title="hyko.ai"
						description="Build your own AI tools in minutes"
						url="https://hyko.ai"
					/>
					<ProjectCard
						title="yourscrib.ai"
						description="Ai writing assistant"
						url="https://yourscrib.ai"
					/>
				</div>
			</div>
		</main>
	)
}
