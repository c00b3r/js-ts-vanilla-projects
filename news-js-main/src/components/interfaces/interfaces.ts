export interface RequestOptions {
    [key: string]: string;
}

export interface EndpointOption {
    endpoint: string;
    options?: RequestOptions;
}

export interface Source {
    id: string | null;
    name: string;
}

export interface DataNews {
    source: Source;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

export interface INews {
    status: string;
    totalResult: number;
    articles: DataNews[];
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
