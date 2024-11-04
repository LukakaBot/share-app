import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
// import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(async () => {
	const UnoCSS = (await import('unocss/vite')).default;

	return {
		plugins: [uni(), UnoCSS()],
    alias: {
      '@': '/src',
    },
	};
});
