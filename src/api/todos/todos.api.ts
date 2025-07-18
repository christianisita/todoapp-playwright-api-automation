import { APIRequestContext } from "@playwright/test";
import { ApiClient } from "../../utils/ApiClient";
import { createTodoRequestPayload } from "./todos.payload";

export class TodoApi extends ApiClient {
  readonly request: ApiClient;

  constructor(request: APIRequestContext, baseUrl: string) {
    super(request, baseUrl);
  }

  async createTodo(payload, options?) {
    let data = createTodoRequestPayload(payload);
    let path = "/create";

    options = {
      ...options,
      data: data,
    };

    return this.post(path, options);
  }
}
