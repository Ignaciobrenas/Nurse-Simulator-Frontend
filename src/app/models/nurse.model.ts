export type ShiftType = 'Morning' | 'Afternoon' | 'Night';
export type NurseStatus = 'On Duty' | 'Off Duty' | 'On Call';

export interface Nurse {
  id: number;
  name: string;
  email: string;
  password?: string;
  department: string;
  shift: ShiftType;
  status: NurseStatus;
  phone: string;
  roomOrWard: string;
  licenseNumber: string;
  yearsOfExperience: number;
}
