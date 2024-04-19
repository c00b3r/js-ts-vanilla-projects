export interface Route {
  [key: string]: () => void;
}