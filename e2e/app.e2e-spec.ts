import { AngularCliLazyLoadingPage } from './app.po';

describe('angular-cli-lazy-loading App', function() {
  let page: AngularCliLazyLoadingPage;

  beforeEach(() => {
    page = new AngularCliLazyLoadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
