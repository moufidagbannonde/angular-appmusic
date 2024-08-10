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