export interface trajectoryInterface {
  description: string;
  role: string;
  institution: string;
  duration: string;
  status: string;
  date: string;
}
export interface trajectoryJson{
    json: trajectoryInterface[]
}