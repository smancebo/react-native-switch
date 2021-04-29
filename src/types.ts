export interface Indexable<T> {
  [key: string]: T;
}

export interface BoolWithString extends Indexable<string> {
  true: string;
  false: string;
}
