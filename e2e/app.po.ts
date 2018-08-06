import { browser, element, by, ElementArrayFinder, ElementFinder, $, $$ } from 'protractor';

export class TodoListPage {

  todosArray: ElementArrayFinder = $$('li todo-item');
  newTodoInput: ElementFinder = $('.todo-add todo-input input');
  newTodoSaveBtn: ElementFinder = $('.todo-add todo-input button');
  removeBtnsArray: ElementArrayFinder = this.todosArray.$$('.btn.btn-red');

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
