import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Nurse, ShiftType } from '../../models/nurse.model';
import { MOCK_NURSES } from '../../mocks/nurses.mock';

type FilterShift = 'All' | ShiftType;

@Component({
  imports: [RouterLink],
  selector: 'app-nurse-list',
  styleUrl: './nurse-list.component.css',
  templateUrl: './nurse-list.component.html',
})
export class NurseList {
  protected readonly nurses = signal<Nurse[]>(MOCK_NURSES);
  protected readonly filterShifts: FilterShift[] = ['All', 'Morning', 'Afternoon', 'Night'];
  protected readonly activeFilter = signal<FilterShift>('All');
  protected readonly selectedNurse = signal<Nurse | null>(MOCK_NURSES[0]);

  protected readonly filteredNurses = computed(() => {
    const filter = this.activeFilter();
    const list = this.nurses();
    if (filter === 'All') {
      return list;
    }
    return list.filter((nurse) => nurse.shift === filter);
  });

  protected readonly totalCount = computed(() => this.nurses().length);
  protected readonly onDutyCount = computed(
    () => this.nurses().filter((n) => n.status === 'On Duty').length,
  );

  protected selectFilter(shift: FilterShift): void {
    this.activeFilter.set(shift);
  }

  protected cycleFilter(): void {
    const currentIndex = this.filterShifts.indexOf(this.activeFilter());
    const nextIndex = (currentIndex + 1) % this.filterShifts.length;
    this.activeFilter.set(this.filterShifts[nextIndex]);
  }

  protected selectNurse(nurse: Nurse): void {
    this.selectedNurse.set(nurse);
  }

  protected clearSelection(): void {
    this.selectedNurse.set(null);
  }
}
