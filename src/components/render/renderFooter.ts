import CreateElement from '../common/createElement';

class Footer {
  private createEl: CreateElement;

  constructor() {
    this.createEl = new CreateElement();
  }

  draw(): HTMLElement {
    const footer: HTMLElement = this.createEl.create('footer', '', 'footer', null);
    const container: HTMLElement = this.createEl.create('div', '', 'container', footer);
    const footerInner: HTMLElement = this.createEl.create('div', '', 'footer__inner', container);
    const footerGit = this.createEl.create('a', 'GitHub - 2022', 'footer__link footer__link_git', footerInner) as HTMLAnchorElement;
    footerGit.href = 'https://github.com/maxim545';
    const footerRssImg = '<img class="footer__img" src="https://rs.school/images/rs_school_js.svg" alt="RS-School">';
    const footerRss = this.createEl.create('a', footerRssImg, 'footer__link footer__link_rss', footerInner) as HTMLAnchorElement;
    footerRss.href = 'https://rs.school/js/';
    return footer;
  }
}

export default Footer;
