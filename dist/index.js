(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global.Grid = factory(global.React,global.PropTypes,global.classNames));
}(this, (function (React,PropTypes,classNames) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

var styles = { "grid": "ui-grid", "grid__item": "ui-grid__item", "grid_column_1": "ui-grid_column_1", "grid_column_2": "ui-grid_column_2", "grid_column_2@xxlarge": "ui-grid_column_2@xxlarge", "grid_column_3": "ui-grid_column_3", "grid_column_3@xxlarge": "ui-grid_column_3@xxlarge" };

var ELEMENT_PROP_TYPES = PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object, PropTypes.number]);

function getClassName(blockName, prefix, modList, componentProps) {
    var result = [styles[blockName]];

    var _loop = function _loop(key) {
        var propName = prefix + '-' + key;

        if (propName in componentProps) {
            result.push(classNames(componentProps[propName]).split(' ').map(function (value) {
                return styles[blockName + '_' + key + '_' + value];
            }));
        }
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = modList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            _loop(key);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return classNames(result);
}

function getPropTypes(prefix, modList) {
    var result = {};

    if (Array.isArray(modList)) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = modList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var key = _step2.value;

                result[prefix + '-' + key] = ELEMENT_PROP_TYPES;
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    }

    return result;
}

function createElement(tagName, blockName, modList) {
    var prefix = blockName.split('__')[0];

    function element(props) {
        return React.createElement(tagName, {
            className: getClassName(blockName, prefix, modList, props)
        }, props.children);
    }

    element.displayName = blockName;
    element.propTypes = getPropTypes(prefix, modList);

    return element;
}

var Grid = createElement('div', 'grid', ['column', 'size', 'direction', 'align', 'valign', 'theme', 'wrap']);
var GridItem = createElement('div', 'grid__item', ['width']);

Grid.Item = GridItem;

return Grid;

})));
