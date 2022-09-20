import Header from '../render/renderHeader';
import Main from '../render/renderBody';
import Footer from '../render/renderFooter';
import CreateElement from '../common/createElement';

class App {
  private header: Header;
  
  private renderMain: Main;

  private footer: Footer;

  private createEl: CreateElement;

  constructor() {
    this.header = new Header();
    this.renderMain = new Main();
    this.footer = new Footer();
    this.createEl = new CreateElement();
  }

  start(): void {
    const body = document.getElementById('body') as HTMLElement;
    const header: HTMLElement = this.header.draw();
    const footer: HTMLElement = this.footer.draw();
    body.append(header);
    this.createEl.create('main', '', 'main', body);
    this.renderMain.switchPage();
    body.append(footer);
  }

}

export default App;