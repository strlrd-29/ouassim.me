import { GeistSans as FontSans } from 'geist/font/sans'
import { JetBrains_Mono as FontMono } from 'next/font/google'

export const fontSans = FontSans
export const fontMono = FontMono({
	subsets: ['latin'],
	variable: '--font-mono',
})
