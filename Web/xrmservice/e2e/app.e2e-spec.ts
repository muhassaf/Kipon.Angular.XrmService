import { XrmservicePage } from './app.po';

describe('xrmservice App', () => {
  let page: XrmservicePage;

  beforeEach(() => {
    page = new XrmservicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
