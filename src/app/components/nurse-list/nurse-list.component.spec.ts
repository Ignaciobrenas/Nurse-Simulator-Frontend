import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NurseList } from './nurse-list.component';

describe('NurseList', () => {
  let component: NurseList;
  let fixture: ComponentFixture<NurseList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseList],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NurseList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the hospital logo image, title, and return to home link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logo = compiled.querySelector('img.brand-logo') as HTMLImageElement | null;
    expect(logo).not.toBeNull();
    expect(logo?.getAttribute('src')).toBe('nurse-logo.png');

    const backLinks = Array.from(compiled.querySelectorAll('a[href="/home"]'));
    expect(backLinks.length).toBeGreaterThanOrEqual(1);

    const title = compiled.querySelector('h1')?.textContent;
    expect(title).toContain('Nurse Simulator');
  });

  it('should render the nurse list illustration banner image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const nurseListImg = compiled.querySelector(
      'img[data-testid="nurse-list-banner-image"]',
    ) as HTMLImageElement | null;
    expect(nurseListImg).not.toBeNull();
    expect(nurseListImg?.getAttribute('src')).toBe('nurse-list.png');
    expect(nurseListImg?.getAttribute('alt')).toContain('Directory');
  });

  it('should render the sample list of registered nurses', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('article.nurse-card');
    expect(cards.length).toBe(10);

    const firstCardText = cards[0].textContent;
    expect(firstCardText).toContain('Ana');
    expect(firstCardText).toContain('ana@hospital.com');
  });

  it('should filter nurses and update visible count when clicking shift filter tabs', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const morningTab = compiled.querySelector(
      '[data-testid="filter-morning"]',
    ) as HTMLButtonElement;
    expect(morningTab).not.toBeNull();

    morningTab.click();
    await fixture.whenStable();

    const title = compiled.querySelector('[data-testid="active-filter-title"]')?.textContent;
    expect(title).toContain('Morning Shift Nurses');

    const cards = compiled.querySelectorAll('article.nurse-card');
    // Ana (1), Lucia (3), Antonio Garcia (6), Laura Garcia (8) are Morning
    expect(cards.length).toBe(4);

    const cycleButton = compiled.querySelector(
      '[data-testid="cycle-filter-btn"]',
    ) as HTMLButtonElement;
    cycleButton.click();
    await fixture.whenStable();

    const cycledTitle = compiled.querySelector('[data-testid="active-filter-title"]')?.textContent;
    expect(cycledTitle).toContain('Afternoon Shift Nurses');
  });

  it('should update inspected nurse details when clicking a nurse card', async () => {
    const compiled = fixture.nativeElement as HTMLElement;

    // Initially Ana (ID 1) is selected
    expect(compiled.querySelector('[data-testid="selected-nurse-name"]')?.textContent).toContain(
      'Ana',
    );
    expect(compiled.querySelector('[data-testid="selected-nurse-email"]')?.textContent).toContain(
      'ana@hospital.com',
    );

    // Click Carlos (ID 2)
    const carlosCard = compiled.querySelector('[data-testid="nurse-card-2"]') as HTMLElement;
    expect(carlosCard).not.toBeNull();
    carlosCard.click();
    await fixture.whenStable();

    expect(compiled.querySelector('[data-testid="selected-nurse-name"]')?.textContent).toContain(
      'Carlos',
    );
    expect(compiled.querySelector('[data-testid="selected-nurse-email"]')?.textContent).toContain(
      'carlos@hospital.com',
    );

    // Close detail panel
    const closeBtn = compiled.querySelector('.close-detail-btn') as HTMLButtonElement;
    closeBtn.click();
    await fixture.whenStable();

    expect(compiled.querySelector('[data-testid="nurse-detail-panel"]')).toBeNull();
    expect(compiled.querySelector('[data-testid="nurse-placeholder"]')).not.toBeNull();
  });
});
