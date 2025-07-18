import { APIRequestContext } from "@playwright/test";

export class ApiClient {

  constructor(
    private readonly context: APIRequestContext,
    private readonly baseURL: string
  ) {}

  private headersBuilder(additional_headers?: Record<string, string>){
    let headers = {'Content-Type': 'application/json'};
    return {
        ...headers,
        ...additional_headers
    }
  }

  protected async get(path: string, additional_args?) {
    const url = `${this.baseURL}${path}`
    console.log(`Sending GET request on endpoint: ${url}`);

    let args = {...additional_args};
    args["headers"] = this.headersBuilder(additional_args?.headers);

    const res = await this.context.get(url, args);

    return res;
  }

  protected async post(path: string, additional_args?) {
    const url = `${this.baseURL}${path}`
    console.log(`Sending POST request on endpoint: ${url}`);

    let args = {...additional_args};
    args["headers"] = this.headersBuilder(additional_args?.headers);

    const res = await this.context.post(url, args);

    return res;
  }

  protected async put(path: string, additional_args?) {
    const url = `${this.baseURL}${path}`
    console.log(`Sending PUT request on endpoint: ${url}`);

    let args = {...additional_args};
    args["headers"] = this.headersBuilder(additional_args?.headers);

    const res = await this.context.put(url, args);

    return res;
  }

  protected async patch(path: string, additional_args?) {
    const url = `${this.baseURL}${path}`
    console.log(`Sending PATCH request on endpoint: ${url}`);

    let args = {...additional_args};
    args["headers"] = this.headersBuilder(additional_args?.headers);

    const res = await this.context.patch(url, args);

    return res;
  }

  protected async delete(path: string, additional_args?) {
    const url = `${this.baseURL}${path}`
    console.log(`Sending DELETE request on endpoint: ${url}`);

    let args = {...additional_args};
    args["headers"] = this.headersBuilder(additional_args?.headers);

    const res = await this.context.delete(url, args);

    return res;
  }
  
  async close() {
    if (this.context) {
      await this.context.dispose();
    }
  }
}
