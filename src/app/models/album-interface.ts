export interface AlbumInterface {
    title: string;
    artist: string;
    releaseDate: string;
    genre: string;
    label: string;
    trackCount: number;
    duration: string;
    tags: string[];
    tracks: {
        trackNumber: number;
        title: string;
        duration: string;
    }[];
    coverImage: string;
    description: string;
}
export class AlbumClass {
    constructor(
        public id: string,
        public ref: string,
        public name: string,
        public title: string,
        public description: string,
        public duration: number,
        public status: string,
        public url?: string,
        public tags?: string[],
        public like?: string,
    ) { }
}