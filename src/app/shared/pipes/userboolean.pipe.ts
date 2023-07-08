import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userboolean'
})
export class UserbooleanPipe implements PipeTransform {

  transform(value: boolean): unknown {
    if(value===true){
      return "Aktif"
    } else{
      return "Pasif"
    }
  }
}
