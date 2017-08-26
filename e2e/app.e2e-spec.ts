import { SquigglyPage } from './app.po';

describe('squiggly App', () => {
  let page: SquigglyPage;

  beforeEach(() => {
    page = new SquigglyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
