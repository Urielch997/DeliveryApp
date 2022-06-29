export interface useRequestInterface{
        code:    string;
        message: string;
        result<T extends Object>():T;
}