import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public lista  = [
    { titulo: 'Tit1', id: 1, descripcion: 'Lorem ipsum dolor'},
    { titulo: 'Tit2', id: 2, descripcion: 'Lorem ipsum dolor'},
    { titulo: 'Tit3', id: 3, descripcion: 'Lorem ipsum dolor'},
    { titulo: 'Tit4', id: 4, descripcion: 'Lorem ipsum dolor'},
    { titulo: 'Tit5', id: 5, descripcion: 'Lorem ipsum dolor'},
    { titulo: 'Tit6', id: 6, descripcion: 'Lorem ipsum dolor'},
  ]

  constructor() {}

}
