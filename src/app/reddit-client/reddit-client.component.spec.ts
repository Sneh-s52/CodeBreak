import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditClientComponent } from './reddit-client.component';

describe('RedditClientComponent', () => {
  let component: RedditClientComponent;
  let fixture: ComponentFixture<RedditClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedditClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
