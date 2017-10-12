import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ELEMEMT_PROP_PREFIX = 'ek';

const ELEMENT_PROP_TYPES = PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
]);

function getClassName(elementName, elementProps, componentProps) {
    const result = [elementName];

    for (const key of elementProps) {
        const propName = `${ELEMEMT_PROP_PREFIX}-${key}`;

        if (propName in componentProps) {
            result.push(
                classNames(componentProps[propName])
                    .split(' ')
                    .map((value) => `${elementName}_${key}_${value}`)
            );
        }
    }

    return classNames(result);
}

function getPropTypes(elementProps) {
    const result = {};

    if (Array.isArray(elementProps)) {
        for (const key of elementProps) {
            result[`${ELEMEMT_PROP_PREFIX}-${key}`] = ELEMENT_PROP_TYPES;
        }
    }

    return result;
}

function createElement(tagName, elementName, elementProps) {
    function element(props) {
        return (
            React.createElement(tagName, {
                className: getClassName(elementName, elementProps, props),
            }, props.children)
        );
    }

    element.displayName = elementName;
    element.propTypes = getPropTypes(elementProps);

    return element;
}


const Grid = createElement('div', 'grid', ['column', 'size', 'direction', 'align', 'valign', 'theme', 'wrap']);
const GridItem = createElement('div', 'grid__item', ['width']);

Grid.Item = GridItem;

export default Grid;
