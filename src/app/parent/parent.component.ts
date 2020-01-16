import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public parentData;
  public count = 1;
  public status = 'parent';
  public childData;
  public childDataList = [];
  constructor() { }

  ngOnInit() { }

  goToChild() {
    this.status = 'child';
    this.parentData = {
      id: this.count++,
      value: this.count - 1
    };
    this.childData = '';
  }

  childDataMessage(event) {
    this.status = 'parent';
    if (event) {
      this.childDataList.push(event);
    }
  }

}
