import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditLaneComponent } from './subreddit-lane.component';

describe('SubredditLaneComponent', () => {
  let component: SubredditLaneComponent;
  let fixture: ComponentFixture<SubredditLaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubredditLaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubredditLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
