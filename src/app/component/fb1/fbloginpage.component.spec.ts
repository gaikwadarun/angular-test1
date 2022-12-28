import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbloginpageComponent } from './fbloginpage.component';

describe('FbloginpageComponent', () => {
  let component: FbloginpageComponent;
  let fixture: ComponentFixture<FbloginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbloginpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbloginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
