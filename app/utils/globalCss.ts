import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
    body: {
        backgroundColor: '{colors.bg.canvas}',
        color: '{colors.fg.default}',
        lineHeight: '1.4',
        fontFamily: 'poppins',
        overflowX: 'hidden'
    }
});
