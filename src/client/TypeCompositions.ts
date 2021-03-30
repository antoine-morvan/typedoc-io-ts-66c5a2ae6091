import { UserType } from "@typedoc-io-ts-model/users/User";
import * as t from "io-ts";

export const UserFriendsFavCompositionType = t.type({
  users: t.array(UserType),
  friends: t.array(t.string),
  favorites: t.array(t.string)
});

// see https://github.com/TypeStrong/typedoc/issues/1550
// eslint-disable-next-line @typescript-eslint/ban-types
export type UserFriendsFavComposition = {} & t.TypeOf<typeof UserFriendsFavCompositionType>;
