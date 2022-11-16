import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurrosListComponent } from './churros-list.component';

describe('ChurrosListComponent', () => {
  let component: ChurrosListComponent;
  let fixture: ComponentFixture<ChurrosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurrosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurrosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
