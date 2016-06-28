export class Angular2DemosPage {
  navigateTo(route: string = '/') {
    return browser.get(route);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
