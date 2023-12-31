import Image from 'next/image'
import Link from 'next/link'

import {
	GitHubLogoIcon,
	MobileIcon,
	TwitterLogoIcon,
} from '@radix-ui/react-icons'

import { Badge } from '~/components/ui/badge'
import { buttonVariants } from '~/components/ui/button'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '~/components/ui/hover-card'
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
					<p className="text-muted-foreground">
						Developer & average{' '}
						<HoverCard openDelay={100}>
							<HoverCardTrigger className="underline decoration-wavy decoration-primary cursor-pointer">
								arch{' '}
							</HoverCardTrigger>
							<HoverCardContent>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2">
										<MobileIcon className="w-4 h-4" />
										<Link
											href="https://github.com/strlrd-29/.dotfiles"
											target="_blank"
											className="font-semibold text-sm underline"
										>
											strlrd-29/.dotfiles
										</Link>
									</div>
									<Badge variant="outline">Public</Badge>
								</div>
							</HoverCardContent>
						</HoverCard>
						user
					</p>
				</div>
			</div>
			<div className="flex items-center gap-3">
				<Link
					href="https://github.com/strlrd-29"
					target="_blank"
					className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
				>
					<GitHubLogoIcon className="w-4 h-4" />
				</Link>
				<Link
					href="https://twitter.com/strlrd29"
					target="_blank"
					className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
				>
					<TwitterLogoIcon className="w-4 h-4" />
				</Link>
			</div>
		</header>
	)
}
