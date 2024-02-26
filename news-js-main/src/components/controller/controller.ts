import AppLoader from './appLoader';
import { CallbackFunction } from '../types/types';
import { INews, SourcesData } from '../interfaces/interfaces';

class AppController extends AppLoader {
    public getSources(callback: CallbackFunction<SourcesData>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: CallbackFunction<INews>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (sourceId) {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                }

                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
