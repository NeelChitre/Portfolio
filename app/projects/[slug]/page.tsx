import { Section, Text } from '@/app/components';
import { projectsData } from '@/app/data';
import { Flex } from '@/styled-system/jsx';
import { notFound } from 'next/navigation';
import { ProjectCarousel, ProjectInfo } from './sections';

export default async function ProjectTemplate({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const project = projectsData.find((project) => project.slug === slug);

    if (!project) {
        return notFound();
    }

    return (
        <Section variant="standard">
            <Flex
                direction={{ base: 'column', lg: 'row' }}
                w={'full'}
                h={'full'}
                py={'28'}
                gap={{ base: '28', lg: '8' }}
            >
                <ProjectCarousel images={project.pictures} />
                <ProjectInfo {...project} />
            </Flex>
        </Section>
    );
}
