import Link from 'next/link';
import { FC } from 'react';

export interface HeaderLogoProps {}

export const HeaderLogo: FC<HeaderLogoProps> = () => {
    return <Link href="/#intro">Neel Chitre</Link>;
};
