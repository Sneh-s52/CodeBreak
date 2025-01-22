import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubredditLaneComponent } from '../subreddit-lane/subreddit-lane.component';

@Component({
  selector: 'app-reddit-client',
  standalone: true,
  imports: [FormsModule, CommonModule, SubredditLaneComponent],
  templateUrl: './reddit-client.component.html',
  styleUrls: ['./reddit-client.component.scss']
})
export class RedditClientComponent implements OnInit {
  newSubreddit = '';
  subreddits: string[] = [];

  ngOnInit(): void {
    const saved = localStorage.getItem('subreddits');
    if (saved) {
      this.subreddits = JSON.parse(saved);
    }
  }

  addLane(): void {
    if (this.newSubreddit.trim()) {
      this.subreddits.push(this.newSubreddit.trim());
      this.newSubreddit = '';
      localStorage.setItem('subreddits', JSON.stringify(this.subreddits));
    }
  }

  deleteLane(subreddit: string): void {
    this.subreddits = this.subreddits.filter(s => s !== subreddit);
  }
}