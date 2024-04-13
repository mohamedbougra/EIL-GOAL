import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablematchComponent } from './tablematch.component';

describe('TablematchComponent', () => {
  let component: TablematchComponent;
  let fixture: ComponentFixture<TablematchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablematchComponent]
    });
    fixture = TestBed.createComponent(TablematchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
