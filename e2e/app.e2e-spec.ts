import { KpResumePage } from './app.po';

describe('kp-resume App', () => {
  let page: KpResumePage;

  beforeEach(() => {
    page = new KpResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
