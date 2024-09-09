export interface Image {
    name: string;
    src: string | ArrayBuffer;
}

export interface ImageResponse {
    id: number,
    file: string,
}

export interface ImageRequestPost {
    file: File,
}

export interface ImageResponsePutDTO {
    id: number | null,
    name: string,
    type: string,
    size: number,
    url: string,
    file: File
}