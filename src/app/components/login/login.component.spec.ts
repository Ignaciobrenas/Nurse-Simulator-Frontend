import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Login } from './login.component';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let compiled: HTMLElement;

  const query = <T extends Element>(selector: string) => compiled.querySelector(selector) as T;

  const typeInto = (name: string, value: string) => {
    const input = query<HTMLInputElement>(`input[name="${name}"]`);
    input.value = value;
    input.dispatchEvent(new Event('input'));
  };

  const submitForm = async () => {
    query<HTMLButtonElement>('button[type="submit"]').click();
    await fixture.whenStable();
  };

  const clickRole = async (label: string) => {
    const tab = Array.from(compiled.querySelectorAll('button.role-tab')).find((btn) =>
      btn.textContent?.includes(label),
    ) as HTMLButtonElement;
    tab.click();
    await fixture.whenStable();
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo image and a link back to Home', () => {
    expect(query<HTMLImageElement>('img.brand-logo').getAttribute('src')).toBe('nurse-logo.png');
    expect(query('[data-testid="back-home"]').getAttribute('href')).toBe('/home');
  });

  it('should render one role tab per role and update the heading on click', async () => {
    expect(compiled.querySelectorAll('button.role-tab').length).toBe(3);
    expect(query('[data-testid="login-heading"]').textContent).toContain('Sign in as Nurse');

    await clickRole('Supervisor');

    expect(query('[data-testid="login-heading"]').textContent).toContain('Sign in as Supervisor');
    expect(query('[data-testid="role-note"]').textContent).toContain('staffing levels');
  });

  it('should show validation errors when submitting an empty form', async () => {
    await submitForm();

    expect(query('[data-testid="username-error"]').textContent).toContain('Username is required');
    expect(query('[data-testid="password-error"]').textContent).toContain('Password is required');
  });

  it('should toggle the password visibility', async () => {
    const toggle = query<HTMLButtonElement>('[data-testid="toggle-password"]');
    expect(query('input[name="password"]').getAttribute('type')).toBe('password');

    toggle.click();
    await fixture.whenStable();

    expect(query('input[name="password"]').getAttribute('type')).toBe('text');
    expect(toggle.textContent).toContain('Hide');
  });

  it('should show an error with remaining attempts on invalid credentials', async () => {
    typeInto('username', 'lmartinez');
    typeInto('password', 'wrongpass');
    await submitForm();

    expect(query('[data-testid="login-error"]').textContent).toContain('2 attempt(s)');
  });

  it('should lock the form after 3 failed attempts', async () => {
    typeInto('username', 'lmartinez');
    typeInto('password', 'wrongpass');
    await submitForm();
    await submitForm();
    await submitForm();

    expect(query('[data-testid="login-locked"]')).not.toBeNull();
    expect(query<HTMLButtonElement>('button[type="submit"]').disabled).toBe(true);
  });

  it('should reject valid credentials used with a different role', async () => {
    await clickRole('Head Nurse');
    typeInto('username', 'lmartinez');
    typeInto('password', 'nurse123');
    await submitForm();

    expect(query('[data-testid="login-error"]')).not.toBeNull();
  });

  it('should sign in with the demo account and sign out again', async () => {
    const demoButton = Array.from(compiled.querySelectorAll('button.link-btn')).find((btn) =>
      btn.textContent?.includes('Use demo account'),
    ) as HTMLButtonElement;
    demoButton.click();
    await fixture.whenStable();
    await submitForm();

    const success = query('[data-testid="login-success"]');
    expect(success.textContent).toContain('Welcome, Laura Martínez');
    expect(success.querySelector('a')?.getAttribute('href')).toBe('/home');

    (Array.from(success.querySelectorAll('button')).at(-1) as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(query('[data-testid="login-success"]')).toBeNull();
    expect(query<HTMLInputElement>('input[name="username"]').value).toBe('');
  });
});
