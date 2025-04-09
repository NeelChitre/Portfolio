import { defineTextStyles } from '@pandacss/dev';

//if you modify textStyles you might want to run the 'yarn prepare' command for panda to generate based on the changes.
export const textStyles = defineTextStyles({
    title: {
        value: {
            fontSize: { base: '2xl', lg: '4xl' },
            fontWeight: 'semibold'
        }
    },
    'sub-title': {
        value: {
            fontSize: 'xl'
        }
    },
    body: {
        value: {
            fontSize: 'md'
        }
    }
});
