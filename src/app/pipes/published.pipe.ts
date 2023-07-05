import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'published'
})
export class PublishedPipe implements PipeTransform {

  transform(value: boolean): unknown {
    if(value===true){
      return "Yayın";
    } else {
      return "Arşiv"
    }
  }

}
