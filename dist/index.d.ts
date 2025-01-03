export declare class URLShortener {
    private apiUrl;
    constructor(apiUrl?: string);
    shorten(url: string): Promise<string>;
}
