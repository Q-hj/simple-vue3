/*
 * @Date: 2022-09-27 14:13:32
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-09-27 14:25:38
 * @Description:
 */
import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';
import plugin from 'windicss/plugin';

export default defineConfig({
	darkMode: 'class', // or 'media'
	attributify: {
		prefix: 'w:', //添加自定义前缀
	},
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
			colors: {
				blue: colors.sky,
				red: colors.rose,
				pink: colors.fuchsia,
			},
			fontFamily: {
				sans: ['Graphik', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			},
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	// Windi CSS 提供了 Shortcuts 特性可以工具类的名字组合在一起定义成一个新的名字，在任何地方使用，就免去了大量重复冗余的代码。
	shortcuts: {
		'box view': 'w-[25%] h-12 rounded-md m-4px',
	},
	plugins: [
		plugin(({ addUtilities }) => {
			const newUtilities = {
				'.skew-10deg': {
					transform: 'skewY(-10deg)',
				},
				'.skew-15deg': {
					transform: 'skewY(-15deg)',
				},
			};
			addUtilities(newUtilities);
		}),
		plugin(({ addComponents }) => {
			const buttons = {
				'.btn': {
					padding: '.5rem 1rem',
					borderRadius: '.25rem',
					fontWeight: '600',
				},
				'.btn-blue': {
					backgroundColor: '#3490dc',
					color: '#fff',
					'&:hover': {
						backgroundColor: '#2779bd',
					},
				},
				'.btn-red': {
					backgroundColor: '#e3342f',
					color: '#fff',
					'&:hover': {
						backgroundColor: '#cc1f1a',
					},
				},
			};
			addComponents(buttons);
		}),
		plugin(({ addDynamic, variants }) => {
			addDynamic(
				'skew',
				({ Utility, Style }) => {
					return Utility.handler
						.handleStatic(Style('skew'))
						.handleNumber(0, 360, 'int', (number) => `skewY(-${number}deg)`)
						.createProperty('transform');
				},
				variants('skew')
			);
		}),
		require('windicss/plugin/filters'),
		require('windicss/plugin/forms'),
		require('windicss/plugin/aspect-ratio'),
		require('windicss/plugin/line-clamp'),
		require('windicss/plugin/typography')({
			modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
		}),
	],
});
