import { Section } from '@/app/components';
import { projectsData } from '@/app/data';
import { notFound } from 'next/navigation';

export default async function ProjectTemplate({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const project = projectsData.find((project) => project.slug === slug);

    if (!project) {
        return notFound();
    }

    return <Section variant="standard">{project.name}</Section>;
}
