
import { Contact } from "../models/contact.model";
export class OneSignalService {
    private oneSignal: any;
    constructor() {
        this.oneSignal = require("onesignal-node");
    }
    async sendNotification(contact: Contact[]): Promise<any> {
        const userNotification: any[] = [];
        for (let i = 0; i < contact.length; i++) {
            userNotification.push(contact[i].getCodContact().getIdNotification());
        }
        const myClient = new this.oneSignal.Client({
            userAuthKey: "YzNkMGVhZTMtNzMxMS00ZjRkLTg5YTMtNDNiY2I3NDA0MWM1",
            app: { appAuthKey: "NzJlZjkyZjktYmYzNC00YTYyLWFlYWMtNzUxODY3YmRhZmE2", appId: "50b7df5b-0343-4c20-ae2a-ed518bbaefbb" }
        });
        const firstNotification = new this.oneSignal.Notification({
            contents: {
                en: "Test notification",
                tr: "Test mesajı"
            }
        });
        console.log(userNotification);
        firstNotification.setTargetDevices(userNotification);
        myClient.sendNotification(firstNotification, function (err: any, httpResponse: any, data: any) {
            if (err) {
                console.log("Something went wrong...");
            } else {
                console.log(data);
            }
        });

    }

}
