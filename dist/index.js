(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global.Grid = factory(global.React,global.PropTypes,global.classNames));
}(this, (function (React,PropTypes,classNames) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

var gridStyles = { "grid": "ui-grid", "grid__item": "ui-grid__item", "grid_align_left": "ui-grid_align_left", "grid_align_center": "ui-grid_align_center", "grid_align_right": "ui-grid_align_right", "grid_align_justify": "ui-grid_align_justify", "grid_valign_top": "ui-grid_valign_top", "grid_valign_middle": "ui-grid_valign_middle", "grid_valign_bottom": "ui-grid_valign_bottom", "grid_valign_baseline": "ui-grid_valign_baseline", "grid_valign_justify": "ui-grid_valign_justify", "grid_direction_row": "ui-grid_direction_row", "grid_direction_row-reverse": "ui-grid_direction_row-reverse", "grid_direction_column": "ui-grid_direction_column", "grid_direction_column-reverse": "ui-grid_direction_column-reverse", "grid_wrap_nowrap": "ui-grid_wrap_nowrap", "grid_wrap_wrap": "ui-grid_wrap_wrap", "grid_wrap_wrap-reverse": "ui-grid_wrap_wrap-reverse", "grid_size_xxs": "ui-grid_size_xxs", "grid_size_xs": "ui-grid_size_xs", "grid_size_s": "ui-grid_size_s", "grid_size_m": "ui-grid_size_m", "grid_size_l": "ui-grid_size_l", "grid_size_xl": "ui-grid_size_xl", "grid_size_xxl": "ui-grid_size_xxl", "grid_size_xxxl": "ui-grid_size_xxxl", "grid_column_1": "ui-grid_column_1", "grid_column_2": "ui-grid_column_2", "grid_column_3": "ui-grid_column_3", "grid_column_4": "ui-grid_column_4", "grid_column_5": "ui-grid_column_5", "grid_column_6": "ui-grid_column_6", "grid_column_7": "ui-grid_column_7", "grid_column_8": "ui-grid_column_8", "grid_column_9": "ui-grid_column_9", "grid_column_10": "ui-grid_column_10", "grid__item_width_1-1": "ui-grid__item_width_1-1", "grid__item_width_1-2": "ui-grid__item_width_1-2", "grid__item_width_1-3": "ui-grid__item_width_1-3", "grid__item_width_2-3": "ui-grid__item_width_2-3", "grid__item_width_1-4": "ui-grid__item_width_1-4", "grid__item_width_2-4": "ui-grid__item_width_2-4", "grid__item_width_3-4": "ui-grid__item_width_3-4", "grid__item_width_1-5": "ui-grid__item_width_1-5", "grid__item_width_2-5": "ui-grid__item_width_2-5", "grid__item_width_3-5": "ui-grid__item_width_3-5", "grid__item_width_4-5": "ui-grid__item_width_4-5", "grid__item_width_1-6": "ui-grid__item_width_1-6", "grid__item_width_2-6": "ui-grid__item_width_2-6", "grid__item_width_3-6": "ui-grid__item_width_3-6", "grid__item_width_4-6": "ui-grid__item_width_4-6", "grid__item_width_5-6": "ui-grid__item_width_5-6", "grid__item_width_1-7": "ui-grid__item_width_1-7", "grid__item_width_2-7": "ui-grid__item_width_2-7", "grid__item_width_3-7": "ui-grid__item_width_3-7", "grid__item_width_4-7": "ui-grid__item_width_4-7", "grid__item_width_5-7": "ui-grid__item_width_5-7", "grid__item_width_6-7": "ui-grid__item_width_6-7", "grid__item_width_1-8": "ui-grid__item_width_1-8", "grid__item_width_2-8": "ui-grid__item_width_2-8", "grid__item_width_3-8": "ui-grid__item_width_3-8", "grid__item_width_4-8": "ui-grid__item_width_4-8", "grid__item_width_5-8": "ui-grid__item_width_5-8", "grid__item_width_6-8": "ui-grid__item_width_6-8", "grid__item_width_7-8": "ui-grid__item_width_7-8", "grid__item_width_1-9": "ui-grid__item_width_1-9", "grid__item_width_2-9": "ui-grid__item_width_2-9", "grid__item_width_3-9": "ui-grid__item_width_3-9", "grid__item_width_4-9": "ui-grid__item_width_4-9", "grid__item_width_5-9": "ui-grid__item_width_5-9", "grid__item_width_6-9": "ui-grid__item_width_6-9", "grid__item_width_7-9": "ui-grid__item_width_7-9", "grid__item_width_8-9": "ui-grid__item_width_8-9", "grid__item_width_1-10": "ui-grid__item_width_1-10", "grid__item_width_2-10": "ui-grid__item_width_2-10", "grid__item_width_3-10": "ui-grid__item_width_3-10", "grid__item_width_4-10": "ui-grid__item_width_4-10", "grid__item_width_5-10": "ui-grid__item_width_5-10", "grid__item_width_6-10": "ui-grid__item_width_6-10", "grid__item_width_7-10": "ui-grid__item_width_7-10", "grid__item_width_8-10": "ui-grid__item_width_8-10", "grid__item_width_9-10": "ui-grid__item_width_9-10", "grid__item_order_1": "ui-grid__item_order_1", "grid__item_order_2": "ui-grid__item_order_2", "grid__item_order_3": "ui-grid__item_order_3", "grid__item_order_4": "ui-grid__item_order_4", "grid__item_order_5": "ui-grid__item_order_5", "grid__item_order_6": "ui-grid__item_order_6", "grid__item_order_7": "ui-grid__item_order_7", "grid__item_order_8": "ui-grid__item_order_8", "grid__item_order_9": "ui-grid__item_order_9", "grid__item_order_10": "ui-grid__item_order_10", "grid_align_left@small": "ui-grid_align_left@small", "grid_align_center@small": "ui-grid_align_center@small", "grid_align_right@small": "ui-grid_align_right@small", "grid_align_justify@small": "ui-grid_align_justify@small", "grid_valign_top@small": "ui-grid_valign_top@small", "grid_valign_middle@small": "ui-grid_valign_middle@small", "grid_valign_bottom@small": "ui-grid_valign_bottom@small", "grid_valign_baseline@small": "ui-grid_valign_baseline@small", "grid_valign_justify@small": "ui-grid_valign_justify@small", "grid_direction_row@small": "ui-grid_direction_row@small", "grid_direction_row-reverse@small": "ui-grid_direction_row-reverse@small", "grid_direction_column@small": "ui-grid_direction_column@small", "grid_direction_column-reverse@small": "ui-grid_direction_column-reverse@small", "grid_wrap_nowrap@small": "ui-grid_wrap_nowrap@small", "grid_wrap_wrap@small": "ui-grid_wrap_wrap@small", "grid_wrap_wrap-reverse@small": "ui-grid_wrap_wrap-reverse@small", "grid_size_xxs@small": "ui-grid_size_xxs@small", "grid_size_xs@small": "ui-grid_size_xs@small", "grid_size_s@small": "ui-grid_size_s@small", "grid_size_m@small": "ui-grid_size_m@small", "grid_size_l@small": "ui-grid_size_l@small", "grid_size_xl@small": "ui-grid_size_xl@small", "grid_size_xxl@small": "ui-grid_size_xxl@small", "grid_size_xxxl@small": "ui-grid_size_xxxl@small", "grid_column_1@small": "ui-grid_column_1@small", "grid_column_2@small": "ui-grid_column_2@small", "grid_column_3@small": "ui-grid_column_3@small", "grid_column_4@small": "ui-grid_column_4@small", "grid_column_5@small": "ui-grid_column_5@small", "grid_column_6@small": "ui-grid_column_6@small", "grid_column_7@small": "ui-grid_column_7@small", "grid_column_8@small": "ui-grid_column_8@small", "grid_column_9@small": "ui-grid_column_9@small", "grid_column_10@small": "ui-grid_column_10@small", "grid__item_width_1-1@small": "ui-grid__item_width_1-1@small", "grid__item_width_1-2@small": "ui-grid__item_width_1-2@small", "grid__item_width_1-3@small": "ui-grid__item_width_1-3@small", "grid__item_width_2-3@small": "ui-grid__item_width_2-3@small", "grid__item_width_1-4@small": "ui-grid__item_width_1-4@small", "grid__item_width_2-4@small": "ui-grid__item_width_2-4@small", "grid__item_width_3-4@small": "ui-grid__item_width_3-4@small", "grid__item_width_1-5@small": "ui-grid__item_width_1-5@small", "grid__item_width_2-5@small": "ui-grid__item_width_2-5@small", "grid__item_width_3-5@small": "ui-grid__item_width_3-5@small", "grid__item_width_4-5@small": "ui-grid__item_width_4-5@small", "grid__item_width_1-6@small": "ui-grid__item_width_1-6@small", "grid__item_width_2-6@small": "ui-grid__item_width_2-6@small", "grid__item_width_3-6@small": "ui-grid__item_width_3-6@small", "grid__item_width_4-6@small": "ui-grid__item_width_4-6@small", "grid__item_width_5-6@small": "ui-grid__item_width_5-6@small", "grid__item_width_1-7@small": "ui-grid__item_width_1-7@small", "grid__item_width_2-7@small": "ui-grid__item_width_2-7@small", "grid__item_width_3-7@small": "ui-grid__item_width_3-7@small", "grid__item_width_4-7@small": "ui-grid__item_width_4-7@small", "grid__item_width_5-7@small": "ui-grid__item_width_5-7@small", "grid__item_width_6-7@small": "ui-grid__item_width_6-7@small", "grid__item_width_1-8@small": "ui-grid__item_width_1-8@small", "grid__item_width_2-8@small": "ui-grid__item_width_2-8@small", "grid__item_width_3-8@small": "ui-grid__item_width_3-8@small", "grid__item_width_4-8@small": "ui-grid__item_width_4-8@small", "grid__item_width_5-8@small": "ui-grid__item_width_5-8@small", "grid__item_width_6-8@small": "ui-grid__item_width_6-8@small", "grid__item_width_7-8@small": "ui-grid__item_width_7-8@small", "grid__item_width_1-9@small": "ui-grid__item_width_1-9@small", "grid__item_width_2-9@small": "ui-grid__item_width_2-9@small", "grid__item_width_3-9@small": "ui-grid__item_width_3-9@small", "grid__item_width_4-9@small": "ui-grid__item_width_4-9@small", "grid__item_width_5-9@small": "ui-grid__item_width_5-9@small", "grid__item_width_6-9@small": "ui-grid__item_width_6-9@small", "grid__item_width_7-9@small": "ui-grid__item_width_7-9@small", "grid__item_width_8-9@small": "ui-grid__item_width_8-9@small", "grid__item_width_1-10@small": "ui-grid__item_width_1-10@small", "grid__item_width_2-10@small": "ui-grid__item_width_2-10@small", "grid__item_width_3-10@small": "ui-grid__item_width_3-10@small", "grid__item_width_4-10@small": "ui-grid__item_width_4-10@small", "grid__item_width_5-10@small": "ui-grid__item_width_5-10@small", "grid__item_width_6-10@small": "ui-grid__item_width_6-10@small", "grid__item_width_7-10@small": "ui-grid__item_width_7-10@small", "grid__item_width_8-10@small": "ui-grid__item_width_8-10@small", "grid__item_width_9-10@small": "ui-grid__item_width_9-10@small", "grid__item_order_1@small": "ui-grid__item_order_1@small", "grid__item_order_2@small": "ui-grid__item_order_2@small", "grid__item_order_3@small": "ui-grid__item_order_3@small", "grid__item_order_4@small": "ui-grid__item_order_4@small", "grid__item_order_5@small": "ui-grid__item_order_5@small", "grid__item_order_6@small": "ui-grid__item_order_6@small", "grid__item_order_7@small": "ui-grid__item_order_7@small", "grid__item_order_8@small": "ui-grid__item_order_8@small", "grid__item_order_9@small": "ui-grid__item_order_9@small", "grid__item_order_10@small": "ui-grid__item_order_10@small", "grid_align_left@medium": "ui-grid_align_left@medium", "grid_align_center@medium": "ui-grid_align_center@medium", "grid_align_right@medium": "ui-grid_align_right@medium", "grid_align_justify@medium": "ui-grid_align_justify@medium", "grid_valign_top@medium": "ui-grid_valign_top@medium", "grid_valign_middle@medium": "ui-grid_valign_middle@medium", "grid_valign_bottom@medium": "ui-grid_valign_bottom@medium", "grid_valign_baseline@medium": "ui-grid_valign_baseline@medium", "grid_valign_justify@medium": "ui-grid_valign_justify@medium", "grid_direction_row@medium": "ui-grid_direction_row@medium", "grid_direction_row-reverse@medium": "ui-grid_direction_row-reverse@medium", "grid_direction_column@medium": "ui-grid_direction_column@medium", "grid_direction_column-reverse@medium": "ui-grid_direction_column-reverse@medium", "grid_wrap_nowrap@medium": "ui-grid_wrap_nowrap@medium", "grid_wrap_wrap@medium": "ui-grid_wrap_wrap@medium", "grid_wrap_wrap-reverse@medium": "ui-grid_wrap_wrap-reverse@medium", "grid_size_xxs@medium": "ui-grid_size_xxs@medium", "grid_size_xs@medium": "ui-grid_size_xs@medium", "grid_size_s@medium": "ui-grid_size_s@medium", "grid_size_m@medium": "ui-grid_size_m@medium", "grid_size_l@medium": "ui-grid_size_l@medium", "grid_size_xl@medium": "ui-grid_size_xl@medium", "grid_size_xxl@medium": "ui-grid_size_xxl@medium", "grid_size_xxxl@medium": "ui-grid_size_xxxl@medium", "grid_column_1@medium": "ui-grid_column_1@medium", "grid_column_2@medium": "ui-grid_column_2@medium", "grid_column_3@medium": "ui-grid_column_3@medium", "grid_column_4@medium": "ui-grid_column_4@medium", "grid_column_5@medium": "ui-grid_column_5@medium", "grid_column_6@medium": "ui-grid_column_6@medium", "grid_column_7@medium": "ui-grid_column_7@medium", "grid_column_8@medium": "ui-grid_column_8@medium", "grid_column_9@medium": "ui-grid_column_9@medium", "grid_column_10@medium": "ui-grid_column_10@medium", "grid__item_width_1-1@medium": "ui-grid__item_width_1-1@medium", "grid__item_width_1-2@medium": "ui-grid__item_width_1-2@medium", "grid__item_width_1-3@medium": "ui-grid__item_width_1-3@medium", "grid__item_width_2-3@medium": "ui-grid__item_width_2-3@medium", "grid__item_width_1-4@medium": "ui-grid__item_width_1-4@medium", "grid__item_width_2-4@medium": "ui-grid__item_width_2-4@medium", "grid__item_width_3-4@medium": "ui-grid__item_width_3-4@medium", "grid__item_width_1-5@medium": "ui-grid__item_width_1-5@medium", "grid__item_width_2-5@medium": "ui-grid__item_width_2-5@medium", "grid__item_width_3-5@medium": "ui-grid__item_width_3-5@medium", "grid__item_width_4-5@medium": "ui-grid__item_width_4-5@medium", "grid__item_width_1-6@medium": "ui-grid__item_width_1-6@medium", "grid__item_width_2-6@medium": "ui-grid__item_width_2-6@medium", "grid__item_width_3-6@medium": "ui-grid__item_width_3-6@medium", "grid__item_width_4-6@medium": "ui-grid__item_width_4-6@medium", "grid__item_width_5-6@medium": "ui-grid__item_width_5-6@medium", "grid__item_width_1-7@medium": "ui-grid__item_width_1-7@medium", "grid__item_width_2-7@medium": "ui-grid__item_width_2-7@medium", "grid__item_width_3-7@medium": "ui-grid__item_width_3-7@medium", "grid__item_width_4-7@medium": "ui-grid__item_width_4-7@medium", "grid__item_width_5-7@medium": "ui-grid__item_width_5-7@medium", "grid__item_width_6-7@medium": "ui-grid__item_width_6-7@medium", "grid__item_width_1-8@medium": "ui-grid__item_width_1-8@medium", "grid__item_width_2-8@medium": "ui-grid__item_width_2-8@medium", "grid__item_width_3-8@medium": "ui-grid__item_width_3-8@medium", "grid__item_width_4-8@medium": "ui-grid__item_width_4-8@medium", "grid__item_width_5-8@medium": "ui-grid__item_width_5-8@medium", "grid__item_width_6-8@medium": "ui-grid__item_width_6-8@medium", "grid__item_width_7-8@medium": "ui-grid__item_width_7-8@medium", "grid__item_width_1-9@medium": "ui-grid__item_width_1-9@medium", "grid__item_width_2-9@medium": "ui-grid__item_width_2-9@medium", "grid__item_width_3-9@medium": "ui-grid__item_width_3-9@medium", "grid__item_width_4-9@medium": "ui-grid__item_width_4-9@medium", "grid__item_width_5-9@medium": "ui-grid__item_width_5-9@medium", "grid__item_width_6-9@medium": "ui-grid__item_width_6-9@medium", "grid__item_width_7-9@medium": "ui-grid__item_width_7-9@medium", "grid__item_width_8-9@medium": "ui-grid__item_width_8-9@medium", "grid__item_width_1-10@medium": "ui-grid__item_width_1-10@medium", "grid__item_width_2-10@medium": "ui-grid__item_width_2-10@medium", "grid__item_width_3-10@medium": "ui-grid__item_width_3-10@medium", "grid__item_width_4-10@medium": "ui-grid__item_width_4-10@medium", "grid__item_width_5-10@medium": "ui-grid__item_width_5-10@medium", "grid__item_width_6-10@medium": "ui-grid__item_width_6-10@medium", "grid__item_width_7-10@medium": "ui-grid__item_width_7-10@medium", "grid__item_width_8-10@medium": "ui-grid__item_width_8-10@medium", "grid__item_width_9-10@medium": "ui-grid__item_width_9-10@medium", "grid__item_order_1@medium": "ui-grid__item_order_1@medium", "grid__item_order_2@medium": "ui-grid__item_order_2@medium", "grid__item_order_3@medium": "ui-grid__item_order_3@medium", "grid__item_order_4@medium": "ui-grid__item_order_4@medium", "grid__item_order_5@medium": "ui-grid__item_order_5@medium", "grid__item_order_6@medium": "ui-grid__item_order_6@medium", "grid__item_order_7@medium": "ui-grid__item_order_7@medium", "grid__item_order_8@medium": "ui-grid__item_order_8@medium", "grid__item_order_9@medium": "ui-grid__item_order_9@medium", "grid__item_order_10@medium": "ui-grid__item_order_10@medium", "grid_align_left@large": "ui-grid_align_left@large", "grid_align_center@large": "ui-grid_align_center@large", "grid_align_right@large": "ui-grid_align_right@large", "grid_align_justify@large": "ui-grid_align_justify@large", "grid_valign_top@large": "ui-grid_valign_top@large", "grid_valign_middle@large": "ui-grid_valign_middle@large", "grid_valign_bottom@large": "ui-grid_valign_bottom@large", "grid_valign_baseline@large": "ui-grid_valign_baseline@large", "grid_valign_justify@large": "ui-grid_valign_justify@large", "grid_direction_row@large": "ui-grid_direction_row@large", "grid_direction_row-reverse@large": "ui-grid_direction_row-reverse@large", "grid_direction_column@large": "ui-grid_direction_column@large", "grid_direction_column-reverse@large": "ui-grid_direction_column-reverse@large", "grid_wrap_nowrap@large": "ui-grid_wrap_nowrap@large", "grid_wrap_wrap@large": "ui-grid_wrap_wrap@large", "grid_wrap_wrap-reverse@large": "ui-grid_wrap_wrap-reverse@large", "grid_size_xxs@large": "ui-grid_size_xxs@large", "grid_size_xs@large": "ui-grid_size_xs@large", "grid_size_s@large": "ui-grid_size_s@large", "grid_size_m@large": "ui-grid_size_m@large", "grid_size_l@large": "ui-grid_size_l@large", "grid_size_xl@large": "ui-grid_size_xl@large", "grid_size_xxl@large": "ui-grid_size_xxl@large", "grid_size_xxxl@large": "ui-grid_size_xxxl@large", "grid_column_1@large": "ui-grid_column_1@large", "grid_column_2@large": "ui-grid_column_2@large", "grid_column_3@large": "ui-grid_column_3@large", "grid_column_4@large": "ui-grid_column_4@large", "grid_column_5@large": "ui-grid_column_5@large", "grid_column_6@large": "ui-grid_column_6@large", "grid_column_7@large": "ui-grid_column_7@large", "grid_column_8@large": "ui-grid_column_8@large", "grid_column_9@large": "ui-grid_column_9@large", "grid_column_10@large": "ui-grid_column_10@large", "grid__item_width_1-1@large": "ui-grid__item_width_1-1@large", "grid__item_width_1-2@large": "ui-grid__item_width_1-2@large", "grid__item_width_1-3@large": "ui-grid__item_width_1-3@large", "grid__item_width_2-3@large": "ui-grid__item_width_2-3@large", "grid__item_width_1-4@large": "ui-grid__item_width_1-4@large", "grid__item_width_2-4@large": "ui-grid__item_width_2-4@large", "grid__item_width_3-4@large": "ui-grid__item_width_3-4@large", "grid__item_width_1-5@large": "ui-grid__item_width_1-5@large", "grid__item_width_2-5@large": "ui-grid__item_width_2-5@large", "grid__item_width_3-5@large": "ui-grid__item_width_3-5@large", "grid__item_width_4-5@large": "ui-grid__item_width_4-5@large", "grid__item_width_1-6@large": "ui-grid__item_width_1-6@large", "grid__item_width_2-6@large": "ui-grid__item_width_2-6@large", "grid__item_width_3-6@large": "ui-grid__item_width_3-6@large", "grid__item_width_4-6@large": "ui-grid__item_width_4-6@large", "grid__item_width_5-6@large": "ui-grid__item_width_5-6@large", "grid__item_width_1-7@large": "ui-grid__item_width_1-7@large", "grid__item_width_2-7@large": "ui-grid__item_width_2-7@large", "grid__item_width_3-7@large": "ui-grid__item_width_3-7@large", "grid__item_width_4-7@large": "ui-grid__item_width_4-7@large", "grid__item_width_5-7@large": "ui-grid__item_width_5-7@large", "grid__item_width_6-7@large": "ui-grid__item_width_6-7@large", "grid__item_width_1-8@large": "ui-grid__item_width_1-8@large", "grid__item_width_2-8@large": "ui-grid__item_width_2-8@large", "grid__item_width_3-8@large": "ui-grid__item_width_3-8@large", "grid__item_width_4-8@large": "ui-grid__item_width_4-8@large", "grid__item_width_5-8@large": "ui-grid__item_width_5-8@large", "grid__item_width_6-8@large": "ui-grid__item_width_6-8@large", "grid__item_width_7-8@large": "ui-grid__item_width_7-8@large", "grid__item_width_1-9@large": "ui-grid__item_width_1-9@large", "grid__item_width_2-9@large": "ui-grid__item_width_2-9@large", "grid__item_width_3-9@large": "ui-grid__item_width_3-9@large", "grid__item_width_4-9@large": "ui-grid__item_width_4-9@large", "grid__item_width_5-9@large": "ui-grid__item_width_5-9@large", "grid__item_width_6-9@large": "ui-grid__item_width_6-9@large", "grid__item_width_7-9@large": "ui-grid__item_width_7-9@large", "grid__item_width_8-9@large": "ui-grid__item_width_8-9@large", "grid__item_width_1-10@large": "ui-grid__item_width_1-10@large", "grid__item_width_2-10@large": "ui-grid__item_width_2-10@large", "grid__item_width_3-10@large": "ui-grid__item_width_3-10@large", "grid__item_width_4-10@large": "ui-grid__item_width_4-10@large", "grid__item_width_5-10@large": "ui-grid__item_width_5-10@large", "grid__item_width_6-10@large": "ui-grid__item_width_6-10@large", "grid__item_width_7-10@large": "ui-grid__item_width_7-10@large", "grid__item_width_8-10@large": "ui-grid__item_width_8-10@large", "grid__item_width_9-10@large": "ui-grid__item_width_9-10@large", "grid__item_order_1@large": "ui-grid__item_order_1@large", "grid__item_order_2@large": "ui-grid__item_order_2@large", "grid__item_order_3@large": "ui-grid__item_order_3@large", "grid__item_order_4@large": "ui-grid__item_order_4@large", "grid__item_order_5@large": "ui-grid__item_order_5@large", "grid__item_order_6@large": "ui-grid__item_order_6@large", "grid__item_order_7@large": "ui-grid__item_order_7@large", "grid__item_order_8@large": "ui-grid__item_order_8@large", "grid__item_order_9@large": "ui-grid__item_order_9@large", "grid__item_order_10@large": "ui-grid__item_order_10@large", "grid_align_left@xlarge": "ui-grid_align_left@xlarge", "grid_align_center@xlarge": "ui-grid_align_center@xlarge", "grid_align_right@xlarge": "ui-grid_align_right@xlarge", "grid_align_justify@xlarge": "ui-grid_align_justify@xlarge", "grid_valign_top@xlarge": "ui-grid_valign_top@xlarge", "grid_valign_middle@xlarge": "ui-grid_valign_middle@xlarge", "grid_valign_bottom@xlarge": "ui-grid_valign_bottom@xlarge", "grid_valign_baseline@xlarge": "ui-grid_valign_baseline@xlarge", "grid_valign_justify@xlarge": "ui-grid_valign_justify@xlarge", "grid_direction_row@xlarge": "ui-grid_direction_row@xlarge", "grid_direction_row-reverse@xlarge": "ui-grid_direction_row-reverse@xlarge", "grid_direction_column@xlarge": "ui-grid_direction_column@xlarge", "grid_direction_column-reverse@xlarge": "ui-grid_direction_column-reverse@xlarge", "grid_wrap_nowrap@xlarge": "ui-grid_wrap_nowrap@xlarge", "grid_wrap_wrap@xlarge": "ui-grid_wrap_wrap@xlarge", "grid_wrap_wrap-reverse@xlarge": "ui-grid_wrap_wrap-reverse@xlarge", "grid_size_xxs@xlarge": "ui-grid_size_xxs@xlarge", "grid_size_xs@xlarge": "ui-grid_size_xs@xlarge", "grid_size_s@xlarge": "ui-grid_size_s@xlarge", "grid_size_m@xlarge": "ui-grid_size_m@xlarge", "grid_size_l@xlarge": "ui-grid_size_l@xlarge", "grid_size_xl@xlarge": "ui-grid_size_xl@xlarge", "grid_size_xxl@xlarge": "ui-grid_size_xxl@xlarge", "grid_size_xxxl@xlarge": "ui-grid_size_xxxl@xlarge", "grid_column_1@xlarge": "ui-grid_column_1@xlarge", "grid_column_2@xlarge": "ui-grid_column_2@xlarge", "grid_column_3@xlarge": "ui-grid_column_3@xlarge", "grid_column_4@xlarge": "ui-grid_column_4@xlarge", "grid_column_5@xlarge": "ui-grid_column_5@xlarge", "grid_column_6@xlarge": "ui-grid_column_6@xlarge", "grid_column_7@xlarge": "ui-grid_column_7@xlarge", "grid_column_8@xlarge": "ui-grid_column_8@xlarge", "grid_column_9@xlarge": "ui-grid_column_9@xlarge", "grid_column_10@xlarge": "ui-grid_column_10@xlarge", "grid__item_width_1-1@xlarge": "ui-grid__item_width_1-1@xlarge", "grid__item_width_1-2@xlarge": "ui-grid__item_width_1-2@xlarge", "grid__item_width_1-3@xlarge": "ui-grid__item_width_1-3@xlarge", "grid__item_width_2-3@xlarge": "ui-grid__item_width_2-3@xlarge", "grid__item_width_1-4@xlarge": "ui-grid__item_width_1-4@xlarge", "grid__item_width_2-4@xlarge": "ui-grid__item_width_2-4@xlarge", "grid__item_width_3-4@xlarge": "ui-grid__item_width_3-4@xlarge", "grid__item_width_1-5@xlarge": "ui-grid__item_width_1-5@xlarge", "grid__item_width_2-5@xlarge": "ui-grid__item_width_2-5@xlarge", "grid__item_width_3-5@xlarge": "ui-grid__item_width_3-5@xlarge", "grid__item_width_4-5@xlarge": "ui-grid__item_width_4-5@xlarge", "grid__item_width_1-6@xlarge": "ui-grid__item_width_1-6@xlarge", "grid__item_width_2-6@xlarge": "ui-grid__item_width_2-6@xlarge", "grid__item_width_3-6@xlarge": "ui-grid__item_width_3-6@xlarge", "grid__item_width_4-6@xlarge": "ui-grid__item_width_4-6@xlarge", "grid__item_width_5-6@xlarge": "ui-grid__item_width_5-6@xlarge", "grid__item_width_1-7@xlarge": "ui-grid__item_width_1-7@xlarge", "grid__item_width_2-7@xlarge": "ui-grid__item_width_2-7@xlarge", "grid__item_width_3-7@xlarge": "ui-grid__item_width_3-7@xlarge", "grid__item_width_4-7@xlarge": "ui-grid__item_width_4-7@xlarge", "grid__item_width_5-7@xlarge": "ui-grid__item_width_5-7@xlarge", "grid__item_width_6-7@xlarge": "ui-grid__item_width_6-7@xlarge", "grid__item_width_1-8@xlarge": "ui-grid__item_width_1-8@xlarge", "grid__item_width_2-8@xlarge": "ui-grid__item_width_2-8@xlarge", "grid__item_width_3-8@xlarge": "ui-grid__item_width_3-8@xlarge", "grid__item_width_4-8@xlarge": "ui-grid__item_width_4-8@xlarge", "grid__item_width_5-8@xlarge": "ui-grid__item_width_5-8@xlarge", "grid__item_width_6-8@xlarge": "ui-grid__item_width_6-8@xlarge", "grid__item_width_7-8@xlarge": "ui-grid__item_width_7-8@xlarge", "grid__item_width_1-9@xlarge": "ui-grid__item_width_1-9@xlarge", "grid__item_width_2-9@xlarge": "ui-grid__item_width_2-9@xlarge", "grid__item_width_3-9@xlarge": "ui-grid__item_width_3-9@xlarge", "grid__item_width_4-9@xlarge": "ui-grid__item_width_4-9@xlarge", "grid__item_width_5-9@xlarge": "ui-grid__item_width_5-9@xlarge", "grid__item_width_6-9@xlarge": "ui-grid__item_width_6-9@xlarge", "grid__item_width_7-9@xlarge": "ui-grid__item_width_7-9@xlarge", "grid__item_width_8-9@xlarge": "ui-grid__item_width_8-9@xlarge", "grid__item_width_1-10@xlarge": "ui-grid__item_width_1-10@xlarge", "grid__item_width_2-10@xlarge": "ui-grid__item_width_2-10@xlarge", "grid__item_width_3-10@xlarge": "ui-grid__item_width_3-10@xlarge", "grid__item_width_4-10@xlarge": "ui-grid__item_width_4-10@xlarge", "grid__item_width_5-10@xlarge": "ui-grid__item_width_5-10@xlarge", "grid__item_width_6-10@xlarge": "ui-grid__item_width_6-10@xlarge", "grid__item_width_7-10@xlarge": "ui-grid__item_width_7-10@xlarge", "grid__item_width_8-10@xlarge": "ui-grid__item_width_8-10@xlarge", "grid__item_width_9-10@xlarge": "ui-grid__item_width_9-10@xlarge", "grid__item_order_1@xlarge": "ui-grid__item_order_1@xlarge", "grid__item_order_2@xlarge": "ui-grid__item_order_2@xlarge", "grid__item_order_3@xlarge": "ui-grid__item_order_3@xlarge", "grid__item_order_4@xlarge": "ui-grid__item_order_4@xlarge", "grid__item_order_5@xlarge": "ui-grid__item_order_5@xlarge", "grid__item_order_6@xlarge": "ui-grid__item_order_6@xlarge", "grid__item_order_7@xlarge": "ui-grid__item_order_7@xlarge", "grid__item_order_8@xlarge": "ui-grid__item_order_8@xlarge", "grid__item_order_9@xlarge": "ui-grid__item_order_9@xlarge", "grid__item_order_10@xlarge": "ui-grid__item_order_10@xlarge", "grid_align_left@xxlarge": "ui-grid_align_left@xxlarge", "grid_align_center@xxlarge": "ui-grid_align_center@xxlarge", "grid_align_right@xxlarge": "ui-grid_align_right@xxlarge", "grid_align_justify@xxlarge": "ui-grid_align_justify@xxlarge", "grid_valign_top@xxlarge": "ui-grid_valign_top@xxlarge", "grid_valign_middle@xxlarge": "ui-grid_valign_middle@xxlarge", "grid_valign_bottom@xxlarge": "ui-grid_valign_bottom@xxlarge", "grid_valign_baseline@xxlarge": "ui-grid_valign_baseline@xxlarge", "grid_valign_justify@xxlarge": "ui-grid_valign_justify@xxlarge", "grid_direction_row@xxlarge": "ui-grid_direction_row@xxlarge", "grid_direction_row-reverse@xxlarge": "ui-grid_direction_row-reverse@xxlarge", "grid_direction_column@xxlarge": "ui-grid_direction_column@xxlarge", "grid_direction_column-reverse@xxlarge": "ui-grid_direction_column-reverse@xxlarge", "grid_wrap_nowrap@xxlarge": "ui-grid_wrap_nowrap@xxlarge", "grid_wrap_wrap@xxlarge": "ui-grid_wrap_wrap@xxlarge", "grid_wrap_wrap-reverse@xxlarge": "ui-grid_wrap_wrap-reverse@xxlarge", "grid_size_xxs@xxlarge": "ui-grid_size_xxs@xxlarge", "grid_size_xs@xxlarge": "ui-grid_size_xs@xxlarge", "grid_size_s@xxlarge": "ui-grid_size_s@xxlarge", "grid_size_m@xxlarge": "ui-grid_size_m@xxlarge", "grid_size_l@xxlarge": "ui-grid_size_l@xxlarge", "grid_size_xl@xxlarge": "ui-grid_size_xl@xxlarge", "grid_size_xxl@xxlarge": "ui-grid_size_xxl@xxlarge", "grid_size_xxxl@xxlarge": "ui-grid_size_xxxl@xxlarge", "grid_column_1@xxlarge": "ui-grid_column_1@xxlarge", "grid_column_2@xxlarge": "ui-grid_column_2@xxlarge", "grid_column_3@xxlarge": "ui-grid_column_3@xxlarge", "grid_column_4@xxlarge": "ui-grid_column_4@xxlarge", "grid_column_5@xxlarge": "ui-grid_column_5@xxlarge", "grid_column_6@xxlarge": "ui-grid_column_6@xxlarge", "grid_column_7@xxlarge": "ui-grid_column_7@xxlarge", "grid_column_8@xxlarge": "ui-grid_column_8@xxlarge", "grid_column_9@xxlarge": "ui-grid_column_9@xxlarge", "grid_column_10@xxlarge": "ui-grid_column_10@xxlarge", "grid__item_width_1-1@xxlarge": "ui-grid__item_width_1-1@xxlarge", "grid__item_width_1-2@xxlarge": "ui-grid__item_width_1-2@xxlarge", "grid__item_width_1-3@xxlarge": "ui-grid__item_width_1-3@xxlarge", "grid__item_width_2-3@xxlarge": "ui-grid__item_width_2-3@xxlarge", "grid__item_width_1-4@xxlarge": "ui-grid__item_width_1-4@xxlarge", "grid__item_width_2-4@xxlarge": "ui-grid__item_width_2-4@xxlarge", "grid__item_width_3-4@xxlarge": "ui-grid__item_width_3-4@xxlarge", "grid__item_width_1-5@xxlarge": "ui-grid__item_width_1-5@xxlarge", "grid__item_width_2-5@xxlarge": "ui-grid__item_width_2-5@xxlarge", "grid__item_width_3-5@xxlarge": "ui-grid__item_width_3-5@xxlarge", "grid__item_width_4-5@xxlarge": "ui-grid__item_width_4-5@xxlarge", "grid__item_width_1-6@xxlarge": "ui-grid__item_width_1-6@xxlarge", "grid__item_width_2-6@xxlarge": "ui-grid__item_width_2-6@xxlarge", "grid__item_width_3-6@xxlarge": "ui-grid__item_width_3-6@xxlarge", "grid__item_width_4-6@xxlarge": "ui-grid__item_width_4-6@xxlarge", "grid__item_width_5-6@xxlarge": "ui-grid__item_width_5-6@xxlarge", "grid__item_width_1-7@xxlarge": "ui-grid__item_width_1-7@xxlarge", "grid__item_width_2-7@xxlarge": "ui-grid__item_width_2-7@xxlarge", "grid__item_width_3-7@xxlarge": "ui-grid__item_width_3-7@xxlarge", "grid__item_width_4-7@xxlarge": "ui-grid__item_width_4-7@xxlarge", "grid__item_width_5-7@xxlarge": "ui-grid__item_width_5-7@xxlarge", "grid__item_width_6-7@xxlarge": "ui-grid__item_width_6-7@xxlarge", "grid__item_width_1-8@xxlarge": "ui-grid__item_width_1-8@xxlarge", "grid__item_width_2-8@xxlarge": "ui-grid__item_width_2-8@xxlarge", "grid__item_width_3-8@xxlarge": "ui-grid__item_width_3-8@xxlarge", "grid__item_width_4-8@xxlarge": "ui-grid__item_width_4-8@xxlarge", "grid__item_width_5-8@xxlarge": "ui-grid__item_width_5-8@xxlarge", "grid__item_width_6-8@xxlarge": "ui-grid__item_width_6-8@xxlarge", "grid__item_width_7-8@xxlarge": "ui-grid__item_width_7-8@xxlarge", "grid__item_width_1-9@xxlarge": "ui-grid__item_width_1-9@xxlarge", "grid__item_width_2-9@xxlarge": "ui-grid__item_width_2-9@xxlarge", "grid__item_width_3-9@xxlarge": "ui-grid__item_width_3-9@xxlarge", "grid__item_width_4-9@xxlarge": "ui-grid__item_width_4-9@xxlarge", "grid__item_width_5-9@xxlarge": "ui-grid__item_width_5-9@xxlarge", "grid__item_width_6-9@xxlarge": "ui-grid__item_width_6-9@xxlarge", "grid__item_width_7-9@xxlarge": "ui-grid__item_width_7-9@xxlarge", "grid__item_width_8-9@xxlarge": "ui-grid__item_width_8-9@xxlarge", "grid__item_width_1-10@xxlarge": "ui-grid__item_width_1-10@xxlarge", "grid__item_width_2-10@xxlarge": "ui-grid__item_width_2-10@xxlarge", "grid__item_width_3-10@xxlarge": "ui-grid__item_width_3-10@xxlarge", "grid__item_width_4-10@xxlarge": "ui-grid__item_width_4-10@xxlarge", "grid__item_width_5-10@xxlarge": "ui-grid__item_width_5-10@xxlarge", "grid__item_width_6-10@xxlarge": "ui-grid__item_width_6-10@xxlarge", "grid__item_width_7-10@xxlarge": "ui-grid__item_width_7-10@xxlarge", "grid__item_width_8-10@xxlarge": "ui-grid__item_width_8-10@xxlarge", "grid__item_width_9-10@xxlarge": "ui-grid__item_width_9-10@xxlarge", "grid__item_order_1@xxlarge": "ui-grid__item_order_1@xxlarge", "grid__item_order_2@xxlarge": "ui-grid__item_order_2@xxlarge", "grid__item_order_3@xxlarge": "ui-grid__item_order_3@xxlarge", "grid__item_order_4@xxlarge": "ui-grid__item_order_4@xxlarge", "grid__item_order_5@xxlarge": "ui-grid__item_order_5@xxlarge", "grid__item_order_6@xxlarge": "ui-grid__item_order_6@xxlarge", "grid__item_order_7@xxlarge": "ui-grid__item_order_7@xxlarge", "grid__item_order_8@xxlarge": "ui-grid__item_order_8@xxlarge", "grid__item_order_9@xxlarge": "ui-grid__item_order_9@xxlarge", "grid__item_order_10@xxlarge": "ui-grid__item_order_10@xxlarge", "grid_align_left@xxxlarge": "ui-grid_align_left@xxxlarge", "grid_align_center@xxxlarge": "ui-grid_align_center@xxxlarge", "grid_align_right@xxxlarge": "ui-grid_align_right@xxxlarge", "grid_align_justify@xxxlarge": "ui-grid_align_justify@xxxlarge", "grid_valign_top@xxxlarge": "ui-grid_valign_top@xxxlarge", "grid_valign_middle@xxxlarge": "ui-grid_valign_middle@xxxlarge", "grid_valign_bottom@xxxlarge": "ui-grid_valign_bottom@xxxlarge", "grid_valign_baseline@xxxlarge": "ui-grid_valign_baseline@xxxlarge", "grid_valign_justify@xxxlarge": "ui-grid_valign_justify@xxxlarge", "grid_direction_row@xxxlarge": "ui-grid_direction_row@xxxlarge", "grid_direction_row-reverse@xxxlarge": "ui-grid_direction_row-reverse@xxxlarge", "grid_direction_column@xxxlarge": "ui-grid_direction_column@xxxlarge", "grid_direction_column-reverse@xxxlarge": "ui-grid_direction_column-reverse@xxxlarge", "grid_wrap_nowrap@xxxlarge": "ui-grid_wrap_nowrap@xxxlarge", "grid_wrap_wrap@xxxlarge": "ui-grid_wrap_wrap@xxxlarge", "grid_wrap_wrap-reverse@xxxlarge": "ui-grid_wrap_wrap-reverse@xxxlarge", "grid_size_xxs@xxxlarge": "ui-grid_size_xxs@xxxlarge", "grid_size_xs@xxxlarge": "ui-grid_size_xs@xxxlarge", "grid_size_s@xxxlarge": "ui-grid_size_s@xxxlarge", "grid_size_m@xxxlarge": "ui-grid_size_m@xxxlarge", "grid_size_l@xxxlarge": "ui-grid_size_l@xxxlarge", "grid_size_xl@xxxlarge": "ui-grid_size_xl@xxxlarge", "grid_size_xxl@xxxlarge": "ui-grid_size_xxl@xxxlarge", "grid_size_xxxl@xxxlarge": "ui-grid_size_xxxl@xxxlarge", "grid_column_1@xxxlarge": "ui-grid_column_1@xxxlarge", "grid_column_2@xxxlarge": "ui-grid_column_2@xxxlarge", "grid_column_3@xxxlarge": "ui-grid_column_3@xxxlarge", "grid_column_4@xxxlarge": "ui-grid_column_4@xxxlarge", "grid_column_5@xxxlarge": "ui-grid_column_5@xxxlarge", "grid_column_6@xxxlarge": "ui-grid_column_6@xxxlarge", "grid_column_7@xxxlarge": "ui-grid_column_7@xxxlarge", "grid_column_8@xxxlarge": "ui-grid_column_8@xxxlarge", "grid_column_9@xxxlarge": "ui-grid_column_9@xxxlarge", "grid_column_10@xxxlarge": "ui-grid_column_10@xxxlarge", "grid__item_width_1-1@xxxlarge": "ui-grid__item_width_1-1@xxxlarge", "grid__item_width_1-2@xxxlarge": "ui-grid__item_width_1-2@xxxlarge", "grid__item_width_1-3@xxxlarge": "ui-grid__item_width_1-3@xxxlarge", "grid__item_width_2-3@xxxlarge": "ui-grid__item_width_2-3@xxxlarge", "grid__item_width_1-4@xxxlarge": "ui-grid__item_width_1-4@xxxlarge", "grid__item_width_2-4@xxxlarge": "ui-grid__item_width_2-4@xxxlarge", "grid__item_width_3-4@xxxlarge": "ui-grid__item_width_3-4@xxxlarge", "grid__item_width_1-5@xxxlarge": "ui-grid__item_width_1-5@xxxlarge", "grid__item_width_2-5@xxxlarge": "ui-grid__item_width_2-5@xxxlarge", "grid__item_width_3-5@xxxlarge": "ui-grid__item_width_3-5@xxxlarge", "grid__item_width_4-5@xxxlarge": "ui-grid__item_width_4-5@xxxlarge", "grid__item_width_1-6@xxxlarge": "ui-grid__item_width_1-6@xxxlarge", "grid__item_width_2-6@xxxlarge": "ui-grid__item_width_2-6@xxxlarge", "grid__item_width_3-6@xxxlarge": "ui-grid__item_width_3-6@xxxlarge", "grid__item_width_4-6@xxxlarge": "ui-grid__item_width_4-6@xxxlarge", "grid__item_width_5-6@xxxlarge": "ui-grid__item_width_5-6@xxxlarge", "grid__item_width_1-7@xxxlarge": "ui-grid__item_width_1-7@xxxlarge", "grid__item_width_2-7@xxxlarge": "ui-grid__item_width_2-7@xxxlarge", "grid__item_width_3-7@xxxlarge": "ui-grid__item_width_3-7@xxxlarge", "grid__item_width_4-7@xxxlarge": "ui-grid__item_width_4-7@xxxlarge", "grid__item_width_5-7@xxxlarge": "ui-grid__item_width_5-7@xxxlarge", "grid__item_width_6-7@xxxlarge": "ui-grid__item_width_6-7@xxxlarge", "grid__item_width_1-8@xxxlarge": "ui-grid__item_width_1-8@xxxlarge", "grid__item_width_2-8@xxxlarge": "ui-grid__item_width_2-8@xxxlarge", "grid__item_width_3-8@xxxlarge": "ui-grid__item_width_3-8@xxxlarge", "grid__item_width_4-8@xxxlarge": "ui-grid__item_width_4-8@xxxlarge", "grid__item_width_5-8@xxxlarge": "ui-grid__item_width_5-8@xxxlarge", "grid__item_width_6-8@xxxlarge": "ui-grid__item_width_6-8@xxxlarge", "grid__item_width_7-8@xxxlarge": "ui-grid__item_width_7-8@xxxlarge", "grid__item_width_1-9@xxxlarge": "ui-grid__item_width_1-9@xxxlarge", "grid__item_width_2-9@xxxlarge": "ui-grid__item_width_2-9@xxxlarge", "grid__item_width_3-9@xxxlarge": "ui-grid__item_width_3-9@xxxlarge", "grid__item_width_4-9@xxxlarge": "ui-grid__item_width_4-9@xxxlarge", "grid__item_width_5-9@xxxlarge": "ui-grid__item_width_5-9@xxxlarge", "grid__item_width_6-9@xxxlarge": "ui-grid__item_width_6-9@xxxlarge", "grid__item_width_7-9@xxxlarge": "ui-grid__item_width_7-9@xxxlarge", "grid__item_width_8-9@xxxlarge": "ui-grid__item_width_8-9@xxxlarge", "grid__item_width_1-10@xxxlarge": "ui-grid__item_width_1-10@xxxlarge", "grid__item_width_2-10@xxxlarge": "ui-grid__item_width_2-10@xxxlarge", "grid__item_width_3-10@xxxlarge": "ui-grid__item_width_3-10@xxxlarge", "grid__item_width_4-10@xxxlarge": "ui-grid__item_width_4-10@xxxlarge", "grid__item_width_5-10@xxxlarge": "ui-grid__item_width_5-10@xxxlarge", "grid__item_width_6-10@xxxlarge": "ui-grid__item_width_6-10@xxxlarge", "grid__item_width_7-10@xxxlarge": "ui-grid__item_width_7-10@xxxlarge", "grid__item_width_8-10@xxxlarge": "ui-grid__item_width_8-10@xxxlarge", "grid__item_width_9-10@xxxlarge": "ui-grid__item_width_9-10@xxxlarge", "grid__item_order_1@xxxlarge": "ui-grid__item_order_1@xxxlarge", "grid__item_order_2@xxxlarge": "ui-grid__item_order_2@xxxlarge", "grid__item_order_3@xxxlarge": "ui-grid__item_order_3@xxxlarge", "grid__item_order_4@xxxlarge": "ui-grid__item_order_4@xxxlarge", "grid__item_order_5@xxxlarge": "ui-grid__item_order_5@xxxlarge", "grid__item_order_6@xxxlarge": "ui-grid__item_order_6@xxxlarge", "grid__item_order_7@xxxlarge": "ui-grid__item_order_7@xxxlarge", "grid__item_order_8@xxxlarge": "ui-grid__item_order_8@xxxlarge", "grid__item_order_9@xxxlarge": "ui-grid__item_order_9@xxxlarge", "grid__item_order_10@xxxlarge": "ui-grid__item_order_10@xxxlarge" };

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function getClassName(blockName, props, modifiers, styles) {
    var result = [styles[blockName]];

    Object.keys(props).filter(function (key) {
        return modifiers.includes(key);
    }).forEach(function (key) {
        result.push(classNames(props[key]).split(' ').map(function (value) {
            return styles[blockName + '_' + key + '_' + value];
        }));
    });

    return classNames(result);
}

function getPropTypes(prefix, modifiers) {
    var result = {};

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = modifiers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            result[prefix + '-' + key] = PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object, PropTypes.number]);
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

    return result;
}

