export type ObjectDefinition = [number, /* ID */ [string, string][], /* fields */ string /* return type / parent */];

export interface Schema {
  readonly definitions: Record<string, ObjectDefinition>;
  readonly identifierToName: Record<string, string>;
}
