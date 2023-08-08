import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  constructor() {}
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  ngOnInit(): void {
    
  }
}
