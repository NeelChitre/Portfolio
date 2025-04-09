import { styled } from 'styled-system/jsx';

export const Section = styled('div', {
    base: {},
    variants: {
        variant: {
            standard: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                minH: 'screen'
            }
        }
    }
});
