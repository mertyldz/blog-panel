import { Pipe, PipeTransform } from '@angular/core';
import { Comment } from '../../pages/comment/models/comment';

@Pipe({
  name: 'commentfilter'
})
export class CommentFilterPipe implements PipeTransform {

  transform(value: Comment[], filterText: string):Comment[] {
    filterText = filterText.toLocaleLowerCase();

    return filterText?value.filter((c:Comment)=>
    String(c.postId).toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
