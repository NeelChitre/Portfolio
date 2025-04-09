import { Section, Text } from '@/app/components';
import { Flex } from 'styled-system/jsx';
import { FC } from 'react';

export interface AboutProps {}

export const About: FC<AboutProps> = () => {
    return (
        <Section id="about" variant="standard">
            <Flex direction={'column'} alignItems={'center'} gap={'2'}>
                <Text as={'h3'} textStyle={'body'}>
                    Get to know more
                </Text>
                <Text as={'h1'} textStyle={'title'}>
                    About Me
                </Text>
            </Flex>
            <Text as={'p'} textStyle={'body'} maxW={'3xl'} mt={'10'}>
                Hey there! I'm a Game Developer who loves bringing ideas to life through interactive
                and engaging experiences. I enjoy blending creativity with clean, efficient code to
                build games that feel great to play. Whether it’s tackling gameplay challenges or
                polishing the small stuff, I’m all about crafting experiences that feel smooth, fun,
                and rewarding. I believe the magic is in the details—and I’m always chasing that
                feeling when everything just clicks.
            </Text>
        </Section>
    );
};
