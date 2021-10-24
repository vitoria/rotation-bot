import { WebClient } from "@slack/web-api";

export default class SlackClient {
  userToken: string;
  webClient: WebClient;

  constructor(token: string, userToken: string) {
    this.userToken = userToken;
    this.webClient = new WebClient(token);
  }

  async createRotationGroup(
    name: string,
    handle: string,
    users: string[] = []
  ) {
    try {
      const { usergroup } = await this.webClient.usergroups.create({
        token: this.userToken,
        name,
        handle,
      });
      const usersParsed = users.join(",");
      const args = {
        token: this.userToken,
        usergroup: usergroup.id,
        users: usersParsed,
      };
      const response = await this.webClient.usergroups.users.update(args);

      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
