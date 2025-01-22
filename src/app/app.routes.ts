import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        pathMatch : 'full',
        loadComponent: () => {
            return import('./home/home.component').then(m => m.HomeComponent);
        }
    },
    {
        path : 'git-repo',
        loadComponent: () => {
            return import('./git-repo/git-repo.component').then(m => m.GitRepoComponent);
        }
    },
    {
        path : 'reddit-client',
        loadComponent: () => {
            return import('./reddit-client/reddit-client.component').then(m => m.RedditClientComponent);
        }
    },
    {
        path : 'pomodoro-timer',
        loadComponent: () => {
            return import('./pomodoro-timer/pomodoro-timer.component').then(m => m.PomodoroTimerComponent);
        }
    }
];
