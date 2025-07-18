import { TodoRequestBody } from "./todos.types";

export function createTodoRequestPayload(payload: Partial<TodoRequestBody>): TodoRequestBody{
    return {
        title: payload?.title,
        priority: payload?.priority,
        description: payload?.description
    }
}