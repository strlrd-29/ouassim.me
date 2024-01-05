import Image from 'next/image'
import Link from 'next/link'

import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

import { buttonVariants } from '~/components/ui/button'
import { cn } from '~/lib/utils'

export function Header() {
	return (
		<header className="flex items-center justify-between">
			<div className="flex items-center gap-3">
				<Image
					src="/avatar.jpeg"
					width={45}
					height={45}
					className="rounded-full"
					alt="Ghribi Ouassim' avatar"
				/>
				<div className="flex flex-col text-sm">
					<h3 className="font-semibold">Ghribi Ouassim</h3>
					<p className="text-muted-foreground">Developer & average arch user</p>
				</div>
			</div>
			<div className="flex items-center gap-3">
				<Link
					href="https://github.com/strlrd-29"
					target="_blank"
					className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
				>
					<GitHubLogoIcon className="size-4" />
				</Link>
				<Link
					href="https://twitter.com/strlrd29"
					target="_blank"
					className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
				>
					<TwitterLogoIcon className="size-4" />
				</Link>
			</div>
		</header>
	)
}
