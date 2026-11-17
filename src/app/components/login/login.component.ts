import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type StaffRole = 'nurse' | 'head-nurse' | 'supervisor';
type LoginStatus = 'idle' | 'error' | 'locked' | 'success';

interface RoleOption {
  id: StaffRole;
  label: string;
  area: string;
}

interface DemoAccount {
  role: StaffRole;
  username: string;
  password: string;
  fullName: string;
  ward: string;
}

interface AccessFeature {
  title: string;
  detail: string;
}

export const MAX_LOGIN_ATTEMPTS = 3;

/** Simulated credentials (no backend call). Field names mirror POST /nurse/login (username, password). */
export const DEMO_ACCOUNTS: DemoAccount[] = [
  {
    role: 'nurse',
    username: 'lmartinez',
    password: 'nurse123',
    fullName: 'Laura Martínez',
    ward: 'Internal Medicine · Ward 3B',
  },
  {
    role: 'head-nurse',
    username: 'jgarcia',
    password: 'head123',
    fullName: 'Javier García',
    ward: 'Emergency Department',
  },
  {
    role: 'supervisor',
    username: 'mlopez',
    password: 'super123',
    fullName: 'Marta López',
    ward: 'Hospital Nursing Supervision',
  },
];

@Component({
  imports: [RouterLink],
  selector: 'app-login',
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
})
export class Login {
  protected readonly maxAttempts = MAX_LOGIN_ATTEMPTS;

  protected readonly roles: RoleOption[] = [
    { id: 'nurse', label: 'Nurse', area: 'Ward care' },
    { id: 'head-nurse', label: 'Head Nurse', area: 'Unit lead' },
    { id: 'supervisor', label: 'Supervisor', area: 'Hospital-wide' },
  ];

  protected readonly features: AccessFeature[] = [
    { title: 'Shift handover', detail: 'Review patient notes before starting your shift.' },
    { title: 'Staff directory', detail: 'Check registered nursing staff by unit.' },
    { title: 'Role-based access', detail: 'Each role unlocks its own clinical tools.' },
  ];

  protected readonly selectedRole = signal<StaffRole>('nurse');
  protected readonly username = signal('');
  protected readonly password = signal('');
  protected readonly showPassword = signal(false);
  protected readonly submitted = signal(false);
  protected readonly failedAttempts = signal(0);
  protected readonly status = signal<LoginStatus>('idle');
  protected readonly loggedUser = signal<DemoAccount | null>(null);

  protected readonly selectedRoleLabel = computed(
    () => this.roles.find((role) => role.id === this.selectedRole())?.label ?? '',
  );

  protected readonly demoAccount = computed(() =>
    DEMO_ACCOUNTS.find((account) => account.role === this.selectedRole())!,
  );

  protected readonly usernameError = computed(() => {
    const value = this.username().trim();
    if (!value) {
      return 'Username is required.';
    }
    if (value.length < 3) {
      return 'Username must have at least 3 characters.';
    }
    if (!/^[a-z0-9._]+$/i.test(value)) {
      return 'Only letters, numbers, dots and underscores are allowed.';
    }
    return null;
  });

  protected readonly passwordError = computed(() => {
    const value = this.password();
    if (!value) {
      return 'Password is required.';
    }
    if (value.length < 6) {
      return 'Password must have at least 6 characters.';
    }
    return null;
  });

  protected readonly remainingAttempts = computed(() => this.maxAttempts - this.failedAttempts());

  protected selectRole(role: StaffRole): void {
    this.selectedRole.set(role);
    if (this.status() === 'error') {
      this.status.set('idle');
    }
  }

  protected updateUsername(event: Event): void {
    this.username.set((event.target as HTMLInputElement).value);
  }

  protected updatePassword(event: Event): void {
    this.password.set((event.target as HTMLInputElement).value);
  }

  protected togglePassword(): void {
    this.showPassword.update((visible) => !visible);
  }

  protected fillDemoAccount(): void {
    this.username.set(this.demoAccount().username);
    this.password.set(this.demoAccount().password);
  }

  protected submit(event: Event): void {
    event.preventDefault();
    if (this.status() === 'locked') {
      return;
    }

    this.submitted.set(true);
    if (this.usernameError() || this.passwordError()) {
      return;
    }

    const account = DEMO_ACCOUNTS.find(
      (candidate) =>
        candidate.role === this.selectedRole() &&
        candidate.username === this.username().trim().toLowerCase() &&
        candidate.password === this.password(),
    );

    if (account) {
      this.loggedUser.set(account);
      this.status.set('success');
      return;
    }

    this.failedAttempts.update((attempts) => attempts + 1);
    this.status.set(this.remainingAttempts() <= 0 ? 'locked' : 'error');
  }

  protected resetForm(): void {
    this.username.set('');
    this.password.set('');
    this.showPassword.set(false);
    this.submitted.set(false);
    this.failedAttempts.set(0);
    this.status.set('idle');
    this.loggedUser.set(null);
  }
}
