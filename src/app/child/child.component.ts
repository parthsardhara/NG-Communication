import { Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() parentData: string;
  @Output() childData = new EventEmitter();
  public parentDataList = [];
  public count = 1;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.parentData) {
      this.parentDataList.push(this.parentData);
    }
  }

  goToParent() {
    const childData = {
      id: this.count++,
      value: this.count - 1
    };
    this.childData.emit(childData);
  }
}
