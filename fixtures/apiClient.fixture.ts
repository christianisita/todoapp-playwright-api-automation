import { test as base } from "@playwright/test";
import { TodoApi } from "../src/api/todos/todos.api";

type Fixtures = {
  todoApi: TodoApi;
};

export const test = base.extend<Fixtures>({
  todoApi: async ({ baseURL, request }, use) => {
    if (!baseURL) {
      throw new Error("baseURL is not provided");
    }
    const todoApi = new TodoApi(request, baseURL);
    await use(todoApi);
    await todoApi.close();
  },
});
