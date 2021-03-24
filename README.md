# typedoc-io-ts

Sample project to reproduce IO-TS type alias issue when generating doc with typedoc. (see https://github.com/TypeStrong/typedoc/issues/1550)

## Steps:

```bash
# CLONE FIRST
npm clean-install
npm run doc
```

## Observations

The code declares 2 methods to list users, earch returning an array of a type declared in another file, one manually,
the other using IO-TS.

```typescript
/* src/model/users/User.ts */
export type UserIoTs = t.TypeOf<typeof UserType>;

export type UserManual = {
  userId: string;
  email: string;
} & {
  teams: string[];
};

/* src/client/ClientAPI.ts */
export class ClientAPI {
  public async listUsersIoTs(): Promise<UserIoTs[]> {
    return Promise.resolve([]);
  }
  public async listUsersManual(): Promise<UserManual[]> {
    return Promise.resolve([]);
  }
}
```

In the generated doc `docs/classes/client_clientapi.clientapi.html`, the method with the manually declared type has a
proper reference, whereas the other using the IO-TS type has its type inlined.
