import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'published'
})
export class PublishedPipe implements PipeTransform {

  transform(value: boolean | undefined): unknown {
    if(value===true){
      return "Yayında";
    } else {
      return "Arşiv"
    }
  }

}
