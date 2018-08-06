import { TodoListPage } from './app.po';

describe('Todo list ', () => {
  let page: TodoListPage;

  beforeEach(() => {
    page = new TodoListPage();
  });

  it('add a new todo in the list', () => {
    const newTodoTitle = 'TODO added from e2e';
    page.navigateTo();
    page.newTodoInput.sendKeys(newTodoTitle);
    page.newTodoSaveBtn.click();
    expect(page.todosArray.last().getText()).toContain(newTodoTitle);
  });

  afterEach(() => {
    page.removeBtnsArray.last().click();
  });
});
