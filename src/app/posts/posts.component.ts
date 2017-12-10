import { Component, OnInit } from '@angular/core';

import {PostsService} from '../service/posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private service:PostsService) { 
     service.getPosts().subscribe((posts) => {
       this.posts = posts;
     })
  }

  ngOnInit() {
  }

}

interface Post{
  id: number,
  titile:string,
  body:string,
  userId:number
}