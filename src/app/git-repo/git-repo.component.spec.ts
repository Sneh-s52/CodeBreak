import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitRepoComponent } from './git-repo.component';

describe('GitRepoComponent', () => {
  let component: GitRepoComponent;
  let fixture: ComponentFixture<GitRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitRepoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
