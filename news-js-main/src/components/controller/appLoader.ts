import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const apiUrl: string | undefined = process.env.API_URL;
        const apiKeyUser: string | undefined = process.env.API_KEY;

        if (!apiUrl || !apiKeyUser) {
            throw new Error('API_URL or API_KEY is not defined in the environment');
        }

        super(apiUrl, {
            apiKey: apiKeyUser,
        });
    }
}

export default AppLoader;
