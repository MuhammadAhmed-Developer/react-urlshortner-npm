import axios from "axios";

export class URLShortener {
    private apiUrl: string;

    constructor(apiUrl: string = "https://shorturl.hexgen.online/api/rl") {
        this.apiUrl = apiUrl;
    }

    async shorten(url: string): Promise<string> {
        if (!url) {
            throw new Error("URL is required.");
        }

        const urlRegex = /^(https?:\/\/)?([\w\d\-]+\.)+\w{2,}(\/.*)?$/;

        if (!urlRegex.test(url)) {
            throw new Error("Please enter a valid URL.");
        }

        try {
            const response:any = await axios.post(this.apiUrl, { original_url: url });
            if (response.data && response.data.short_url) {
                return response.data.short_url;
            } else {
                throw new Error(response.data.error || "Failed to shorten the URL.");
            }
        } catch (error: any) {
            throw new Error(error.response?.data?.error || error.message);
        }
    }
}
