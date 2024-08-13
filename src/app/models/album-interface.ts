export interface AlbumInterface {
    title: string;
    artist: string;
    releaseDate: string;
    link: string;
    genre: string;
    label: string;
    trackCount: number;
    duration: string;
    tags: string[];
    coverImage: string;
    description: string;
}
export class AlbumClass {
    constructor(
        public id: string,
        public title: string, 
        public artist: string,
        public link: string,
        public releaseDate: string,
        public genre:string,
        public label: string,
        public trackCount: number,
        public duration: string,
        public tags?: string[],
        public tracks ?: any[],
        public coverImage ?: any,
        public description ?: string,
    ) { }
}
export interface AlbumList {
    id:string,
    list:string[]
}