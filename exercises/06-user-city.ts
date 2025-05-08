export type User = {
  name: string;
  profile?: {
    location?: {
      city?: string;
    };
  };
};

export function getUserCity(user: User): string {
  // TODO: Optional Chaining & Nullish Coalescing を使って実装
  return "";
}
