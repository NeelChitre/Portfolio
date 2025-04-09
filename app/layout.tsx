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
    title: 'Neel Chitre',
    description: 'Portfolio Website'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${poppins.variable}`}>
            <body>
                <Header />
                <Container>{children}</Container>
                <Footer />
            </body>
        </html>
    );
}
