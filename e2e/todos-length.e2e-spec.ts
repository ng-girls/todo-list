import { TodoListPage } from './app.po';

describe('Todo list ', () => {
  let page: TodoListPage;

  beforeEach(() => {
    page = new TodoListPage();
  });

  it('contain 6 todo, initially loads', () => {
    page.navigateTo();
    expect(page.todosArray.count()).toBe(6);
  });
});
