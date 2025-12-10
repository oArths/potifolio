export interface trajectoryInterface {
  description: string;
  role: string;
  name: string;
  image: string;
  institution: string;
  duration: string;
  tags: string[];
  links: {
    repo: string;
    figma: string;
    demo: string;
  };
  status: string;
  date: string;
}
export interface trajectoryJson {
  json: trajectoryInterface[];
}
