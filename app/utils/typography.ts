import { defineTextStyles } from '@pandacss/dev';

//if you modify textStyles you might want to run the 'yarn prepare' command for panda to generate based on the changes.
export const textStyles = defineTextStyles({
    title: {
        value: {
            fontSize: { base: '3xl', lg: '5xl' },
            fontWeight: 'semibold'
        }
    },
    'sub-title': {
        value: {
            fontSize: { base: 'xl', lg: '2xl' }
        }
    },
    body: {
        value: {
            fontSize: 'md'
        }
    },
    logo: {
        value: {
            fontSize: 'xl',
            fontWeight: 'medium'
        }
    }
});
