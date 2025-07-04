export interface CreateTodoRequest{
    title: string,
    description: string,
    priority: number
};

export interface TodoResponse {
    id: number,
    title: string,
    description: string,
    priority: number,
    completed: boolean,
    created_at: string,
    updated_at: string
}