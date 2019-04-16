module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'Rubrik Build',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'rubrikbuild.slack.com',
  // access token of slack
  // see https://github.com/outsideris/slack-invite-automation#issue-token
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-581970754374-580864183061-602783523057-2d3ec717759c581f2a90954d524f547b',
  // an optional security measure - if it is set, then that token will be required to get invited.
  inviteToken: process.env.INVITE_TOKEN || null,
  // an optional security measure - if both are set, then recaptcha will be used.
  recaptchaSiteKey: process.env.RECAPTCHA_SITE || null,
  recaptchaSecretKey: process.env.RECAPTCHA_SECRET || null,
  // default locale
  locale: process.env.LOCALE || "en",
  subpath: process.env.SUBPATH || "/"
};
