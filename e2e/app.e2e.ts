import { NgCliGhPagesSamplePage } from './app.po';

describe('ng-cli-gh-pages-sample App', function() {
  let page: NgCliGhPagesSamplePage;

  beforeEach(() => {
    page = new NgCliGhPagesSamplePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-cli-gh-pages-sample Works!');
  });
});
