import { WebpagesPage } from './app.po';

describe('webpages App', () => {
  let page: WebpagesPage;

  beforeEach(() => {
    page = new WebpagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
