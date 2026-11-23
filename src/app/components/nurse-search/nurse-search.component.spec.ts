import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NurseSearch } from './nurse-search.component';

describe('NurseSearch', () => {
  let component: NurseSearch;
  let fixture: ComponentFixture<NurseSearch>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseSearch],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NurseSearch);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  const resultCards = () => compiled.querySelectorAll('article.result-card');
  const summary = () => compiled.querySelector('[data-testid="results-summary"]')?.textContent;

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo, search icon and links back to home', () => {
    const logo = compiled.querySelector('img.brand-logo');
    expect(logo?.getAttribute('src')).toBe('nurse-logo.png');
    expect(compiled.querySelector('svg.search-icon')).not.toBeNull();
    expect(compiled.querySelectorAll('a[href="/home"]').length).toBeGreaterThanOrEqual(1);
  });

  it('should show 3 simulated results for the default search', () => {
    const input = compiled.querySelector('[data-testid="search-input"]') as HTMLInputElement;
    expect(input.value).toBe('An');
    expect(resultCards().length).toBe(3);
    expect(summary()).toContain('3 results');

    const names = Array.from(resultCards()).map((card) => card.querySelector('h3')?.textContent);
    expect(names).toEqual(['Ana', 'Antonio Garcia', 'Manuel Garcia']);
  });

  it('should search by typed name when submitting the form', async () => {
    const input = compiled.querySelector('[data-testid="search-input"]') as HTMLInputElement;
    input.value = 'lucia';
    input.dispatchEvent(new Event('input'));
    (compiled.querySelector('[data-testid="search-btn"]') as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(resultCards().length).toBe(1);
    expect(resultCards()[0].textContent).toContain('Lucia');
    expect(summary()).toContain('1 result');

    const luciaChip = compiled.querySelector('[data-testid="suggestion-lucia"]');
    expect(luciaChip?.classList).toContain('suggestion-chip--active');
  });

  it('should restore the 3 sample results from the no-results state', async () => {
    (compiled.querySelector('[data-testid="suggestion-pablo"]') as HTMLButtonElement).click();
    await fixture.whenStable();
    (compiled.querySelector('[data-testid="no-results"] button') as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(resultCards().length).toBe(3);
  });

  it('should update visible results when clicking a quick search chip', async () => {
    (compiled.querySelector('[data-testid="suggestion-garcia"]') as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(resultCards().length).toBe(7);
    expect(summary()).toContain('"Garcia"');
  });

  it('should show the no-results state for an unknown name', async () => {
    (compiled.querySelector('[data-testid="suggestion-pablo"]') as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(resultCards().length).toBe(0);
    expect(compiled.querySelector('[data-testid="no-results"]')).not.toBeNull();
  });

  it('should show the empty state after clearing the search', async () => {
    (compiled.querySelector('[data-testid="clear-btn"]') as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(resultCards().length).toBe(0);
    expect(compiled.querySelector('[data-testid="empty-query"]')).not.toBeNull();
  });

  it('should toggle nurse details when clicking a result card', async () => {
    const card = compiled.querySelector('[data-testid="result-card-1"]') as HTMLElement;
    card.click();
    await fixture.whenStable();

    const details = compiled.querySelector('[data-testid="result-details"]');
    expect(details?.textContent).toContain('ana@hospital.com');

    card.click();
    await fixture.whenStable();
    expect(compiled.querySelector('[data-testid="result-details"]')).toBeNull();
  });
});
