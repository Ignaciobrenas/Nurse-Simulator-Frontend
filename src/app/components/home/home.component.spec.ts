import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home.component';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the hospital logo image and all 3 module links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logo = compiled.querySelector('img.brand-logo') as HTMLImageElement | null;
    expect(logo).not.toBeNull();
    expect(logo?.getAttribute('src')).toBe('nurse-logo.png');

    const links = Array.from(compiled.querySelectorAll('a.module-card')).map((el) =>
      el.getAttribute('href'),
    );
    expect(links).toEqual(['/login', '/nurse-list', '/nurse-search']);
  });

  it('should update the visible shift and schedule note on click', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const switchButton = compiled.querySelector('button.shift-cycle-btn') as HTMLButtonElement;

    expect(compiled.querySelector('[data-testid="shift-value"]')?.textContent).toContain(
      'Morning Shift',
    );
    expect(compiled.querySelector('[data-testid="shift-note"]')?.textContent).toContain(
      '07:00 – 15:00',
    );

    switchButton.click();
    await fixture.whenStable();

    expect(compiled.querySelector('[data-testid="shift-value"]')?.textContent).toContain(
      'Afternoon Shift',
    );
    expect(compiled.querySelector('[data-testid="shift-note"]')?.textContent).toContain(
      '15:00 – 23:00',
    );

    const nightButton = Array.from(compiled.querySelectorAll('button.shift-tab')).find((btn) =>
      btn.textContent?.includes('Night'),
    ) as HTMLButtonElement;
    nightButton.click();
    await fixture.whenStable();

    expect(compiled.querySelector('[data-testid="shift-value"]')?.textContent).toContain(
      'Night Shift',
    );
    expect(compiled.querySelector('[data-testid="shift-note"]')?.textContent).toContain(
      '23:00 – 07:00',
    );
  });
});
