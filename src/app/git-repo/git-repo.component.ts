import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import LanguageData from '../../../public/assets/LanguageData.json'

@Component({
  selector: 'app-git-repo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './git-repo.component.html',
  styleUrls: ['./git-repo.component.scss'], 
})
export class GitRepoComponent {
  Alllanguages: { title: string; value: string }[] = [];
  languages: string[] = [];
  selectedLanguage: string = '';
  repository: any = null;
  error: string = '';
  state: 'idle' | 'Loading...' | 'error' | 'success' = 'idle';

  constructor(private http: HttpClient) {
    this.Alllanguages = LanguageData;
    this.languages = this.Alllanguages.map((lang) => lang.value);
  } 

  fetchRandomRepo(): void {
    if (!this.selectedLanguage) {
      this.error = 'Please select a programming language!';
      this.state = 'error';
      return;
    }
    this.state = 'Loading...';
    this.error = ''; // Clear previous error if any

    this.http
      .get(`https://api.github.com/search/repositories?q=language:${this.selectedLanguage}&sort=stars`)
      .subscribe(
        (response: any) => {
          const repos = response.items;
          if (repos && repos.length > 0) {
            const randomIndex = Math.floor(Math.random() * repos.length);
            this.repository = {
              name: repos[randomIndex].name,
              description: repos[randomIndex].description,
              stars: repos[randomIndex].stargazers_count,
              forks: repos[randomIndex].forks,
              openIssues: repos[randomIndex].open_issues,
            };
            this.state = 'success';
          } else {
            this.error = 'No repositories found for the selected language.';
            this.state = 'error';
          }
        },
        (error: any) => {
          console.error(error); // Log the error for debugging
          this.error = 'Failed to fetch repositories. Please try again later.';
          this.state = 'error';
        }
      );
  }

  formatDescription(description: string): string {
    if (!description) return '';
    // Regular expression to find URLs in the text
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    // Replace URLs with anchor tags
    return description.replace(
      urlRegex,
      (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
    );
  }
}
