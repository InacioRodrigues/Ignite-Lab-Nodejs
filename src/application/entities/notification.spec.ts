import { Content } from "./content";
import { Notification } from "./notification";

describe('notification ', () => {
    it('should be able to create a notification ', () => {
        const notification = new Notification({
            content: new Content("nova solicitação de amizade"),
            category: 'social',
            recipientId: 'qualquer coisa'
        });
        expect(notification).toBeTruthy();
    });



})
