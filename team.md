# Team Plan

You can create a team on ChatKit and manage license keys for your team members.

## How to create a team

Head to https://chatkit.app/new-team

1. Enter your team name
2. Enter team admin emails
3. Select the initial devices amount

## Team pricing

The base price for a team is $250 USD, which includes 50 devices and unlimited license keys. Your can purchase more devices with $8 USD per device.

## Team management

Head to https://chatkit.app/team-admin

Log in with your team admin email, an admin can:

- Create/Update/Delete license keys
- Purchase new devices
- Update team settings
- Set a team-wise OpenAI API key, this key applies to all members but the key itself is not exposed to members
- Disable ChatKit credits for members

## Invite team members

You can generate license keys manually for your team members, but it's also possible to invite them to join your team by using their email. Head to https://chatkit.app/team-admin and click "Invite Users":

![](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/GqzYW7.png)

After configuring your email domains, you can send `https://chatkit.app/join-team` to your team members, they can join your team by entering their email.

## Limitations

- Currently a team can't share [ChatKit Credits](./credits.md), it's managed by each license user just like how it works with a personal license key, let us know if you need this feature.
- By default every new member joined via `https://chatkit.app/join-team` will be limited to 1 devices, we'll soon make this configurable.
