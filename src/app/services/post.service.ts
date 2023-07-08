import { Injectable } from '@angular/core';
import { Post } from '../pages/post/models/post';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CommentService } from './comment.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [
    {
      postId: 1,
      userId: 2,
      categoryId: 5,
      title: 'vel augue',
      content:
        'turpis elementum ligula vehicula consequat morbi a ipsum integer a',
      viewCount: 35,
      creationDate: '09/13/2019',
      isPublished: true,
    },
    {
      postId: 2,
      userId: 3,
      categoryId: 4,
      title: 'ornare',
      content:
        'donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh',
      viewCount: 77,
      creationDate: '11/24/2019',
      isPublished: true,
    },
    {
      postId: 3,
      userId: 4,
      categoryId: 4,
      title: 'sem',
      content:
        'ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie',
      viewCount: 86,
      creationDate: '05/11/2018',
      isPublished: false,
    },
    {
      postId: 4,
      userId: 10,
      categoryId: 2,
      title: 'lacus curabitur',
      content:
        'nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut',
      viewCount: 52,
      creationDate: '04/04/2019',
      isPublished: false,
    },
    {
      postId: 5,
      userId: 1,
      categoryId: 1,
      title: 'non interdum in',
      content:
        'penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis d',
      viewCount: 86,
      creationDate: '10/05/2019',
      isPublished: false,
    },
    {
      postId: 6,
      userId: 7,
      categoryId: 1,
      title: 'odio consequat varius',
      content:
        'interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien',
      viewCount: 8,
      creationDate: '04/10/2019',
      isPublished: true,
    },
    {
      postId: 7,
      userId: 3,
      categoryId: 4,
      title: 'nulla elit ac',
      content:
        'proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis',
      viewCount: 76,
      creationDate: '04/01/2019',
      isPublished: false,
    },
    {
      postId: 8,
      userId: 7,
      categoryId: 3,
      title: 'odio in hac',
      content:
        'mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem',
      viewCount: 11,
      creationDate: '09/21/2018',
      isPublished: false,
    },
    {
      postId: 9,
      userId: 3,
      categoryId: 5,
      title: 'sed tincidunt',
      content:
        'in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut',
      viewCount: 61,
      creationDate: '12/21/2019',
      isPublished: true,
    },
    {
      postId: 10,
      userId: 8,
      categoryId: 1,
      title: 'dapibus dolor vel',
      content:
        'sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices',
      viewCount: 43,
      creationDate: '12/26/2019',
      isPublished: true,
    },
    {
      postId: 11,
      userId: 3,
      categoryId: 3,
      title: 'et ultrices posuere',
      content:
        'ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non',
      viewCount: 51,
      creationDate: '03/06/2019',
      isPublished: true,
    },
    {
      postId: 12,
      userId: 3,
      categoryId: 5,
      title: 'et',
      content:
        'aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst',
      viewCount: 52,
      creationDate: '07/28/2018',
      isPublished: false,
    },
    {
      postId: 13,
      userId: 4,
      categoryId: 1,
      title: 'orci',
      content:
        'nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis',
      viewCount: 92,
      creationDate: '06/14/2019',
      isPublished: false,
    },
    {
      postId: 14,
      userId: 3,
      categoryId: 4,
      title: 'ultrices',
      content:
        'pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus',
      viewCount: 83,
      creationDate: '05/08/2018',
      isPublished: false,
    },
    {
      postId: 15,
      userId: 6,
      categoryId: 5,
      title: 'ultrices mattis',
      content:
        'justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec',
      viewCount: 41,
      creationDate: '03/10/2019',
      isPublished: false,
    },
    {
      postId: 16,
      userId: 3,
      categoryId: 3,
      title: 'interdum venenatis',
      content:
        'turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in',
      viewCount: 59,
      creationDate: '08/01/2019',
      isPublished: false,
    },
    {
      postId: 17,
      userId: 3,
      categoryId: 4,
      title: 'iaculis',
      content:
        'consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum',
      viewCount: 53,
      creationDate: '11/09/2019',
      isPublished: true,
    },
    {
      postId: 18,
      userId: 8,
      categoryId: 3,
      title: 'odio odio elementum',
      content:
        'semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in',
      viewCount: 26,
      creationDate: '01/30/2018',
      isPublished: false,
    },
    {
      postId: 19,
      userId: 6,
      categoryId: 5,
      title: 'id sapien',
      content:
        'orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui',
      viewCount: 85,
      creationDate: '05/04/2018',
      isPublished: true,
    },
    {
      postId: 20,
      userId: 7,
      categoryId: 1,
      title: 'sit amet',
      content:
        'in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate',
      viewCount: 73,
      creationDate: '09/07/2019',
      isPublished: false,
    },
    {
      postId: 21,
      userId: 2,
      categoryId: 2,
      title: 'pretium iaculis justo',
      content:
        'maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat',
      viewCount: 93,
      creationDate: '07/31/2018',
      isPublished: true,
    },
    {
      postId: 22,
      userId: 3,
      categoryId: 4,
      title: 'mauris lacinia',
      content:
        'pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet',
      viewCount: 25,
      creationDate: '08/25/2019',
      isPublished: false,
    },
    {
      postId: 23,
      userId: 4,
      categoryId: 1,
      title: 'tortor',
      content:
        'duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero',
      viewCount: 5,
      creationDate: '07/26/2019',
      isPublished: false,
    },
    {
      postId: 24,
      userId: 6,
      categoryId: 4,
      title: 'nulla',
      content:
        'in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque',
      viewCount: 30,
      creationDate: '03/03/2019',
      isPublished: false,
    },
    {
      postId: 25,
      userId: 8,
      categoryId: 2,
      title: 'interdum mauris ullamcorper',
      content:
        'vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam',
      viewCount: 28,
      creationDate: '06/30/2019',
      isPublished: false,
    },
    {
      postId: 26,
      userId: 4,
      categoryId: 5,
      title: 'et',
      content:
        'erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt',
      viewCount: 85,
      creationDate: '06/12/2018',
      isPublished: true,
    },
    {
      postId: 27,
      userId: 9,
      categoryId: 4,
      title: 'sodales sed',
      content:
        'varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis',
      viewCount: 44,
      creationDate: '08/30/2019',
      isPublished: false,
    },
    {
      postId: 28,
      userId: 10,
      categoryId: 2,
      title: 'a suscipit',
      content:
        'dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit',
      viewCount: 14,
      creationDate: '08/11/2018',
      isPublished: false,
    },
    {
      postId: 29,
      userId: 10,
      categoryId: 2,
      title: 'leo',
      content:
        'nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est',
      viewCount: 76,
      creationDate: '08/26/2018',
      isPublished: false,
    },
    {
      postId: 30,
      userId: 2,
      categoryId: 5,
      title: 'egestas metus',
      content:
        'scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus',
      viewCount: 22,
      creationDate: '08/05/2019',
      isPublished: true,
    },
    {
      postId: 31,
      userId: 10,
      categoryId: 3,
      title: 'dapibus nulla suscipit',
      content:
        'morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu',
      viewCount: 23,
      creationDate: '11/18/2018',
      isPublished: true,
    },
    {
      postId: 32,
      userId: 2,
      categoryId: 1,
      title: 'fusce posuere',
      content:
        'non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et',
      viewCount: 75,
      creationDate: '01/23/2018',
      isPublished: false,
    },
    {
      postId: 33,
      userId: 1,
      categoryId: 4,
      title: 'non mi integer',
      content:
        'quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu',
      viewCount: 52,
      creationDate: '06/16/2019',
      isPublished: false,
    },
    {
      postId: 34,
      userId: 2,
      categoryId: 1,
      title: 'posuere felis sed',
      content:
        'turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla',
      viewCount: 11,
      creationDate: '06/12/2018',
      isPublished: false,
    },
    {
      postId: 35,
      userId: 1,
      categoryId: 2,
      title: 'luctus',
      content:
        'quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin',
      viewCount: 15,
      creationDate: '06/18/2018',
      isPublished: false,
    },
    {
      postId: 36,
      userId: 10,
      categoryId: 4,
      title: 'nec nisi',
      content:
        'cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam',
      viewCount: 21,
      creationDate: '08/03/2018',
      isPublished: false,
    },
    {
      postId: 37,
      userId: 7,
      categoryId: 5,
      title: 'lacinia aenean sit',
      content:
        'molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci',
      viewCount: 19,
      creationDate: '08/10/2019',
      isPublished: false,
    },
    {
      postId: 38,
      userId: 9,
      categoryId: 2,
      title: 'aliquam',
      content:
        'tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim',
      viewCount: 34,
      creationDate: '12/15/2019',
      isPublished: false,
    },
    {
      postId: 39,
      userId: 10,
      categoryId: 3,
      title: 'nonummy',
      content:
        'enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu',
      viewCount: 42,
      creationDate: '02/25/2019',
      isPublished: false,
    },
    {
      postId: 40,
      userId: 5,
      categoryId: 4,
      title: 'odio',
      content:
        'ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum',
      viewCount: 65,
      creationDate: '03/24/2019',
      isPublished: false,
    },
    {
      postId: 41,
      userId: 9,
      categoryId: 5,
      title: 'ornare',
      content:
        'turpis eget elit sodales scelerisque mauris sit amet eros suspendisse',
      viewCount: 52,
      creationDate: '01/20/2019',
      isPublished: false,
    },
    {
      postId: 42,
      userId: 1,
      categoryId: 5,
      title: 'id',
      content:
        'dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper',
      viewCount: 12,
      creationDate: '06/23/2019',
      isPublished: false,
    },
    {
      postId: 43,
      userId: 5,
      categoryId: 3,
      title: 'vel',
      content:
        'ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae',
      viewCount: 89,
      creationDate: '05/09/2019',
      isPublished: false,
    },
    {
      postId: 44,
      userId: 6,
      categoryId: 5,
      title: 'at',
      content:
        'enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices',
      viewCount: 25,
      creationDate: '01/10/2018',
      isPublished: false,
    },
    {
      postId: 45,
      userId: 6,
      categoryId: 2,
      title: 'luctus et',
      content:
        'diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed',
      viewCount: 23,
      creationDate: '11/17/2019',
      isPublished: true,
    },
    {
      postId: 46,
      userId: 7,
      categoryId: 5,
      title: 'tincidunt nulla',
      content:
        'ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis',
      viewCount: 87,
      creationDate: '09/19/2018',
      isPublished: false,
    },
    {
      postId: 47,
      userId: 8,
      categoryId: 4,
      title: 'maecenas tristique',
      content:
        'vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum',
      viewCount: 27,
      creationDate: '07/17/2018',
      isPublished: false,
    },
    {
      postId: 48,
      userId: 4,
      categoryId: 1,
      title: 'pede posuere',
      content:
        'venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris',
      viewCount: 18,
      creationDate: '08/30/2019',
      isPublished: true,
    },
    {
      postId: 49,
      userId: 1,
      categoryId: 3,
      title: 'erat',
      content:
        'in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae',
      viewCount: 27,
      creationDate: '09/24/2019',
      isPublished: true,
    },
    {
      postId: 50,
      userId: 6,
      categoryId: 1,
      title: 'nec',
      content:
        'accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat',
      viewCount: 55,
      creationDate: '09/30/2019',
      isPublished: true,
    },
  ];

  constructor(private router:Router, private commentService:CommentService) {}

  getIndex(id: number): number {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].postId === id) {
        return i;
      } 
    }
    return -1;
  }

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  deleteUser(id: number): void {
    let index = this.getIndex(id);

    if (this.commentService.calculateCommentNumber(id) === 0) {
      this.posts.splice(index, 1);
    } else {
      alert(
        'Gönderiye ait yorum bulunmaktadır, silme işlemi gerçekleştirilemez!'
      );
    }

  }

  getPostById(id: number) {
    let index = this.getIndex(id);
    return this.posts[index];
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  updatePost(postId:number, post:Post){
    let index = this.getIndex(postId);
    this.posts[index]=post;
    alert("Gönderi Güncellendi!")
    this.router.navigateByUrl("/post")
  }

  getTotalPostByCategoryId(categoryId: number) {
    let totalPost: number = 0;
    for (let post of this.posts) {
      if (post.categoryId === categoryId) {
        totalPost++;
      }
    }
    return totalPost;
  }

  anyPostByUserId(userId:number): boolean{
    for(let post of this.posts){
      if(post.userId===userId){
        return true;
      }
    }
    return false;
  }
}
