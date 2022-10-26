# Node Web-push

This is a simple test for remote notifications

## Get started

First, clone this repo.

Then, install the dependencies

```bash
npm install
or
yarn install
```

After that, generate the vapid keys

```bash
npx web-push generate-vapid-keys
```

Create an `.env` file and place the Public Vapid Key in a variable called `WP_PUBLIC_KEY`, the Private Vapid Key in `WP_PRIVATE_KEY` and the email in `WP_EMAIL`.
Use the `env.example.txt` file for reference, but **Don´t forget to remove it**

## Send Remote Notifications

For sending the remote notifications, you need to update the `pushSubscriptions` array inside the `index.js`.
There you have to add the client or clients object data (endpoint, keys p256dh and keys auth)
**Message**
The message you want to send goes into the `payload` constant, title and message.

### Run the script

Once you have added the data, for testing the script and send the notifications you can do:

```bash
node index.js
```

or

```bash
npm start
```

It will do the same action.
