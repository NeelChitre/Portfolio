import { Section, Text } from '@/app/components';
import { contactInfo } from '@/app/data';
import { LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { Flex } from 'styled-system/jsx';

export interface ContactProps {}

export const Contact: FC<ContactProps> = () => {
    return (
        <Section id="contact" variant="standard">
            <Flex direction={'column'} alignItems={'center'} gap={'2'}>
                <Text as={'h3'} textStyle={'body'}>
                    Get in touch
                </Text>
                <Text as={'h1'} textStyle={'title'}>
                    Contact Me
                </Text>
            </Flex>

            <Flex
                direction={{ base: 'column', md: 'row' }}
                gap={'8'}
                p={'10'}
                my={'10'}
                border={'gray'}
                borderStyle={'solid'}
                borderWidth={'thin'}
                borderRadius={'3xl'}
            >
                <Link href={`mailto:${contactInfo.email}`}>
                    <Flex alignItems={'center'} gap={'2'}>
                        <MailIcon />
                        <Text>{contactInfo.email}</Text>
                    </Flex>
                </Link>
                <Link href={`${contactInfo.linkedIn}`} target="_blank">
                    <Flex alignItems={'center'} gap={'2'}>
                        <LinkedinIcon />
                        <Text>LinkedIn</Text>
                    </Flex>
                </Link>
            </Flex>
        </Section>
    );
};
