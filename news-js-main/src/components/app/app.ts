import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INews, SourcesData } from '../interfaces/interfaces';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sources = document.querySelector('.sources') as HTMLElement;
        sources.addEventListener('click', (e) =>
            this.controller.getNews(e, (data?: INews) => this.view.drawNews(data))
        );
        this.controller.getSources((data?: SourcesData) => this.view.drawSources(data));
    }
}

export default App;
