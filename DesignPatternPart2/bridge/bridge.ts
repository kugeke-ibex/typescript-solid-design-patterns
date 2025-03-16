export {}

interface MessageApp {
    send();
}

class LINE implements MessageApp {
    send() {
        console.log("LINEでメッセージ送信");
    }
}

class Twitter implements MessageApp {
    send() {
        console.log("Twitterでメッセージ送信");
    }
}

class Facebook implements MessageApp {
    send() {
        console.log("Facebookでメッセージ送信");
    }
}

abstract class OS {
    protected app: MessageApp | null = null;

    setMessageApp(app: MessageApp) {
        this.app = app;
    }

    abstract sendMessage();
}

class IOS extends OS {
    sendMessage() {
        console.log("iOSでメッセージ送信");

        if (this.app) {
            this.app.send();
        } else {
            throw new Error("アプリが指定されていません");
        }
    }
}

class Android extends OS {
    sendMessage() {
        console.log("Androidでメッセージ送信");

        if (this.app) {
            this.app.send();
        } else {
            throw new Error("アプリが指定されていません");
        }
    }
}

function run() {
    const line = new LINE();
    const twitter = new Twitter();
    const facebook = new Facebook();

    const ios = new IOS();
    const android = new Android();
    const iosTwitter = new IOS();

    ios.setMessageApp(line);
    ios.sendMessage();
    android.setMessageApp(facebook);
    android.sendMessage();
    iosTwitter.setMessageApp(twitter);
    iosTwitter.sendMessage();

}

run();
