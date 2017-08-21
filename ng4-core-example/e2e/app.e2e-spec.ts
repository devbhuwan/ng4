import { Ng4CoreExamplePage } from './app.po';

describe('ng4-core-example App', () => {
  let page: Ng4CoreExamplePage;

  beforeEach(() => {
    page = new Ng4CoreExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
