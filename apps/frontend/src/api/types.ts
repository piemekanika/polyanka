export interface Api {
    [ name: string ]: (params?: any) => Promise<any>;
}

export interface ApiMethodParams {
    method: string;
    url: string;
}
