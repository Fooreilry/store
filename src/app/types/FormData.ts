export const formType = {
  CREATE: 'create',
  UPDATE: 'update',
  WATCH: 'watch',
} as const;

export type FormType = ConstType<typeof formType>;
