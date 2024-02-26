export interface RequestOptions {
    [key: string]: string;
}

export interface EndpointOption {
    endpoint: string;
    options?: RequestOptions;
}
