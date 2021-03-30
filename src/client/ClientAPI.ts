import { UserIoTs, UserManual } from "@typedoc-io-ts-model/users/User";
import { UserFriendsFavComposition } from "./TypeCompositions";

export class ClientAPI {
  public async listUsersIoTs(): Promise<UserIoTs[]> {
    return Promise.resolve([]);
  }
  public async listUsersManual(): Promise<UserManual[]> {
    return Promise.resolve([]);
  }

  public async getComplexResult() : Promise<UserFriendsFavComposition> {
    return Promise.resolve({} as UserFriendsFavComposition);
  }
}
