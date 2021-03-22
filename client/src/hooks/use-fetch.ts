import { useEffect, useState } from 'react';
import { compose, isNil, not } from 'ramda';

const isNotNullOrUndefined = compose(not, isNil);

export const useFetch =
  <Data, Args extends any[] = any[]>(
    fetchApi: (...args: Args) => Promise<Data>,
    defaultState = {},
  ) =>
    (...args: Args): Data => {
      const [data, setData] = useState<Data | any>(defaultState);
      useEffect(() => {
        if (!args.length || args.every(isNotNullOrUndefined)) {
          fetchApi(...args).then(setData);
        }
      }, args.length ? args : [true]);
      return data as Data;
    };