function filterProps(prefix, props) {
    var parser = new RegExp('^' + prefix + '-([a-z-]+)');
    var customProps = {};
    var cleanProps = {};

    Object.keys(props).forEach(function (key) {
        var match = key.match(parser);

        if (match) {
            customProps[match[1]] = props[key];
        } else {
            cleanProps[key] = props[key];
        }
    });

    return { customProps: customProps, cleanProps: cleanProps };
}

function createElement(_ref) {
    var tagName = _ref.tagName,
        blockName = _ref.blockName,
        prefix = _ref.prefix,
        modifiers = _ref.modifiers,
        styles = _ref.styles;

    function element(props) {
        var _filterProps = filterProps(prefix, props),
            customProps = _filterProps.customProps,
            cleanProps = _filterProps.cleanProps;

        return React.createElement(tagName, _extends({
            className: getClassName(blockName, customProps, modifiers, styles)
        }, cleanProps), props.children);
    }

    element.displayName = blockName;

    if (Array.isArray(modifiers)) {
        element.propTypes = getPropTypes(prefix, modifiers);
    }

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

var Grid = createElement({
    tagName: 'div',
    blockName: 'grid',
    prefix: 'grid',
    modifiers: ['column', 'size', 'direction', 'align', 'valign', 'wrap'],
    styles: gridStyles
});

var GridItem = createElement({
    tagName: 'div',
    blockName: 'grid__item',
    prefix: 'grid',
    modifiers: ['width', 'order'],
    styles: gridStyles
});

Grid.Item = GridItem;

return Grid;

})));
