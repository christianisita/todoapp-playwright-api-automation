import {test as base} from '@playwright/test';
import { TodoAPI } from '../src/api/todos';

type Fixtures = {
    todoApi: TodoAPI
}

export const test = base.extend<Fixtures>({
    todoApi: async ({baseURL}, use) => {
        const todoApi = new TodoAPI(baseURL!);
        await todoApi.init();
        await use(todoApi);
        await todoApi.close();
    }
})