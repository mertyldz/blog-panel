import { Injectable } from '@angular/core';
import { Comment } from '../pages/comment/models/comment';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  comments: Comment[] = [
    {
      commentId: 1,
      postId: 38,
      userId: 3,
      comment:
        'vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in',
      creationDate: '8/19/2022',
      isConfirmed: false,
    },
    {
      commentId: 2,
      postId: 44,
      userId: 9,
      comment:
        'et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet',
      creationDate: '3/25/2023',
      isConfirmed: false,
    },
    {
      commentId: 3,
      postId: 9,
      userId: 1,
      comment:
        'lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer',
      creationDate: '2/28/2023',
      isConfirmed: true,
    },
    {
      commentId: 4,
      postId: 42,
      userId: 5,
      comment:
        'pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus',
      creationDate: '10/15/2022',
      isConfirmed: true,
    },
    {
      commentId: 5,
      postId: 37,
      userId: 8,
      comment: 'proin at turpis a pede posuere nonummy integer non velit donec',
      creationDate: '3/15/2023',
      isConfirmed: true,
    },
    {
      commentId: 6,
      postId: 46,
      userId: 4,
      comment:
        'dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes',
      creationDate: '5/2/2023',
      isConfirmed: true,
    },
    {
      commentId: 7,
      postId: 12,
      userId: 3,
      comment:
        'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet',
      creationDate: '7/20/2022',
      isConfirmed: false,
    },
    {
      commentId: 8,
      postId: 40,
      userId: 6,
      comment:
        'pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque',
      creationDate: '2/9/2023',
      isConfirmed: false,
    },
    {
      commentId: 9,
      postId: 22,
      userId: 1,
      comment:
        'sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula',
      creationDate: '4/11/2023',
      isConfirmed: false,
    },
    {
      commentId: 10,
      postId: 48,
      userId: 5,
      comment:
        'quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in',
      creationDate: '10/6/2022',
      isConfirmed: false,
    },
    {
      commentId: 11,
      postId: 8,
      userId: 10,
      comment:
        'ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque',
      creationDate: '8/4/2022',
      isConfirmed: true,
    },
    {
      commentId: 12,
      postId: 36,
      userId: 5,
      comment:
        'volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac',
      creationDate: '7/11/2022',
      isConfirmed: false,
    },
    {
      commentId: 13,
      postId: 13,
      userId: 2,
      comment:
        'blandit nam nulla integer pede justo lacinia eget tincidunt eget',
      creationDate: '3/25/2023',
      isConfirmed: true,
    },
    {
      commentId: 14,
      postId: 29,
      userId: 9,
      comment:
        'eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien',
      creationDate: '11/14/2022',
      isConfirmed: false,
    },
    {
      commentId: 15,
      postId: 36,
      userId: 3,
      comment:
        'vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient',
      creationDate: '1/20/2023',
      isConfirmed: false,
    },
    {
      commentId: 16,
      postId: 41,
      userId: 7,
      comment:
        'in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo',
      creationDate: '5/12/2023',
      isConfirmed: true,
    },
    {
      commentId: 17,
      postId: 5,
      userId: 4,
      comment:
        'et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien',
      creationDate: '5/19/2023',
      isConfirmed: false,
    },
    {
      commentId: 18,
      postId: 49,
      userId: 9,
      comment:
        'in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl',
      creationDate: '12/31/2022',
      isConfirmed: true,
    },
    {
      commentId: 19,
      postId: 49,
      userId: 9,
      comment:
        'sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique',
      creationDate: '2/20/2023',
      isConfirmed: false,
    },
    {
      commentId: 20,
      postId: 9,
      userId: 2,
      comment:
        'et tempus semper est quam pharetra magna ac consequat metus sapien',
      creationDate: '11/15/2022',
      isConfirmed: false,
    },
    {
      commentId: 21,
      postId: 21,
      userId: 1,
      comment:
        'tristique in tempus sit amet sem fusce consequat nulla nisl nunc',
      creationDate: '10/18/2022',
      isConfirmed: false,
    },
    {
      commentId: 22,
      postId: 48,
      userId: 8,
      comment: 'lorem quisque ut erat curabitur gravida nisi at nibh in',
      creationDate: '11/19/2022',
      isConfirmed: true,
    },
    {
      commentId: 23,
      postId: 16,
      userId: 2,
      comment:
        'ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue',
      creationDate: '3/23/2023',
      isConfirmed: false,
    },
    {
      commentId: 24,
      postId: 14,
      userId: 3,
      comment:
        'placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros',
      creationDate: '3/4/2023',
      isConfirmed: false,
    },
    {
      commentId: 25,
      postId: 26,
      userId: 8,
      comment:
        'pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien',
      creationDate: '12/1/2022',
      isConfirmed: false,
    },
    {
      commentId: 26,
      postId: 20,
      userId: 2,
      comment:
        'ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas',
      creationDate: '11/19/2022',
      isConfirmed: false,
    },
    {
      commentId: 27,
      postId: 39,
      userId: 5,
      comment:
        'tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec',
      creationDate: '11/15/2022',
      isConfirmed: true,
    },
    {
      commentId: 28,
      postId: 27,
      userId: 8,
      comment:
        'quis libero nullam sit amet turpis elementum ligula vehicula consequat',
      creationDate: '7/31/2022',
      isConfirmed: false,
    },
    {
      commentId: 29,
      postId: 50,
      userId: 4,
      comment:
        'congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat',
      creationDate: '12/12/2022',
      isConfirmed: false,
    },
    {
      commentId: 30,
      postId: 39,
      userId: 9,
      comment:
        'sit amet consectetuer adipiscing elit proin interdum mauris non ligula',
      creationDate: '3/3/2023',
      isConfirmed: false,
    },
    {
      commentId: 31,
      postId: 12,
      userId: 10,
      comment:
        'ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat',
      creationDate: '3/5/2023',
      isConfirmed: false,
    },
    {
      commentId: 32,
      postId: 29,
      userId: 3,
      comment:
        'pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in',
      creationDate: '5/30/2023',
      isConfirmed: true,
    },
    {
      commentId: 33,
      postId: 6,
      userId: 10,
      comment:
        'posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum',
      creationDate: '10/29/2022',
      isConfirmed: true,
    },
    {
      commentId: 34,
      postId: 32,
      userId: 10,
      comment:
        'elit proin interdum mauris non ligula pellentesque ultrices phasellus id',
      creationDate: '9/14/2022',
      isConfirmed: false,
    },
    {
      commentId: 35,
      postId: 40,
      userId: 4,
      comment:
        'eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl',
      creationDate: '2/13/2023',
      isConfirmed: true,
    },
    {
      commentId: 36,
      postId: 33,
      userId: 1,
      comment:
        'suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris',
      creationDate: '1/16/2023',
      isConfirmed: true,
    },
    {
      commentId: 37,
      postId: 18,
      userId: 2,
      comment:
        'neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
      creationDate: '4/3/2023',
      isConfirmed: true,
    },
    {
      commentId: 38,
      postId: 12,
      userId: 6,
      comment:
        'placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan',
      creationDate: '5/29/2023',
      isConfirmed: true,
    },
    {
      commentId: 39,
      postId: 6,
      userId: 10,
      comment: 'sapien sapien non mi integer ac neque duis bibendum morbi',
      creationDate: '3/1/2023',
      isConfirmed: false,
    },
    {
      commentId: 40,
      postId: 19,
      userId: 3,
      comment:
        'ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
      creationDate: '10/17/2022',
      isConfirmed: true,
    },
    {
      commentId: 41,
      postId: 12,
      userId: 5,
      comment:
        'justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo',
      creationDate: '11/11/2022',
      isConfirmed: false,
    },
    {
      commentId: 42,
      postId: 40,
      userId: 8,
      comment:
        'nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo',
      creationDate: '1/5/2023',
      isConfirmed: true,
    },
    {
      commentId: 43,
      postId: 40,
      userId: 10,
      comment:
        'cras in purus eu magna vulputate luctus cum sociis natoque penatibus et',
      creationDate: '4/7/2023',
      isConfirmed: false,
    },
    {
      commentId: 44,
      postId: 8,
      userId: 8,
      comment:
        'viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat',
      creationDate: '4/25/2023',
      isConfirmed: true,
    },
    {
      commentId: 45,
      postId: 30,
      userId: 10,
      comment:
        'nulla suspendisse potenti cras in purus eu magna vulputate luctus cum',
      creationDate: '3/5/2023',
      isConfirmed: true,
    },
    {
      commentId: 46,
      postId: 17,
      userId: 7,
      comment:
        'morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit',
      creationDate: '5/28/2023',
      isConfirmed: false,
    },
    {
      commentId: 47,
      postId: 26,
      userId: 8,
      comment:
        'interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis',
      creationDate: '12/7/2022',
      isConfirmed: false,
    },
    {
      commentId: 48,
      postId: 41,
      userId: 2,
      comment:
        'porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam',
      creationDate: '4/17/2023',
      isConfirmed: true,
    },
    {
      commentId: 49,
      postId: 36,
      userId: 3,
      comment:
        'eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt',
      creationDate: '7/13/2022',
      isConfirmed: false,
    },
    {
      commentId: 50,
      postId: 18,
      userId: 4,
      comment:
        'sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus',
      creationDate: '8/2/2022',
      isConfirmed: false,
    },
    {
      commentId: 51,
      postId: 34,
      userId: 1,
      comment:
        'ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue',
      creationDate: '5/9/2023',
      isConfirmed: true,
    },
    {
      commentId: 52,
      postId: 22,
      userId: 6,
      comment:
        'pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus',
      creationDate: '10/5/2022',
      isConfirmed: true,
    },
    {
      commentId: 53,
      postId: 3,
      userId: 1,
      comment:
        'montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id',
      creationDate: '8/20/2022',
      isConfirmed: false,
    },
    {
      commentId: 54,
      postId: 47,
      userId: 4,
      comment: 'suspendisse potenti in eleifend quam a odio in hac habitasse',
      creationDate: '6/11/2023',
      isConfirmed: true,
    },
    {
      commentId: 55,
      postId: 3,
      userId: 2,
      comment:
        'faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel',
      creationDate: '8/19/2022',
      isConfirmed: true,
    },
    {
      commentId: 56,
      postId: 22,
      userId: 2,
      comment:
        'luctus nec molestie sed justo pellentesque viverra pede ac diam cras',
      creationDate: '10/18/2022',
      isConfirmed: false,
    },
    {
      commentId: 57,
      postId: 14,
      userId: 3,
      comment:
        'pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh',
      creationDate: '5/30/2023',
      isConfirmed: false,
    },
    {
      commentId: 58,
      postId: 46,
      userId: 1,
      comment:
        'rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat',
      creationDate: '12/26/2022',
      isConfirmed: true,
    },
    {
      commentId: 59,
      postId: 36,
      userId: 3,
      comment:
        'habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel',
      creationDate: '3/22/2023',
      isConfirmed: false,
    },
    {
      commentId: 60,
      postId: 44,
      userId: 2,
      comment:
        'felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec',
      creationDate: '2/10/2023',
      isConfirmed: true,
    },
    {
      commentId: 61,
      postId: 49,
      userId: 10,
      comment:
        'orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis',
      creationDate: '4/18/2023',
      isConfirmed: false,
    },
    {
      commentId: 62,
      postId: 33,
      userId: 1,
      comment:
        'curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi',
      creationDate: '1/15/2023',
      isConfirmed: true,
    },
    {
      commentId: 63,
      postId: 50,
      userId: 9,
      comment:
        'lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci',
      creationDate: '9/26/2022',
      isConfirmed: false,
    },
    {
      commentId: 64,
      postId: 11,
      userId: 4,
      comment:
        'lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam',
      creationDate: '12/16/2022',
      isConfirmed: true,
    },
    {
      commentId: 65,
      postId: 28,
      userId: 9,
      comment:
        'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis',
      creationDate: '4/27/2023',
      isConfirmed: false,
    },
    {
      commentId: 66,
      postId: 10,
      userId: 8,
      comment:
        'rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa',
      creationDate: '7/7/2022',
      isConfirmed: false,
    },
    {
      commentId: 67,
      postId: 40,
      userId: 8,
      comment:
        'ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat',
      creationDate: '4/16/2023',
      isConfirmed: false,
    },
    {
      commentId: 68,
      postId: 10,
      userId: 9,
      comment:
        'nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis',
      creationDate: '12/7/2022',
      isConfirmed: true,
    },
    {
      commentId: 69,
      postId: 49,
      userId: 6,
      comment:
        'et ultrices posuere cubilia curae mauris viverra diam vitae quam',
      creationDate: '10/7/2022',
      isConfirmed: false,
    },
    {
      commentId: 70,
      postId: 24,
      userId: 5,
      comment: 'amet justo morbi ut odio cras mi pede malesuada in',
      creationDate: '4/3/2023',
      isConfirmed: false,
    },
    {
      commentId: 71,
      postId: 15,
      userId: 4,
      comment:
        'varius integer ac leo pellentesque ultrices mattis odio donec vitae',
      creationDate: '2/7/2023',
      isConfirmed: false,
    },
    {
      commentId: 72,
      postId: 46,
      userId: 1,
      comment:
        'nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper',
      creationDate: '11/16/2022',
      isConfirmed: true,
    },
    {
      commentId: 73,
      postId: 18,
      userId: 6,
      comment:
        'morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi',
      creationDate: '11/15/2022',
      isConfirmed: true,
    },
    {
      commentId: 74,
      postId: 27,
      userId: 5,
      comment:
        'vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
      creationDate: '9/27/2022',
      isConfirmed: false,
    },
    {
      commentId: 75,
      postId: 17,
      userId: 9,
      comment: 'augue a suscipit nulla elit ac nulla sed vel enim',
      creationDate: '9/2/2022',
      isConfirmed: false,
    },
    {
      commentId: 76,
      postId: 43,
      userId: 5,
      comment:
        'mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum',
      creationDate: '10/17/2022',
      isConfirmed: false,
    },
    {
      commentId: 77,
      postId: 25,
      userId: 10,
      comment:
        'facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros',
      creationDate: '7/4/2022',
      isConfirmed: true,
    },
    {
      commentId: 78,
      postId: 18,
      userId: 2,
      comment:
        'elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus',
      creationDate: '3/10/2023',
      isConfirmed: true,
    },
    {
      commentId: 79,
      postId: 47,
      userId: 7,
      comment:
        'ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in',
      creationDate: '5/6/2023',
      isConfirmed: true,
    },
    {
      commentId: 80,
      postId: 10,
      userId: 4,
      comment:
        'orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula',
      creationDate: '9/19/2022',
      isConfirmed: true,
    },
    {
      commentId: 81,
      postId: 10,
      userId: 9,
      comment:
        'praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent',
      creationDate: '9/30/2022',
      isConfirmed: false,
    },
    {
      commentId: 82,
      postId: 30,
      userId: 5,
      comment:
        'id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet',
      creationDate: '1/23/2023',
      isConfirmed: true,
    },
    {
      commentId: 83,
      postId: 11,
      userId: 7,
      comment:
        'nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper',
      creationDate: '8/2/2022',
      isConfirmed: true,
    },
    {
      commentId: 84,
      postId: 28,
      userId: 5,
      comment:
        'ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
      creationDate: '8/10/2022',
      isConfirmed: true,
    },
    {
      commentId: 85,
      postId: 17,
      userId: 6,
      comment:
        'aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie',
      creationDate: '2/25/2023',
      isConfirmed: false,
    },
    {
      commentId: 86,
      postId: 4,
      userId: 4,
      comment:
        'molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum',
      creationDate: '11/5/2022',
      isConfirmed: false,
    },
    {
      commentId: 87,
      postId: 23,
      userId: 2,
      comment:
        'ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam',
      creationDate: '2/13/2023',
      isConfirmed: true,
    },
    {
      commentId: 88,
      postId: 41,
      userId: 4,
      comment:
        'eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo',
      creationDate: '4/28/2023',
      isConfirmed: false,
    },
    {
      commentId: 89,
      postId: 35,
      userId: 3,
      comment:
        'luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapi',
      creationDate: '7/27/2022',
      isConfirmed: false,
    },
    {
      commentId: 90,
      postId: 1,
      userId: 3,
      comment:
        'aliquet massa id lobortis convallis tortor risus dapibus augue vel',
      creationDate: '6/19/2023',
      isConfirmed: false,
    },
    {
      commentId: 91,
      postId: 17,
      userId: 5,
      comment:
        'dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla',
      creationDate: '4/3/2023',
      isConfirmed: false,
    },
    {
      commentId: 92,
      postId: 42,
      userId: 5,
      comment:
        'turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices',
      creationDate: '2/17/2023',
      isConfirmed: true,
    },
    {
      commentId: 93,
      postId: 42,
      userId: 7,
      comment:
        'lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra',
      creationDate: '2/8/2023',
      isConfirmed: false,
    },
    {
      commentId: 94,
      postId: 4,
      userId: 5,
      comment:
        'nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum',
      creationDate: '11/7/2022',
      isConfirmed: false,
    },
    {
      commentId: 95,
      postId: 40,
      userId: 4,
      comment:
        'quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id',
      creationDate: '12/7/2022',
      isConfirmed: true,
    },
    {
      commentId: 96,
      postId: 25,
      userId: 4,
      comment:
        'egestas metus aenean fermentum donec ut mauris eget massa tempor convallis',
      creationDate: '9/9/2022',
      isConfirmed: false,
    },
    {
      commentId: 97,
      postId: 17,
      userId: 9,
      comment:
        'condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse',
      creationDate: '11/5/2022',
      isConfirmed: false,
    },
    {
      commentId: 98,
      postId: 12,
      userId: 7,
      comment:
        'vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque',
      creationDate: '5/22/2023',
      isConfirmed: true,
    },
    {
      commentId: 99,
      postId: 41,
      userId: 7,
      comment:
        'elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper',
      creationDate: '5/15/2023',
      isConfirmed: true,
    },
    {
      commentId: 100,
      postId: 11,
      userId: 3,
      comment:
        'pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam',
      creationDate: '1/3/2023',
      isConfirmed: true,
    },
  ];

  public detailComment: Comment = {
    commentId: 0,
    postId: 0,
    userId: 0,
    comment: '',
    creationDate: '',
    isConfirmed: false,
  };
  
  constructor(private router: Router) {}

  getComments(): Observable<Comment[]> {
    return of(this.comments);
  }
  getIndex(id: number): number {
    for (let i = 0; i < this.comments.length; i++) {
      if (this.comments[i].commentId === id) {
        return i;
      }
    }
    return -1;
  }

  getCommentById(id: number) {
    let index = this.getIndex(id);
    return this.comments[index];
  }

  removeComment(id: number) {
    let index = this.getIndex(id);
    this.comments.splice(index, 1);
  }

  filterCommentsByPostId(id: number) {
    return this.comments.filter((x) => x.postId === id);
  }

  calculateCommentNumber(postId: number): number {
    let counter: number = 0;
    for (let comment of this.comments) {
      if (comment.postId === postId) {
        counter++;
      }
    }
    return counter;
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
    alert('Yorum başarıyla eklendi!');
    this.router.navigateByUrl('/comment');
  }

  updateComment(selectedId: number, comment: Comment) {
    let index = this.getIndex(selectedId);
    this.comments[index] = comment;
    alert('Yorum güncellendi!');
    this.router.navigateByUrl('/comment');
  }

  anyCommentByUserId(userId: number): boolean {
    for (let comment of this.comments) {
      if (comment.userId === userId) {
        return true;
      }
    }
    return false;
  }

  getLastId() {
    return this.comments[this.comments.length - 1].commentId;
  }
}
