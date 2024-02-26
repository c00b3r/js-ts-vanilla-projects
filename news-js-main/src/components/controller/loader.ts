import { EndpointOption, INews, RequestOptions, SourcesData } from '../interfaces/interfaces';
import { CallbackFunction, HTTP_STATUS } from '../types/types';

class Loader {
    baseLink: string;
    options: { [key: string]: string };
    constructor(baseLink: string, options: { [key: string]: string }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: EndpointOption,
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === HTTP_STATUS.UNAUTHORIZED || HTTP_STATUS.NOT_FOUND)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: RequestOptions, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(
        method: string,
        endpoint: string,
        callback: CallbackFunction<SourcesData | INews>,
        options: RequestOptions = {}
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
