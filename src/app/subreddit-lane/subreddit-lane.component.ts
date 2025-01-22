import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RedditService } from '../services/reddit.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-subreddit-lane',
  templateUrl: './subreddit-lane.component.html',
  styleUrls: ['./subreddit-lane.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class SubredditLaneComponent implements OnInit {
  @Input() subreddit!: string;
  @Output() delete = new EventEmitter<void>();

  posts: any[] = [];
  loading = false;
  error = '';

  constructor(private redditService: RedditService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.loading = true;
    this.error = '';
    this.redditService.fetchSubreddit(this.subreddit).subscribe(
      (response: any) => {
        this.posts = response.data.children.map((child: any) => child.data);
        this.loading = false;
      },
      () => {
        this.error = 'Failed to fetch data. Please try again.';
        this.loading = false;
      }
    );
  }

  deleteLane(): void {
    this.delete.emit();
  }
}