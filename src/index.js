import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ELEMENT_PROP_TYPES = PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
]);

function getClassName(baseClassName, blockName, modList, componentProps) {
    const result = [baseClassName];

    for (const key of modList) {
        const propName = `${blockName}-${key}`;

        if (propName in componentProps) {
            result.push(
                classNames(componentProps[propName])
                    .split(' ')
                    .map((value) => `${result[0]}_${key}_${value}`)
            );
        }
    }

    return classNames(result);
}

function getPropTypes(blockName, modList) {
    const result = {};

    if (Array.isArray(modList)) {
        for (const key of modList) {
            result[`${blockName}-${key}`] = ELEMENT_PROP_TYPES;
        }
    }

    return result;
}

function createElement(tagName, blockName, elemName, modList) {
    const baseClassName = elemName ? `${blockName}__${elemName}` : blockName;

    function element(props) {
        return (
            React.createElement(tagName, {
                className: getClassName(baseClassName, blockName, modList, props),
            }, props.children)
        );
    }

    element.displayName = baseClassName;
    element.propTypes = getPropTypes(blockName, modList);

    return element;
}


const Grid = createElement('div', 'grid', null, ['column', 'size', 'direction', 'align', 'valign', 'theme', 'wrap']);
const GridItem = createElement('div', 'grid', 'item', ['width']);

Grid.Item = GridItem;

export default Grid;
