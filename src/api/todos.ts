import { CreateTodoRequest } from "../models/todoModel";
import { BaseClient } from "./baseClient";

export class TodoAPI extends BaseClient{
    constructor(baseURL: string){
        super(baseURL);
    }
    
    async getTodos() {
        return this.get('/todos');
    }

    async getTodo(id: number){
        return this.get(`/todos/${id}`);
    }

    async createTodo(requestPayload: CreateTodoRequest){
        return this.post('/todos/create', requestPayload);
    }

    async updateTodo(id: number, requestPayload: CreateTodoRequest){
        return this.put(`/todos/${id}`, requestPayload);
    }

    async updateStatusTodo(id: number){
        return this.patch(`/todos/${id}`);
    }

    async deleteTodo(id: number){
        return this.delete(`/todos/${id}`);
    }
}