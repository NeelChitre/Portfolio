import { Section } from '@/app/components';
import { FC } from 'react';

export interface AboutProps {}

export const About: FC<AboutProps> = () => {
    return (
        <Section id="about" variant="standard">
            about
        </Section>
    );
};
