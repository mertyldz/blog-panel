import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentconfirm'
})
export class CommentconfirmPipe implements PipeTransform {

  transform(value: boolean): unknown {
    if(value===true){
      return "Onaylandı";
    } else {
      return "Onaylanmadı"
    }
  }

}
