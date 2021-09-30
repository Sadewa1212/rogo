interface Uri {
  scheme?: string | undefined;
  host?: string | undefined;
  port?: number | undefined;
  path?: Array<string> | undefined;
  queryParameter?:
    | Array<{
        key: string;
        value: string;
      }>
    | undefined;
}
export type { Uri };
