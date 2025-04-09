import { css } from 'styled-system/css';
import { Container, Flex, FlexProps } from 'styled-system/jsx';
import { FC } from 'react';
import { HeaderLinks } from '../header/header-links';
import { Text } from '../ui';

export interface FooterProps extends FlexProps {}

export const Footer: FC<FooterProps> = (props) => {
    return (
        <Flex alignItems={'center'} w={'full'} my={'8'} gap={'10'} {...props}>
            <Container>
                <Flex alignItems={'center'} direction={'column'} gap={'10'} {...props}>
                    <HeaderLinks gap={'4'} />
                    <Text as={'p'} textAlign={'center'} textStyle={'body'}>
                        Copyright &copy; 2025 Neel Chitre. All Rights Reserved.
                    </Text>
                </Flex>
            </Container>
        </Flex>
    );
};
