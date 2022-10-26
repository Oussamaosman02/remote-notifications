const webpush = require("web-push");
require("dotenv").config();
const pub = process.env.WP_PUBLIC_KEY;
const priv = process.env.WP_PRIVATE_KEY;
const email = process.env.WP_EMAIL;

async function deto() {
  const pushSubscriptions = [
    {
      endpoint:
        "https://fcm.googleapis.com/fcm/send/cnzLlSERBto:APA91bHxRiFLg-nCgVL3H3JYq9xEjQBNDQHSOUH_8FeOfgmVFy9yYAUBn92z1Ee6czqLfzlROI7zM6Kr90lC6nYdKlZx5DhZJl6Fo4ejAyziaOINYmp-44hRK2fpXvRB4ckOQ-0OFaGj",
      expirationTime: null,
      keys: {
        p256dh:
          "BNq3FSlIeTEjsVpccI_ZWo9u8ioScWmCmPrVilLcjE3cbql4qDE9LU7pEeRh6sHZDYZCzeGqVcSkzyR9YzygsAg",
        auth: "ji4eDAr3bX-P4E9HDLNCiQ",
      },
    },
    {
      endpoint:
        "https://fcm.googleapis.com/fcm/send/eM61yq04Uts:APA91bEGNRlzVNIFAGTj3zab-S14o4-IqpVq0DRWISp4Iet4yqQs4IBElDK5s_B-1mkXXL2yeS3uVkhCC-tAqfKJMYPi1_txle7pZSKqCdM-QugJ7l9b1smdj18wDzjgFGkde34OqPfE",
      expirationTime: null,
      keys: {
        p256dh:
          "BFY6yU3IRqpyYB9SwoWinLZpiJuCnvBPfs431VoBMc2L3EGXImmZw-4n0F-XH5KkOGJc7sPDnYq57M4ghrg8BdY",
        auth: "IRQ9_9EF4H7f8RjZbtN2Vw",
      },
    },
  ];
  const payload = JSON.stringify({
    title: "Hello World!",
    message: "This is a remote notification",
  });

  const options = {
    vapidDetails: {
      subject: `mailto:${email}`,
      publicKey: pub,
      privateKey: priv,
    },
  };
  pushSubscriptions.map(async (pushSubscription) => {
    await webpush.sendNotification(pushSubscription, payload, options);
  });
}

deto();
