import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { ButtonComponent } from './button/button.component';
import { DetailButtonComponent } from './detail-button/detail-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { TableComponent } from './table/table.component';
import { CommentconfirmPipe } from './pipes/commentconfirm.pipe';
import { CommentFilterPipe } from './pipes/commentfilter.pipe';
import { GeneralHeaderPipe } from './pipes/general-header.pipe';
import { PublishedPipe } from './pipes/published.pipe';
import { UserbooleanPipe } from './pipes/userboolean.pipe';
import { UsernamePipe } from './pipes/username.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AsideComponent,
    ButtonComponent,
    DeleteButtonComponent,
    DetailButtonComponent,
    EditButtonComponent,
    TableComponent,
    CommentconfirmPipe,
    CommentFilterPipe,
    GeneralHeaderPipe,
    PublishedPipe,
    UserbooleanPipe,
    UsernamePipe
  ],
  imports: [CommonModule, NgxPaginationModule,AppRoutingModule
  ],
  exports:[
    NgxPaginationModule,
    AsideComponent,
    ButtonComponent,
    DeleteButtonComponent,
    DetailButtonComponent,
    EditButtonComponent,
    TableComponent,
    CommentconfirmPipe,
    CommentFilterPipe,
    GeneralHeaderPipe,
    PublishedPipe,
    UserbooleanPipe,
    UsernamePipe
  ]
})
export class SharedModule {}
