export const resourceResolver = <T>(loaderName: string, propName: keyof T) =>
  (resource, args, { loaders }) => loaders[loaderName].load(resource[propName].name);

export const resourceListResolver = <T>(loaderName: string, propName: keyof T) =>
  (resource, args, { loaders }) => loaders[loaderName].loadMany(resource[propName].map(({ name }) => name));
