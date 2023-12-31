import Link from 'next/link'

import { Header } from '~/components/header'

export default function Home() {
	return (
		<main className="flex flex-col gap-12">
			<Header />
			<div className="space-y-8">
				<h2 className="text-3xl text-balance">
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
							className="font-semibold text-sm underline underline decoration-wavy decoration-primary"
						>
							here.
						</Link>
					</p>
				</div>
			</div>
		</main>
	)
}
