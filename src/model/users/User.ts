import * as t from "io-ts";

/*
 * Internal subtype declarations
 */
const UserIdentifierType = t.type({
  userId: t.string,
  email: t.string
});

const UserTeamsType = t.type({
  teams: t.array(t.string)
});

/*
 * Public type declarations
 */
export const UserType = t.intersection([UserIdentifierType, UserTeamsType]);
export type UserIoTs = t.TypeOf<typeof UserType>;
export type UserManual = {
  userId: string;
  email: string;
} & {
  teams: string[];
}

export const UserSpecifierType = t.intersection([UserIdentifierType, t.partial(UserTeamsType.props)]);
export type UserSpecifier = t.TypeOf<typeof UserSpecifierType>;
