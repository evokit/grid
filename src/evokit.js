import React from 'react';
import PropTypes from 'prop-types';

export function objectWithoutProperties(props, list) {
    return Object.keys(props)
        .filter((key) => !list.includes(key))
        .reduce((obj, key) => {
            obj[key] = props[key];
            return obj;
        }, {});
}

export function createPropTypes(modList) {
    const result = {
        tagName: PropTypes.string,
        className: PropTypes.string,
    };

    modList.forEach((key) => {
        result[key] = PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string,
            PropTypes.object,
            PropTypes.number,
        ]);
    });

    return result;
}


export function createClassName(blockName, modList, props, styles) {
    const classList = [styles[blockName]];

    modList
        .filter((key) => {
            return Object.prototype.hasOwnProperty.call(props, key);
        })
        .forEach((key) => {
            const value = props[key];
            const type = typeof value;
            const modifier = `${blockName}_${key}`;

            if (type === 'string' || type === 'number') {
                classList.push(styles[`${modifier}_${value}`]);
            } else if (Array.isArray(value) && value.length) {
                value.forEach((modVal) => {
                    classList.push(styles[`${modifier}_${modVal}`]);
                });
            } else if (type === 'object') {
                Object.keys(value)
                    .filter((modVal) => value[modVal])
                    .forEach((modVal) => {
                        classList.push(styles[`${modifier}_${modVal}`]);
                    });
            }
        });

    if (props.className) {
        classList.push(props.className);
    }

    return classList.join(' ');
}


export function createElement({ type, name, modList, styles }) {
    function reactElement({ tagName = type, ...props }) {
        return React.createElement(
            tagName,
            {
                ...objectWithoutProperties(props, modList),
                className: createClassName(name, modList, props, styles),
            },
            props.children,
        );
    }

    reactElement.displayName = name;
    reactElement.propTypes = createPropTypes(modList);

    return reactElement;
}

export default {
    objectWithoutProperties,
    createClassName,
    createPropTypes,
    createElement,
};
