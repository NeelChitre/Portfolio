import Link from 'next/link';
import { FC } from 'react';
import { Text } from '../ui';

export interface HeaderLogoProps {}

export const HeaderLogo: FC<HeaderLogoProps> = () => {
    return (
        <Link href="/#intro">
            <Text textStyle={'logo'}>Neel Chitre</Text>
        </Link>
    );
};
