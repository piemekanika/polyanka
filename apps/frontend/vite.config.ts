import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import presetWind from '@unocss/preset-wind';
import presetUno from '@unocss/preset-uno';
import { presetWebFonts } from 'unocss';
import { unocssShortcuts } from './src/styles/unocss-shortcuts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Unocss({
            presets: [
                presetWind(),
                presetUno(),
                presetWebFonts({
                    provider: 'google',
                    fonts: {
                        sans: [
                            {
                                name: 'Open Sans',
                                weights: ['400', '500', '600']
                            }
                        ],
                        header: 'Orelega One',
                    },
                }),
            ],
            shortcuts: unocssShortcuts,
        }),
    ],
});
