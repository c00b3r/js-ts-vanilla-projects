export interface RequestOptions {
    [key: string]: string;
}

export interface EndpointOption {
    endpoint: string;
    options?: RequestOptions;
}

export interface ISource {
    id: string | null;
    name: string;
}

export interface IDataNews {
    source: ISource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

export interface INews {
    status: string;
    totalResult: number;
    articles: IDataNews[];
}

export interface SourcesData {
    status: string;
    sources: ISources[];
}

interface ISources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
