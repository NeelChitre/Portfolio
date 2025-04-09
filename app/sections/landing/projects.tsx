import { ProjectCard, Section, Text } from '@/app/components';
import { Flex, Grid } from 'styled-system/jsx';
import { FC } from 'react';
import { projectsData } from '@/app/data';

export interface ProjectsProps {}

export const Projects: FC<ProjectsProps> = () => {
    return (
        <Section id="projects" variant="standard">
            <Flex direction={'column'} alignItems={'center'} gap={'2'}>
                <Text as={'h3'} textStyle={'body'}>
                    Browse my recent
                </Text>
                <Text as={'h1'} textStyle={'title'}>
                    Projects
                </Text>
            </Flex>

            <Grid
                gridTemplateColumns={{
                    base: 'repeat(auto-fill, minmax(220px, 1fr))',
                    sm: 'repeat(auto-fill, minmax(400px, 1fr))'
                }}
                alignContent={'center'}
                justifyItems={'center'}
                gridGap={'6'}
                width={'full'}
                maxW={'full'}
                alignItems={'start'}
                mx={'auto'}
                my={'12'}
            >
                {projectsData.map((project, index) => (
                    <ProjectCard
                        name={project.name}
                        slug={project.slug}
                        githubRepoLink={project.githubLink}
                        playableLink={project.playableLink}
                        thumbnail={project.thumbnail}
                        key={`${project.slug}_${index}`}
                    />
                ))}
            </Grid>
        </Section>
    );
};
