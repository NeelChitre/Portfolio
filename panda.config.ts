import { defineConfig } from '@pandacss/dev';
import { textStyles, globalCss } from '@/app/utils';

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ['./app/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    globalCss,

    patterns: {
        extend: {
            container: {
                defaultValues: {
                    maxW: 'breakpoint-3xl'
                }
            }
        }
    },

    // Useful for theme customization
    theme: {
        extend: {
            tokens: {
                colors: {},
                fonts: {
                    poppins: {
                        value: 'var(--font-poppins), sans-serif'
                    }
                },
                zIndex: {
                    sticky: {
                        value: 1000
                    }
                },
                sizes: {
                    'breakpoint-3xl': {
                        value: '1920px'
                    }
                }
            },
            textStyles
        }
    },

    // The output directory for your css system
    outdir: 'styled-system',

    jsxFramework: 'react'
});
