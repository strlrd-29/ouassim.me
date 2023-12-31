import type { Metadata } from 'next'

import { ThemeProvider } from '~/components/theme-provider'
import { fontMono, fontSans } from '~/lib/fonts'
import { cn } from '~/lib/utils'

import './globals.css'

export const metadata: Metadata = {
	title: 'Ghribi Ouassim - Software developer 👋',
	description: 'Software developer based in Algeria.',
}

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={cn(
					'container max-w-3xl py-8 md:py-12 px-4',
					fontSans.className,
					fontMono.variable,
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="orange">
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
