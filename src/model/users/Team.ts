import * as t from "io-ts";

const TeamIdentifierType = t.type({
  name: t.string
});

const TeamUsersType = t.type({
  users: t.array(t.string)
});

export const TeamType = t.intersection([TeamIdentifierType, TeamUsersType]);

export const TeamSpecifierType = t.intersection([TeamIdentifierType, t.partial(TeamUsersType.props)]);

// see https://github.com/TypeStrong/typedoc/issues/1550
// eslint-disable-next-line @typescript-eslint/ban-types
export type Team = {} & t.TypeOf<typeof TeamType>;

// see https://github.com/TypeStrong/typedoc/issues/1550
// eslint-disable-next-line @typescript-eslint/ban-types
export type TeamSpecifier = {} & t.TypeOf<typeof TeamSpecifierType>;
