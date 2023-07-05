import { Injectable } from '@angular/core';
import { User } from '../pages/user/user';
import { CommentService } from './comment.service';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userList: User[] = [
    {
      userId: 1,
      username: 'ltimby0',
      email: 'rhearson0@chron.com',
      creationDate: '11/08/2015',
      isActive: false,
    },
    {
      userId: 2,
      username: 'mmenhenitt1',
      email: 'stireman1@mozilla.org',
      creationDate: '02/08/2016',
      isActive: false,
    },
    {
      userId: 3,
      username: 'pmarlowe2',
      email: 'ccardero2@weibo.com',
      creationDate: '12/22/2015',
      isActive: false,
    },
    {
      userId: 4,
      username: 'asloam3',
      email: 'rgaggen3@cnn.com',
      creationDate: '05/22/2016',
      isActive: false,
    },
    {
      userId: 5,
      username: 'clattka4',
      email: 'lcometti4@yandex.ru',
      creationDate: '11/10/2015',
      isActive: true,
    },
    {
      userId: 6,
      username: 'kschustl5',
      email: 'ajiran5@tumblr.com',
      creationDate: '02/16/2016',
      isActive: false,
    },
    {
      userId: 7,
      username: 'ekem6',
      email: 'wgirk6@plala.or.jp',
      creationDate: '09/03/2015',
      isActive: true,
    },
    {
      userId: 8,
      username: 'atumility7',
      email: 'gcooksley7@sitemeter.com',
      creationDate: '08/23/2015',
      isActive: false,
    },
    {
      userId: 9,
      username: 'wwillerson8',
      email: 'hstaintonskinn8@fema.gov',
      creationDate: '01/09/2016',
      isActive: false,
    },
    {
      userId: 10,
      username: 'wrider9',
      email: 'fhardware9@i2i.jp',
      creationDate: '02/13/2016',
      isActive: false,
    },
  ];

  constructor(private postService:PostService, private commentService:CommentService) {}

  getIndex(id: number): number {
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].userId === id) {
        return i;
      }
    }
    return -1;
  }

  getUserList(): User[] {
    return this.userList;
  }

  deleteUser(id: number): void {
    if (this.getLength() === 1) {
      alert('Tek kullanıcı kaldığı için silme işlemi gerçekleştirilemez!');
    } else if(this.postService.anyPostByUserId(id)){
      alert('Kullanıcıya ait gönderi bulunduğu için silme işlemi gerçekleştirilemez!')
    } else if(this.commentService.anyCommentByUserId(id)){
      alert('Kullanıcıya ait yorum bulunduğu için silme işlemi gerçekleştirilemez!')
    } else {
      let index = this.getIndex(id);
      this.userList.splice(index, 1);
    }
  }

  addUser(user: User): void {
    this.userList.push(user);
  }

  updateUser(id: number, username: string, email: string) {
    let index = this.getIndex(id);
    this.userList[index].username = username;
    this.userList[index].email = email;
  }

  getLength(): number {
    return this.userList.length;
  }

  getUsernameById(id:number){
    let index = this.getIndex(id);
    return this.userList[index].username;
  }

  getIdOfLastUser(){
    return this.userList[this.userList.length-1].userId;
  }
}
