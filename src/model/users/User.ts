import * as t from "io-ts";

const UserIdentifierType = t.type({
  userId: t.string,
  email: t.string
});
const UserTeamsType = t.type({
  teams: t.array(t.string)
});

export const UserType = t.intersection([UserIdentifierType, UserTeamsType]);

// see https://github.com/TypeStrong/typedoc/issues/1550
// eslint-disable-next-line @typescript-eslint/ban-types
export type UserIoTs = {} & t.TypeOf<typeof UserType>;

export type UserManual = {
  userId: string;
  email: string;
} & {
  teams: string[];
};
