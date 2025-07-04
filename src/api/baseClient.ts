import {APIRequestContext, request} from '@playwright/test';

export class BaseClient {
    private baseURL: string;
    private context: APIRequestContext | null = null;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    async init(){
        this.context = await request.newContext({
            baseURL : this.baseURL,
            extraHTTPHeaders: {
                'Content-Type': 'application/json'
            }
        });
        return this;
    };

    protected async get(path: string, headers: Record<string, string> = {}) {
        if(!this.context) await this.init();
        console.log(`Sending GET request on endpoint: ${path}`);

        const res = await this.context!.get(path, {
            headers: headers,
        });

        return res;
    };

    protected async post(path: string, data: any, headers: Record<string, string> = {}){
        if(!this.context) await this.init();
        console.log(`Sending POST request on endpoint: ${path}`);

        const res = await this.context!.post(path, {
            data: data,
            headers: headers,
        })

        return res;
    };

    protected async put(path: string, data: any, headers: Record<string, string> = {}){
        if(!this.context) await this.init();
        console.log(`Sending PUT request on endpoint: ${path}`);

        const res = await this.context!.put(path, {
            data: data, 
            headers: headers,
        });

        return res;
    };

    protected async patch(path: string, headers: Record<string, string> = {}){
        if(!this.context) await this.init();
        console.log(`Sending PATCH request on endpoint: ${path}`);

        const res = await this.context!.patch(path, {
            headers: headers,
        })

        return res;
    };

    protected async delete(path: string, headers: Record<string, string> = {}){
        if(!this.context) await this.init();
        console.log(`Sending DELETE request on endpoint: ${path}`);

        const res = await this.context!.delete(path, {
            headers: headers,
        })

        return res;
    };

    async close() {
        if (this.context){
            await this.context.dispose();
            this.context = null;
        }
    }
}