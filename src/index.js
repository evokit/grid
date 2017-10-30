import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './style.css';

const ELEMENT_PROP_TYPES = PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
]);

function getClassName(blockName, prefix, modList, componentProps) {
    const result = [styles[blockName]];

    for (const key of modList) {
        const propName = `${prefix}-${key}`;

        if (propName in componentProps) {
            result.push(
                classNames(componentProps[propName])
                    .split(' ')
                    .map((value) => styles[`${blockName}_${key}_${value}`])
            );
        }
    }

    return classNames(result);
}

function getPropTypes(prefix, modList) {
    const result = {};

    if (Array.isArray(modList)) {
        for (const key of modList) {
            result[`${prefix}-${key}`] = ELEMENT_PROP_TYPES;
        }
    }

    return result;
}

function createElement(tagName, blockName, modList) {
    const prefix = blockName.split('__')[0];

    function element(props) {
        return (
            React.createElement(tagName, {
                className: getClassName(blockName, prefix, modList, props),
            }, props.children)
        );
    }

    element.displayName = blockName;
    element.propTypes = getPropTypes(prefix, modList);

    return element;
}


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

const Grid = createElement('div', 'grid', ['column', 'size', 'direction', 'align', 'valign', 'wrap']);
const GridItem = createElement('div', 'grid__item', ['width', 'order']);

Grid.Item = GridItem;

export default Grid;
