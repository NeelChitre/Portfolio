import { Section } from '@/app/components';
import { FC } from 'react';

export interface IntroProps {}

export const Intro: FC<IntroProps> = () => {
    return (
        <Section id="intro" variant="standard">
            intro
        </Section>
    );
};
