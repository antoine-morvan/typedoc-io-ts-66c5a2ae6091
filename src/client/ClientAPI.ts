

import { UserIoTs, UserManual } from "@typedoc-io-ts-model/users/User";

export class ClientAPI {

  public async listUsersIoTs(): Promise<UserIoTs[]> {
    return Promise.resolve([]);
  }
  public async listUsersManual(): Promise<UserManual[]> {
    return Promise.resolve([]);
  }
}
