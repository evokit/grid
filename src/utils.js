import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function getClassName(blockName, props, modifiers, styles) {
    const result = [styles[blockName]];

    Object.keys(props)
        .filter((key) => modifiers.includes(key))
        .forEach((key) => {
            result.push(
                classNames(props[key])
                    .split(' ')
                    .map((value) => styles[`${blockName}_${key}_${value}`])
            );
        });

    return classNames(result);
}

export function getPropTypes(prefix, modifiers) {
    const result = {};

    for (const key of modifiers) {
        result[`${prefix}-${key}`] = PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string,
            PropTypes.object,
            PropTypes.number,
        ]);
    }

    return result;
}

export function filterProps(prefix, props) {
    const parser = new RegExp(`^${prefix}-([a-z-]+)`);
    const customProps = {};
    const cleanProps = {};

    Object.keys(props).forEach((key) => {
        const match = key.match(parser);

        if (match) {
            customProps[match[1]] = props[key];
        } else {
            cleanProps[key] = props[key];
        }
    });

    return { customProps, cleanProps };
}

export function createElement({ tagName, blockName, prefix, modifiers, styles }) {
    function element(props) {
        const { customProps, cleanProps } = filterProps(prefix, props);

        return (
            React.createElement(tagName, {
                className: getClassName(blockName, customProps, modifiers, styles),
                ...cleanProps,
            }, props.children)
        );
    }

    element.displayName = blockName;

    if (Array.isArray(modifiers)) {
        element.propTypes = getPropTypes(prefix, modifiers);
    }

    return element;
}
