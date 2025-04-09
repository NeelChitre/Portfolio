import { Button, Section, Text } from '@/app/components';
import { Flex } from 'styled-system/jsx';
import { FC } from 'react';
import { contactInfo } from '@/app/data';
import Link from 'next/link';
import { GithubIcon, LinkedinIcon } from 'lucide-react';

export interface IntroProps {}

export const Intro: FC<IntroProps> = () => {
    return (
        <Section id="intro" variant="standard">
            <Flex direction={'column'} gap={'3'} alignItems={'center'}>
                <Text as={'h3'} fontSize={{ base: 'md' }}>
                    Hello I'm
                </Text>
                <Text as={'h1'} fontSize={{ base: '2xl', lg: '4xl' }}>
                    {contactInfo.name}
                </Text>
                <Text as={'h2'} fontSize={{ base: 'xl' }}>
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
                    <GithubIcon />
                </Link>
                <Link href={contactInfo.linkedIn}>
                    <LinkedinIcon />
                </Link>
            </Flex>
        </Section>
    );
};
