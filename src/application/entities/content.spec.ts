import { Content } from "./content";

describe('notification content', () => {
    it('should be able to create a notification content', () => {
        const testContent = new Content('você recebeu uma soliação de amizade');
        expect(testContent).toBeTruthy();
    });

    it('should not be able to create a notification content with less that 5 characters', () => {
        expect(() => new Content('aaa')).toThrow();
    });

    it('should not be able to create a notification content with less that 240 characters', () => {
        expect(() => new Content('a'.repeat(241))).toThrow();
    });

})
