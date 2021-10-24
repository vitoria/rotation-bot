import dotenv from "dotenv";
import SlackClient from "./slack.client";

dotenv.config();

const slackClient = new SlackClient(
  process.env.SLACK_TOKEN,
  process.env.SLACK_USER_TOKEN
);

slackClient.createRotationGroup("Team rotation", "team-rotation", [
  "U02JV4FMGBV",
]);
