import './sources.css';
import { ISource } from '../../interfaces/interfaces';

class Sources {
    draw(data: ISource[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (sourceItemTemp) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
                const nameElement = sourceClone.querySelector('.source__item-name');
                const itemElement = sourceClone.querySelector('.source__item');

                if (nameElement && itemElement && item.id) {
                    nameElement.textContent = item.name;
                    itemElement.setAttribute('data-source-id', item.id);

                    fragment.append(sourceClone);
                }
            });
        } else {
            console.error('Template element #sourceItemTemp not found');
        }

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
