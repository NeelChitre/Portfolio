import { Button, Text } from '@/app/components';
import { IProject } from '@/app/utils';
import { Flex } from '@/styled-system/jsx';
import { GithubIcon, PlayIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

export interface ProjectInfoProps extends Partial<IProject> {}

export const ProjectInfo: FC<ProjectInfoProps> = ({
    name,
    githubLink,
    description,
    playableLink
}) => {
    return (
        <Flex direction={'column'} w={'full'} h={'full'}>
            <Text textStyle={'title'} mb={'8'}>
                {name}
            </Text>
            {typeof description === 'string' ? (
                <Text as={'p'}>{description}</Text>
            ) : (
                <Flex direction={'column'} gap={'4'}>
                    {description?.map((d, i) => (
                        <Text as={'p'} key={i}>
                            {d}
                        </Text>
                    ))}
                </Flex>
            )}

            <Flex my={'8'} gap={'8'} alignItems={'center'}>
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
                <Link href={githubLink || ''}>
                    <Button variant={'outline'} size={'lg'}>
                        <GithubIcon />
                        Github
                    </Button>
                </Link>
            </Flex>
        </Flex>
    );
};
