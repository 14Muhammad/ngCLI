import { CLITest1Page } from './app.po';

describe('clitest1 App', function() {
  let page: CLITest1Page;

  beforeEach(() => {
    page = new CLITest1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
