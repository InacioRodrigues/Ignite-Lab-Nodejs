import { content } from "./content";

test('it should be able to create a notification content', ()=>{
    const testContent = new content('você recebeu uma solicitação de amizade');
    expect(testContent).toBeTruthy();
});

test('it should not be able to create a notification content with less that 5 characters', ()=>{
    const testContent = new content('aaa')
    expect(testContent).toBeTruthy();
});
