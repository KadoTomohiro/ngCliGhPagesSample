export class NgCliGhPagesSamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-cli-gh-pages-sample-app p')).getText();
  }
}
