import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAberturaComponent } from './menu-abertura.component';

describe('MenuAberturaComponent', () => {
  let component: MenuAberturaComponent;
  let fixture: ComponentFixture<MenuAberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAberturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
