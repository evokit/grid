import gridStyles from './style.css';
import { createElement } from './utils';

/**
 * Usage example:
 *
 * class MyComponent extends React.Component {
 *    render (
 *        <Grid
 *            grid-column={...}
 *            grid-size={...}
 *            grid-direction={...}
 *            grid-align={...}
 *            grid-valign={...}
 *            grid-wrap={...}
 *        >
 *            <Grid.Item
 *                grid-width={...}
 *                grid-order={...}
 *            >
 *                ...your content...
 *            </Grid.Item>
 *        </Grid>
 *    );
 * }
 *
 * */


const Grid = createElement({
    tagName: 'div',
    blockName: 'grid',
    prefix: 'grid',
    modifiers: ['column', 'size', 'direction', 'align', 'valign', 'wrap'],
    styles: gridStyles,
});

const GridItem = createElement({
    tagName: 'div',
    blockName: 'grid__item',
    prefix: 'grid',
    modifiers: ['width', 'order'],
    styles: gridStyles,
});

Grid.Item = GridItem;

export default Grid;
