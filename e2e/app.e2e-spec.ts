import { ALICPage } from './app.po';

describe('alic App', () => {
  let page: ALICPage;

  beforeEach(() => {
    page = new ALICPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
