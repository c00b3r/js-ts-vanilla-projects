import './news.css';
import { DataNews } from '../../interfaces/interfaces';

class News {
    draw(data: DataNews[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (newsItemTemp) {
            news.forEach((item, idx) => {
                const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

                const metaPhotoElement = newsClone.querySelector<HTMLElement>('.news__meta-photo');

                if (metaPhotoElement) {
                    metaPhotoElement.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }
                const metaAuthorElement = newsClone.querySelector('.news__meta-author');
                if (metaAuthorElement) {
                    metaAuthorElement.textContent = item.author || item.source.name;
                }

                const metaDateElement = newsClone.querySelector('.news__meta-date');
                if (metaDateElement) {
                    metaDateElement.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }

                const titleElement = newsClone.querySelector('.news__description-title');
                if (titleElement) {
                    titleElement.textContent = item.title;
                }

                const sourceElement = newsClone.querySelector('.news__description-source');
                if (sourceElement) {
                    sourceElement.textContent = item.source.name;
                }

                const contentElement = newsClone.querySelector('.news__description-content');
                if (contentElement) {
                    contentElement.textContent = item.description;
                }

                const readMoreLink = newsClone.querySelector('.news__read-more a');
                if (readMoreLink) {
                    readMoreLink.setAttribute('href', item.url);
                }

                fragment.append(newsClone);
            });

            const newsElement = document.querySelector('.news');
            if (newsElement) {
                newsElement.innerHTML = '';
                newsElement.appendChild(fragment);
            } else {
                console.error('Element with class "news" not found');
            }
        } else {
            console.error('Element with id "newsItemTemp" not found');
        }
    }
}

export default News;
