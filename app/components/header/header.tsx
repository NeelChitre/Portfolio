import { FC } from 'react';
import { css } from 'styled-system/css';
import { Container, Flex, FlexProps } from 'styled-system/jsx';
import { HeaderLogo } from './logo';
import { HeaderLinks } from './header-links';

export interface HeaderProps extends FlexProps {}

export const Header: FC<HeaderProps> = (props) => {
    return (
        <Flex className={headerStyles} {...props}>
            <Container className={headerContainerStyles}>
                <HeaderLogo />
                <HeaderLinks />
            </Container>
        </Flex>
    );
};

const headerStyles = css({
    position: 'fixed',
    top: 0,
    width: 'full',
    zIndex: 'sticky'
});

const headerContainerStyles = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    h: '20',
    w: 'full'
});
