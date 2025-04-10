import { css } from 'styled-system/css';
import { FC } from 'react';
import { Flex, FlexProps } from 'styled-system/jsx';
import Link from 'next/link';

export interface HeaderLinksProps extends FlexProps {}

export const HeaderLinks: FC<HeaderLinksProps> = (props) => {
    return (
        <Flex className={headerLinksStyles} {...props}>
            <Link href={'/#about'}>About</Link>
            <Link href={'/#experience'}>Experience</Link>
            <Link href={'/#projects'}>Projects</Link>
            <Link href={'/#contact'}>Contact</Link>
        </Flex>
    );
};

const headerLinksStyles = css({
    gap: '8'
});
