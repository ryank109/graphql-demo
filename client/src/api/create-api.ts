import { compose, isNil, join, map, path as ramdaPath, reject, toPairs } from 'ramda';

const POKEMON_API = 'https://pokeapi.co/api/v2';

export type Api<T> = (path?: string | number, options?: RequestInit) => Promise<T>;

export const parseJSON = <T>(response: Response): Promise<T> => response.json();

export const createApi = (resource: string) =>
  async <T>(path: string | number = '', options?: RequestInit) => {
    const response = await fetch(`${POKEMON_API}/${resource}${path ? '/' + path : ''}`, options);
    return await parseJSON<T>(response);
  };

export const withQueryParams = <T = any>(queryParams: Record<string, string | number | undefined> = {}) => (
  callApi: Api<T>,
): Api<T> => (path = '', options) => {
  const stringifiedQueryParams = compose<Record<string, string | number | undefined>, string[][], string[][], string[], string>(
    join('&'),
    map(compose(join('='), map(encodeURIComponent))),
    reject(compose(isNil, ramdaPath([1]))),
    toPairs,
  )(queryParams);
  return callApi(`${path}?${stringifiedQueryParams}`, options);
};
