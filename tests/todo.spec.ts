import { test } from "../fixtures/apiClient.fixture";

test("test create todo", async ({ todoApi }) => {
  const payload = {
    title: "test playwright",
    priority: 1,
    description: "testing from playwright",
  };
  const response = await todoApi.createTodo(payload);
  const resBody = await response.json();
  console.log(resBody);
});
