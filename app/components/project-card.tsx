import Link from 'next/link'

import { Link1Icon } from '@radix-ui/react-icons'

interface ProjectCardProps {
	title: string
	description: string
	url: string
}

export function ProjectCard({ title, description, url }: ProjectCardProps) {
	return (
		<Link
			href={url}
			target="_blank"
			className="border flex-1 flex items-center justify-between bg-card text-card-foreground px-2 py-4 duration-300 group rounded-md hover:bg-muted transition-all"
		>
			<div className="space-y-1.5">
				<h3 className="font-semibold leading-none tracking-tight">{title}</h3>
				<p className="text-sm text-muted-foreground">{description}</p>
			</div>
			<Link1Icon className="size-5 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300" />
		</Link>
	)
}
