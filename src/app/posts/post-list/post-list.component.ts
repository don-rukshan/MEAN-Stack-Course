import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  posts = [
    { title: 'First Post', content: "This is th first post's content" },
    { title: 'Second Post', content: "This is th Second post's content" },
    { title: 'Third Post', content: "This is th Third post's content" },
  ];
}
