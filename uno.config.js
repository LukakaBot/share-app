import {
	defineConfig,
	presetIcons,
	transformerVariantGroup,
	transformerDirectives,
} from 'unocss';
import { presetUni } from '@uni-helper/unocss-preset-uni';

/**
 * @type {import('unocss').UserConfig}
 */
export default defineConfig({
	presets: [
		presetUni(),
		presetIcons({
			scale: 1.2,
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle',
			},
		}),
	],
	transformers: [transformerVariantGroup(), transformerDirectives()],
});
