import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandSimpleSelectComponent } from './sand-simple-select.component';

describe('SandSimpleSelectComponent', () => {
  let component: SandSimpleSelectComponent;
  let fixture: ComponentFixture<SandSimpleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandSimpleSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandSimpleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
