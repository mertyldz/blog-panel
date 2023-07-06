import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generalHeader',
})
export class GeneralHeaderPipe implements PipeTransform {
  transform(value: any): unknown {
    switch (value) {
      case 'userId':
        return 'User ID';
        break;
      case 'username':
        return 'Kullanıcı Adı';
        break;
      case 'email':
        return 'E-mail';
        break;
      case 'creationDate':
        return 'Tarih';
        break;
      case 'title':
        return 'Başlık';
        break;
      case 'viewCount':
        return 'Görüntülenme';
        break;
      case 'postId':
        return 'Post ID';
        break;
      case 'categoryId':
        return 'Category ID';
        break;
      case 'name':
        return 'Ad';
        break;
      case 'commentId':
        return 'Comment Id';
        break;
      case 'comment':
        return 'Yorum';
        break;
      case 'isConfirmed':
        return 'Onay';
        break;




      default:
        return value;
        break;
    }
  }
}
