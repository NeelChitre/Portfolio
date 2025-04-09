'use client';
import { MenuIcon, XIcon } from 'lucide-react';
import { FC, useState } from 'react';
import { css } from 'styled-system/css';
import { Box, BoxProps, Container, Flex, FlexProps } from 'styled-system/jsx';
import { HeaderLinks } from './header-links';
import { HeaderLogo } from './logo';

export interface HeaderProps extends FlexProps {}

export const Header: FC<HeaderProps> = (props) => {
    const [menuState, setMenuState] = useState<boolean>(false);

    return (
        <>
            <Flex className={headerStyles} {...props}>
                <Container className={headerContainerStyles}>
                    <HeaderLogo href="/#intro" onClick={() => setMenuState(false)} />
                    <HeaderLinks display={{ base: 'none', md: 'flex' }} />
                    {menuState ? (
                        <XIcon className={menuIconStyles} onClick={() => setMenuState(false)} />
                    ) : (
                        <MenuIcon className={menuIconStyles} onClick={() => setMenuState(true)} />
                    )}
                </Container>
            </Flex>
            <HamburgerMenu
                data-state={menuState ? 'open' : 'closed'}
                onClick={() => setMenuState(false)}
            />
        </>
    );
};

export interface HamburgerMenuProps extends BoxProps {}

export const HamburgerMenu: FC<HamburgerMenuProps> = (props) => {
    return (
        <Box className={hamburgerMenuStyles} {...props}>
            <HeaderLinks direction={'column'} gap={'4'} alignItems={'flex-end'} p={'6'} />
        </Box>
    );
};

const headerStyles = css({
    position: 'fixed',
    top: 0,
    width: 'full',
    zIndex: 'sticky',
    backdropFilter: 'auto',
    backdropBlur: 'sm'
});

const menuIconStyles = css({
    cursor: 'pointer',
    display: { md: 'none' }
});

const headerContainerStyles = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    h: '20',
    w: 'full'
});

const hamburgerMenuStyles = css({
    backdropFilter: 'auto',
    backdropBlur: 'sm',
    h: 'screen',
    w: 'screen',
    position: 'fixed',
    top: 20,
    left: 0,
    transition: 'all 0.5s ease-in-out',
    transform: 'translateY(-120%)',
    zIndex: 'dropdown',
    '&[data-state=open]': {
        transform: 'translateY(0)'
    }
});
