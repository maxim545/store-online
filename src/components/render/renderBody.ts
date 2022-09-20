import pagesData from './pagesData';
import { ICards } from '../types/types'

class RenderBody {

  async loadData() {
    const response = await fetch('data/data.json');
    const products = await response.json() as ICards<string, boolean>[];
    return products;
  }

  async renderPage(hash: string): Promise<void> {
    const main = document.querySelector('.main') as HTMLElement;
    main.innerHTML = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const nav of pagesData) {
      // eslint-disable-next-line no-await-in-loop
      const data = await this.loadData();
      const pageRender = nav.renderClass;
      if (hash === nav.href) {
        pageRender.render(main, data);
       }
    }
  }

  switchPage(): void {
    const events: string[] = ['load', 'hashchange'];
    events.forEach((event) => {
      window.addEventListener(event, () => {
        const hashName = window.location.hash.substring(1);
        if (hashName === '') { 
          this.renderPage('/') 
          .catch(() => {throw new Error('Error')})
          .then(() => console.log('Render page Succeed'))
          .catch((err: Error) => console.error(err));
        } else { 
          this.renderPage(hashName)
          .catch(() => {throw new Error('Error')})
          .then(() => console.log('Render page Succeed'))
          .catch((err: Error) => console.error(err));
        }
      });
    });
  }
}

export default RenderBody;
