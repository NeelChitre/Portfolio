'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';
import { Button, Text } from '../ui';
import { GithubIcon, InfoIcon, PlayIcon } from 'lucide-react';
import { IProject } from '@/app/utils';

export interface ProjectCardProps extends Partial<IProject> {}

export const ProjectCard: FC<ProjectCardProps> = ({ thumbnail, playableLink, name, slug }) => {
    return (
        <Flex
            alignItems={'center'}
            direction={'column'}
            w={'full'}
            maxW={'md'}
            p={{ base: '4', md: '8' }}
            border={'gray'}
            borderStyle={'solid'}
            borderWidth={'thin'}
            borderRadius={'3xl'}
            _hover={{
                backgroundColor: 'white.a1'
            }}
        >
            <Link href={`/projects/${slug}`}>
                <Image
                    src={thumbnail ?? '/placeholder-image.jpg'}
                    alt="project-thumbnail"
                    className={imageStyles}
                    width={400}
                    height={400}
                />
                <Text textAlign={'center'} my={'8'}>
                    {name}
                </Text>
            </Link>
            <Flex my={'1'} gap={'8'} alignItems={'center'}>
                {playableLink && (
                    <Link href={playableLink}>
                        <Button variant={'solid'} size={'lg'}>
                            <Flex gap={'2'} alignItems={'center'}>
                                <PlayIcon />
                                Demo
                            </Flex>
                        </Button>
                    </Link>
                )}
                <Link href={`/projects/${slug}`}>
                    <Button variant={'outline'} size={'lg'}>
                        <InfoIcon />
                        Info
                    </Button>
                </Link>
            </Flex>
        </Flex>
    );
};

const imageStyles = css({
    flexGrow: 1,
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: 'xl'
});
