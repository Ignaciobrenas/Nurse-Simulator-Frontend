import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type WardShift = 'Morning' | 'Afternoon' | 'Night';

interface ScreenCard {
  title: string;
  description: string;
  route: string;
  category: string;
  icon: 'login' | 'list' | 'search';
  cta: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class Home {
  protected readonly shifts: WardShift[] = ['Morning', 'Afternoon', 'Night'];
  protected readonly activeShift = signal<WardShift>('Morning');

  protected readonly screens: ScreenCard[] = [
    {
      title: 'Nurse Login',
      description: 'Sign in with nurse credentials to verify staff access to the shift portal.',
      route: '/login',
      category: 'Access',
      icon: 'login',
      cta: 'Go to Login',
    },
    {
      title: 'Registered Nurses',
      description: 'Consult the directory with information for all registered nursing staff.',
      route: '/nurse-list',
      category: 'Directory',
      icon: 'list',
      cta: 'View Nurses',
    },
    {
      title: 'Nurse Search',
      description: 'Search nursing staff by name and inspect matching result records.',
      route: '/nurse-search',
      category: 'Search',
      icon: 'search',
      cta: 'Search by Name',
    },
  ];

  protected selectShift(shift: WardShift): void {
    this.activeShift.set(shift);
  }

  protected cycleShift(): void {
    const nextIndex = (this.shifts.indexOf(this.activeShift()) + 1) % this.shifts.length;
    this.activeShift.set(this.shifts[nextIndex]);
  }
}
