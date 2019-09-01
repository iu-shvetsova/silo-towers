import { GpnPage } from './app.po';

describe('gpn App', function() {
  let page: GpnPage;

  beforeEach(() => {
    page = new GpnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
