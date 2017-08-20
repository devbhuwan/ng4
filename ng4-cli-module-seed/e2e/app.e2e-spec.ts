import { Ng4CliModuleSeedPage } from './app.po';

describe('ng4-cli-module-seed App', () => {
  let page: Ng4CliModuleSeedPage;

  beforeEach(() => {
    page = new Ng4CliModuleSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
