'use client';

import { IProject } from '@/app/utils';
import { InfoIcon, PlayIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { css } from 'styled-system/css';
import { Box, Flex } from 'styled-system/jsx';
import { Button, Text } from '../ui';

export interface ProjectCardProps extends Partial<IProject> {}

export const ProjectCard: FC<ProjectCardProps> = ({ thumbnail, playableLink, name, slug }) => {
    return (
        <Flex
            gap={'8'}
            alignItems={'center'}
            direction={'column'}
            w={'full'}
            maxW={'md'}
            h={'md'}
            p={{ base: '4', md: '8' }}
            border={'gray'}
            borderStyle={'solid'}
            borderWidth={'thin'}
            borderRadius={'3xl'}
            _hover={{
                backgroundColor: 'white.a1'
            }}
        >
            <Link href={`/projects/${slug}`} className={linkStyles}>
                <Box w={'full'} flexGrow={1}>
                    <Image
                        src={thumbnail ?? '/placeholder-image.jpg'}
                        alt="project-thumbnail"
                        className={imageStyles}
                        width={400}
                        height={400}
                    />
                </Box>
                <Text textAlign={'center'}>{name}</Text>
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

const linkStyles = css({
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    gap: '4'
});

const imageStyles = css({
    h: 'full',
    maxH: '64',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: 'xl'
});
