import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pomodoro-timer',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './pomodoro-timer.component.html',
  styleUrl: './pomodoro-timer.component.scss'
})

export class PomodoroTimerComponent {
    mode: 'focus' | 'shortBreak' | 'longBreak' = 'focus';
    isRunning = false;
    timeLeft = 1500; // Default to 25 minutes
    timer: any;
  
    increments = [25, 10, 5, 1]; // Increment options in minutes
  
    get minutes(): string {
      return Math.floor(this.timeLeft / 60).toString();
    }
  
    get seconds(): string {
      return (this.timeLeft % 60).toString().padStart(2, '0');
    }
  
    setMode(mode: 'focus' | 'shortBreak' | 'longBreak'): void {
      this.mode = mode;
      this.resetTimer();
    }
  
    resetTimer(): void {
      this.isRunning = false;
      clearInterval(this.timer);
  
      if (this.mode === 'focus') {
        this.timeLeft = 1500; // 25 minutes
      } else if (this.mode === 'shortBreak') {
        this.timeLeft = 300; // 5 minutes
      } else if (this.mode === 'longBreak') {
        this.timeLeft = 900; // 15 minutes
      }
    }
  
    toggleTimer(): void {
      if (this.isRunning) {
        clearInterval(this.timer);
      } else {
        this.timer = setInterval(() => {
          if (this.timeLeft > 0) {
            this.timeLeft--;
          } else {
            clearInterval(this.timer);
            alert('Time is up!');
          }
        }, 1000);
      }
      this.isRunning = !this.isRunning;
    }
  
    adjustTimer(minutes: number): void {
      this.timeLeft += minutes * 60;
    }
}

