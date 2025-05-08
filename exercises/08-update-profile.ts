export type Profile = {
  name: string;
  email: string;
  age: number;
};

export function updateProfile(original: Profile, updates: Partial<Profile>): Profile {
  // TODO: スプレッド構文で部分更新し、元のオブジェクトは変更しない
  return original;
}
