import { Myapp1Page } from './app.po';

describe('myapp1 App', function() {
  let page: Myapp1Page;

  beforeEach(() => {
    page = new Myapp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
