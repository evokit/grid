import styles from './style.css';
import { createElement } from './evokit.js';


const Grid = createElement({
    name: 'grid',
    type: 'div',
    modList: ['column', 'size', 'direction', 'align', 'valign', 'wrap'],
    styles,
});

const GridItem = createElement({
    name: 'grid__item',
    type: 'div',
    modList: ['width', 'order'],
    styles,
});

Grid.Item = GridItem;

export default Grid;
