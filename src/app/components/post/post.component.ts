import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post/post-service.service';
import { Observable } from 'rxjs';
import { Post } from '../../dtos/post-dto';
import { AsyncPipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ChangeDetectionStrategy, } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [AsyncPipe, MatListModule, MatCardModule, MatChipsModule, MatProgressBarModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {

  postService = inject(PostService);

  posts!: Observable<Post[]>;

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.posts = this.postService.getAllPosts();
  }

}
