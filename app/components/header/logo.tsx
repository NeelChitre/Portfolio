import Link, { LinkProps } from 'next/link';
import { FC } from 'react';
import { Text } from '../ui';

export interface HeaderLogoProps extends LinkProps {}

export const HeaderLogo: FC<HeaderLogoProps> = (props) => {
    return (
        <Link {...props}>
            <Text textStyle={'logo'}>Neel Chitre</Text>
        </Link>
    );
};
