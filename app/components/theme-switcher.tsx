'use client'

import { useTheme } from 'next-themes'

import { Theme, themes } from '~/lib/themes'

export function ThemeSwitcher() {
	return (
		<div className="fixed bottom-8 inset-x-1/2 -translate-x-1/2 flex items-center gap-3 py-1 px-2 rounded-full border w-fit bg-card z-50">
			{themes.map((theme) => (
				<ThemeSwitcherButton {...theme} key={theme.name} />
			))}
		</div>
	)
}

type ThemeSwitcherButtonProps = Theme

function ThemeSwitcherButton({
	name,
	label,
	primaryColor,
}: ThemeSwitcherButtonProps) {
	const { setTheme } = useTheme()
	return (
		<button
			onClick={() => {
				const root = document.querySelector(':root')
				const value = root?.classList.value
				if (value) {
					root?.classList.replace(value, name)
					setTheme(name)
				}
			}}
			title={label}
			type="button"
			className="rounded-full border w-7 h-7 hover:scale-110 transition-all"
			style={{ background: primaryColor }}
		/>
	)
}
