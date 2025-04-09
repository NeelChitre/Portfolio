import { Button, Section, Text } from '@/app/components';
import { Box, Flex } from 'styled-system/jsx';
import { FC } from 'react';
import { contactInfo } from '@/app/data';
import Link from 'next/link';
import { GithubIcon, LinkedinIcon } from 'lucide-react';

export interface IntroProps {}

export const Intro: FC<IntroProps> = () => {
    return (
        <Section id="intro" variant="standard">
            <Flex direction={'column'} alignItems={'center'}>
                <Text as={'h3'} textStyle={'body'}>
                    Hello I'm
                </Text>
                <Text as={'h1'} textStyle={'title'} mb={'2'}>
                    {contactInfo.name}
                </Text>
                <Text as={'h2'} textStyle={'sub-title'}>
                    {contactInfo.role}
                </Text>
            </Flex>
            <Flex my={'8'} gap={'8'}>
                <a href={`${contactInfo.resumePath}`} download>
                    <Button variant={'solid'} size={'lg'}>
                        Download CV
                    </Button>
                </a>
                <Link href="/#contact">
                    <Button variant={'outline'} size={'lg'}>
                        Contact Info
                    </Button>
                </Link>
            </Flex>
            <Flex my={'8'} gap={'8'}>
                <Link href={contactInfo.githubProfile}>
                    <Box
                        borderRadius={'full'}
                        _hover={{ backgroundColor: 'fg.default', color: 'bg.canvas' }}
                        p={'4'}
                        transitionProperty={'all'}
                        transitionTimingFunction={'ease-in-out'}
                        transitionDuration={'normal'}
                    >
                        <GithubIcon size={32} />
                    </Box>
                </Link>
                <Link href={contactInfo.linkedIn}>
                    <Box
                        borderRadius={'full'}
                        _hover={{ backgroundColor: 'fg.default', color: 'bg.canvas' }}
                        p={'4'}
                        transitionProperty={'all'}
                        transitionTimingFunction={'ease-in-out'}
                        transitionDuration={'normal'}
                    >
                        <LinkedinIcon size={32} />
                    </Box>
                </Link>
            </Flex>
        </Section>
    );
};
