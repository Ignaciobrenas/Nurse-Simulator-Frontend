import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Nurse } from '../../models/nurse.model';
import { MOCK_NURSES } from '../../mocks/nurses.mock';

// Default query that returns exactly 3 simulated results (Ana, Antonio Garcia, Manuel Garcia).
const DEFAULT_QUERY = 'An';

@Component({
  imports: [RouterLink],
  selector: 'app-nurse-search',
  styleUrl: './nurse-search.component.css',
  templateUrl: './nurse-search.component.html',
})
export class NurseSearch {
  private readonly nurses: Nurse[] = MOCK_NURSES;

  protected readonly defaultQuery = DEFAULT_QUERY;
  protected readonly suggestions: string[] = [DEFAULT_QUERY, 'Garcia', 'Lucia', 'Pablo'];
  protected readonly draftQuery = signal(DEFAULT_QUERY);
  protected readonly searchTerm = signal(DEFAULT_QUERY);
  protected readonly selectedNurse = signal<Nurse | null>(null);

  protected readonly results = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) {
      return [];
    }
    return this.nurses.filter((nurse) => nurse.name.toLowerCase().includes(term));
  });

  protected isActiveSuggestion(name: string): boolean {
    return this.searchTerm().toLowerCase() === name.toLowerCase();
  }

  protected onQueryInput(event: Event): void {
    this.draftQuery.set((event.target as HTMLInputElement).value);
  }

  protected search(): void {
    this.searchTerm.set(this.draftQuery().trim());
    this.selectedNurse.set(null);
  }

  protected applySuggestion(name: string): void {
    this.draftQuery.set(name);
    this.search();
  }

  protected clearSearch(): void {
    this.draftQuery.set('');
    this.search();
  }

  protected selectNurse(nurse: Nurse): void {
    this.selectedNurse.set(this.selectedNurse()?.id === nurse.id ? null : nurse);
  }
}
