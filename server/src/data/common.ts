export type Resource = {
  name: string;
  url: string;
};

export type ListResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: Array<Resource>;
};
