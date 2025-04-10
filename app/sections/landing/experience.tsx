import { Section, Text } from '@/app/components';
import { ExperienceCard } from '@/app/components/cards/experience-card';
import { experience } from '@/app/data/experience';
import { FC } from 'react';
import { Flex } from 'styled-system/jsx';

export interface ExperienceProps {}

export const Experience: FC<ExperienceProps> = () => {
    return (
        <Section id="experience" variant="standard">
            <Flex direction={'column'} alignItems={'center'} gap={'2'}>
                <Text as={'h3'} textStyle={'body'}>
                    What I've been doing
                </Text>
                <Text as={'h1'} textStyle={'title'}>
                    Expericence
                </Text>
            </Flex>
            <Flex justifyContent={'center'} flexWrap={'wrap'} gap={'4'} my={'12'}>
                {experience.map((props, index) => (
                    <ExperienceCard key={index} {...props} />
                ))}
            </Flex>
        </Section>
    );
};
