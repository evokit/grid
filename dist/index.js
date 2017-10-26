(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global.Grid = factory(global.React,global.PropTypes,global.classNames));
}(this, (function (React,PropTypes,classNames) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

var styles = { "grid": "ui-grid", "grid__item": "ui-grid__item", "grid_align_left": "ui-grid_align_left", "grid_align_center": "ui-grid_align_center", "grid_align_right": "ui-grid_align_right", "grid_align_justify": "ui-grid_align_justify", "grid_valign_top": "ui-grid_valign_top", "grid_valign_middle": "ui-grid_valign_middle", "grid_valign_bottom": "ui-grid_valign_bottom", "grid_valign_baseline": "ui-grid_valign_baseline", "grid_valign_justify": "ui-grid_valign_justify", "grid_direction_row": "ui-grid_direction_row", "grid_direction_row-reverse": "ui-grid_direction_row-reverse", "grid_direction_column": "ui-grid_direction_column", "grid_direction_column-reverse": "ui-grid_direction_column-reverse", "grid_wrap_nowrap": "ui-grid_wrap_nowrap", "grid_wrap_wrap": "ui-grid_wrap_wrap", "grid_wrap_wrap-reverse": "ui-grid_wrap_wrap-reverse", "grid_size_xxs": "ui-grid_size_xxs", "grid_size_xs": "ui-grid_size_xs", "grid_size_s": "ui-grid_size_s", "grid_size_m": "ui-grid_size_m", "grid_size_l": "ui-grid_size_l", "grid_size_xl": "ui-grid_size_xl", "grid_size_xxl": "ui-grid_size_xxl", "grid_size_xxxl": "ui-grid_size_xxxl", "grid_column_1": "ui-grid_column_1", "grid_column_2": "ui-grid_column_2", "grid_column_3": "ui-grid_column_3", "grid_column_4": "ui-grid_column_4", "grid_column_5": "ui-grid_column_5", "grid_column_6": "ui-grid_column_6", "grid_column_7": "ui-grid_column_7", "grid_column_8": "ui-grid_column_8", "grid_column_9": "ui-grid_column_9", "grid_column_10": "ui-grid_column_10", "grid__item_width_1-1": "ui-grid__item_width_1-1", "grid__item_width_1-2": "ui-grid__item_width_1-2", "grid__item_width_1-3": "ui-grid__item_width_1-3", "grid__item_width_2-3": "ui-grid__item_width_2-3", "grid__item_width_1-4": "ui-grid__item_width_1-4", "grid__item_width_2-4": "ui-grid__item_width_2-4", "grid__item_width_3-4": "ui-grid__item_width_3-4", "grid__item_width_1-5": "ui-grid__item_width_1-5", "grid__item_width_2-5": "ui-grid__item_width_2-5", "grid__item_width_3-5": "ui-grid__item_width_3-5", "grid__item_width_4-5": "ui-grid__item_width_4-5", "grid__item_width_1-6": "ui-grid__item_width_1-6", "grid__item_width_2-6": "ui-grid__item_width_2-6", "grid__item_width_3-6": "ui-grid__item_width_3-6", "grid__item_width_4-6": "ui-grid__item_width_4-6", "grid__item_width_5-6": "ui-grid__item_width_5-6", "grid__item_width_1-7": "ui-grid__item_width_1-7", "grid__item_width_2-7": "ui-grid__item_width_2-7", "grid__item_width_3-7": "ui-grid__item_width_3-7", "grid__item_width_4-7": "ui-grid__item_width_4-7", "grid__item_width_5-7": "ui-grid__item_width_5-7", "grid__item_width_6-7": "ui-grid__item_width_6-7", "grid__item_width_1-8": "ui-grid__item_width_1-8", "grid__item_width_2-8": "ui-grid__item_width_2-8", "grid__item_width_3-8": "ui-grid__item_width_3-8", "grid__item_width_4-8": "ui-grid__item_width_4-8", "grid__item_width_5-8": "ui-grid__item_width_5-8", "grid__item_width_6-8": "ui-grid__item_width_6-8", "grid__item_width_7-8": "ui-grid__item_width_7-8", "grid__item_width_1-9": "ui-grid__item_width_1-9", "grid__item_width_2-9": "ui-grid__item_width_2-9", "grid__item_width_3-9": "ui-grid__item_width_3-9", "grid__item_width_4-9": "ui-grid__item_width_4-9", "grid__item_width_5-9": "ui-grid__item_width_5-9", "grid__item_width_6-9": "ui-grid__item_width_6-9", "grid__item_width_7-9": "ui-grid__item_width_7-9", "grid__item_width_8-9": "ui-grid__item_width_8-9", "grid__item_width_1-10": "ui-grid__item_width_1-10", "grid__item_width_2-10": "ui-grid__item_width_2-10", "grid__item_width_3-10": "ui-grid__item_width_3-10", "grid__item_width_4-10": "ui-grid__item_width_4-10", "grid__item_width_5-10": "ui-grid__item_width_5-10", "grid__item_width_6-10": "ui-grid__item_width_6-10", "grid__item_width_7-10": "ui-grid__item_width_7-10", "grid__item_width_8-10": "ui-grid__item_width_8-10", "grid__item_width_9-10": "ui-grid__item_width_9-10" };

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
 *            grid-theme={...}
 *            grid-wrap={...}
 *        >
 *            <Grid.Item>
 *                ...your content...
 *            </Grid.Item>
 *        </Grid>
 *    );
 * }
 *
 * */

var Grid = createElement('div', 'grid', ['column', 'size', 'direction', 'align', 'valign', 'theme', 'wrap']);
var GridItem = createElement('div', 'grid__item', ['width']);

Grid.Item = GridItem;

return Grid;

})));
