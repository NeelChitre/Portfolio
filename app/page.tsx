import { About, Contact, Experience, Intro, Projects } from './sections/landing';

export default function Home() {
    return (
        <>
            <Intro />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </>
    );
}
