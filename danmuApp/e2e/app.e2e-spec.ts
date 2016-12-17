import { DanmuAppPage } from './app.po';

describe('danmu-app App', function() {
  let page: DanmuAppPage;

  beforeEach(() => {
    page = new DanmuAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
