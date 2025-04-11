export interface IProject {
    name: string;
    description?: string[] | string;
    video?: string;
    slug: string;
    githubLink: string;
    playableLink?: string;
    thumbnail: string;
    pictures: string[];
}
