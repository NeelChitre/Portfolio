import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Container } from 'styled-system/jsx';
import { Footer, Header } from './components';
import './index.css';

const poppins = Poppins({
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Neel Chitre | Game Developer',
    description:
        'Portfolio website of Neel Chitre, a passionate game developer with experience in Unity, Unreal Engine.',
    metadataBase: new URL('https://neelchitre.vercel.app'),
    openGraph: {
        title: 'Neel Chitre | Game Developer',
        description:
            'Explore the portfolio of Neel Chitre, a skilled game developer specializing in creating immersive experiences with Unity and Unreal Engine.',
        url: 'https://neelchitre.vercel.app',
        siteName: 'Neel Chitre Portfolio',
        images: [
            {
                url: 'https://neelchitre.vercel.app/og_image.png',
                width: 800,
                height: 800,
                alt: 'Neel Chitre Profile Image'
            }
        ],
        type: 'website'
    },
    keywords: [
        'Neel Chitre',
        'Game Developer',
        'Unity',
        'Unreal Engine',
        'Indie Games',
        'Game Design'
    ],
    robots: {
        index: true,
        follow: true
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${poppins.variable}`}>
            <body className="dark">
                <Header />
                <Container>{children}</Container>
                <Footer />
            </body>
        </html>
    );
}
