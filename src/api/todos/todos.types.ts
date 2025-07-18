export type Data = {
    id: number,
    title: string,
    description: string,
    priority: number,
    completed: boolean,
    created_at: string,
    updated_at: string
}

export type TodoResponseBody = {
    success: boolean,
    message: string,
    data?: Data
}

export type TodoRequestBody = {
    title?: string,
    priority?: number,
    description?: string
}