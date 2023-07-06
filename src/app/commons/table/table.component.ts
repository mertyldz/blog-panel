import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  @Input() titleList:string[]=[];
  @Input() gridList:any[]=[];
  @Input() notUser:boolean=true;
  @Output() onDetail = new EventEmitter<any>();
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  pageNumber:number=1;


  ngOnInit(): void {
      
  }

  edit(item:any){
    this.onEdit.emit(item);
  }

  detail(item:any){
    this.onDetail.emit(item)
  }

  delete(item:any){
    this.onDelete.emit(item);
  }

}
