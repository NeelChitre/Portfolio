import { EmblaCarousel } from '@/app/components';
import { Flex } from '@/styled-system/jsx';
import { FC } from 'react';

export interface ProjectCarouselProps {
    images: string[];
}

export const ProjectCarousel: FC<ProjectCarouselProps> = ({ images }) => {
    return (
        <Flex w={'full'} h={'md'} minH={'lg'}>
            <EmblaCarousel slides={images} options={{ loop: true }} />
        </Flex>
    );
};
