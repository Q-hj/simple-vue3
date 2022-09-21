/*
 * @Date: 2022-09-19 17:00:38
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-09-19 18:21:56
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	build: {
		outDir: 'dist',
	},
	server: {
		port: 8123,
		host: '0.0.0.0',
		hmr: true,
	},
	plugins: [
		vue(),
		//自动导入组件
		Components(),
	],
});
