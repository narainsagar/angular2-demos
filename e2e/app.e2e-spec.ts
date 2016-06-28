import { Angular2DemosPage } from './app.po';

describe('angular2-demos App', function() {
  let page: Angular2DemosPage;

  beforeEach(() => {
    page = new Angular2DemosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
