import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `  
    <input class="todo-input"
           #inputElem 
           [value]="title"
           placeholder="Add something to do..."
           (keyup.enter)="changeTitle($event.target.value)" 
           (keyup.esc)="$event.target.blur()">
         
    <button class="btn" (click)="changeTitle(inputElem.value)">
      Save
    </button>   
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() title:string = '';
  @Output() submit:EventEmitter<string> = new EventEmitter();
  @Output() cancel:EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  changeTitle(newTitle:string):void {
    this.submit.emit(newTitle);
  }

  cancelEdit(inputElem) {
    inputElem.value = this.title || inputElem.value;
    this.cancel.emit();
  }

}
