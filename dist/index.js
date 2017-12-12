(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types'], factory) :
	(global.Grid = factory(global.React,global.PropTypes));
}(this, (function (React,PropTypes) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

var styles = { "grid": "_grid_1uzdm_26", "grid__item": "_grid__item_1uzdm_32", "grid_align_left": "_grid_align_left_1uzdm_1", "grid_align_center": "_grid_align_center_1uzdm_1", "grid_align_right": "_grid_align_right_1uzdm_1", "grid_align_justify": "_grid_align_justify_1uzdm_1", "grid_valign_top": "_grid_valign_top_1uzdm_1", "grid_valign_middle": "_grid_valign_middle_1uzdm_1", "grid_valign_bottom": "_grid_valign_bottom_1uzdm_1", "grid_valign_baseline": "_grid_valign_baseline_1uzdm_1", "grid_valign_justify": "_grid_valign_justify_1uzdm_1", "grid_direction_row": "_grid_direction_row_1uzdm_1", "grid_direction_row-reverse": "_grid_direction_row-reverse_1uzdm_1", "grid_direction_column": "_grid_direction_column_1uzdm_1", "grid_direction_column-reverse": "_grid_direction_column-reverse_1uzdm_1", "grid_wrap_nowrap": "_grid_wrap_nowrap_1uzdm_1", "grid_wrap_wrap": "_grid_wrap_wrap_1uzdm_1", "grid_wrap_wrap-reverse": "_grid_wrap_wrap-reverse_1uzdm_1", "grid_size_xxs": "_grid_size_xxs_1uzdm_1", "grid_size_xs": "_grid_size_xs_1uzdm_1", "grid_size_s": "_grid_size_s_1uzdm_1", "grid_size_m": "_grid_size_m_1uzdm_1", "grid_size_l": "_grid_size_l_1uzdm_1", "grid_size_xl": "_grid_size_xl_1uzdm_1", "grid_size_xxl": "_grid_size_xxl_1uzdm_1", "grid_size_xxxl": "_grid_size_xxxl_1uzdm_1", "grid_column_1": "_grid_column_1_1uzdm_1", "grid_column_2": "_grid_column_2_1uzdm_1", "grid_column_3": "_grid_column_3_1uzdm_1", "grid_column_4": "_grid_column_4_1uzdm_1", "grid_column_5": "_grid_column_5_1uzdm_1", "grid_column_6": "_grid_column_6_1uzdm_1", "grid_column_7": "_grid_column_7_1uzdm_1", "grid_column_8": "_grid_column_8_1uzdm_1", "grid_column_9": "_grid_column_9_1uzdm_1", "grid_column_10": "_grid_column_10_1uzdm_1", "grid__item_width_1-1": "_grid__item_width_1-1_1uzdm_1", "grid__item_width_1-2": "_grid__item_width_1-2_1uzdm_1", "grid__item_width_1-3": "_grid__item_width_1-3_1uzdm_1", "grid__item_width_2-3": "_grid__item_width_2-3_1uzdm_1", "grid__item_width_1-4": "_grid__item_width_1-4_1uzdm_1", "grid__item_width_2-4": "_grid__item_width_2-4_1uzdm_1", "grid__item_width_3-4": "_grid__item_width_3-4_1uzdm_1", "grid__item_width_1-5": "_grid__item_width_1-5_1uzdm_1", "grid__item_width_2-5": "_grid__item_width_2-5_1uzdm_1", "grid__item_width_3-5": "_grid__item_width_3-5_1uzdm_1", "grid__item_width_4-5": "_grid__item_width_4-5_1uzdm_1", "grid__item_width_1-6": "_grid__item_width_1-6_1uzdm_1", "grid__item_width_2-6": "_grid__item_width_2-6_1uzdm_1", "grid__item_width_3-6": "_grid__item_width_3-6_1uzdm_1", "grid__item_width_4-6": "_grid__item_width_4-6_1uzdm_1", "grid__item_width_5-6": "_grid__item_width_5-6_1uzdm_1", "grid__item_width_1-7": "_grid__item_width_1-7_1uzdm_1", "grid__item_width_2-7": "_grid__item_width_2-7_1uzdm_1", "grid__item_width_3-7": "_grid__item_width_3-7_1uzdm_1", "grid__item_width_4-7": "_grid__item_width_4-7_1uzdm_1", "grid__item_width_5-7": "_grid__item_width_5-7_1uzdm_1", "grid__item_width_6-7": "_grid__item_width_6-7_1uzdm_1", "grid__item_width_1-8": "_grid__item_width_1-8_1uzdm_1", "grid__item_width_2-8": "_grid__item_width_2-8_1uzdm_1", "grid__item_width_3-8": "_grid__item_width_3-8_1uzdm_1", "grid__item_width_4-8": "_grid__item_width_4-8_1uzdm_1", "grid__item_width_5-8": "_grid__item_width_5-8_1uzdm_1", "grid__item_width_6-8": "_grid__item_width_6-8_1uzdm_1", "grid__item_width_7-8": "_grid__item_width_7-8_1uzdm_1", "grid__item_width_1-9": "_grid__item_width_1-9_1uzdm_1", "grid__item_width_2-9": "_grid__item_width_2-9_1uzdm_1", "grid__item_width_3-9": "_grid__item_width_3-9_1uzdm_1", "grid__item_width_4-9": "_grid__item_width_4-9_1uzdm_1", "grid__item_width_5-9": "_grid__item_width_5-9_1uzdm_1", "grid__item_width_6-9": "_grid__item_width_6-9_1uzdm_1", "grid__item_width_7-9": "_grid__item_width_7-9_1uzdm_1", "grid__item_width_8-9": "_grid__item_width_8-9_1uzdm_1", "grid__item_width_1-10": "_grid__item_width_1-10_1uzdm_1", "grid__item_width_2-10": "_grid__item_width_2-10_1uzdm_1", "grid__item_width_3-10": "_grid__item_width_3-10_1uzdm_1", "grid__item_width_4-10": "_grid__item_width_4-10_1uzdm_1", "grid__item_width_5-10": "_grid__item_width_5-10_1uzdm_1", "grid__item_width_6-10": "_grid__item_width_6-10_1uzdm_1", "grid__item_width_7-10": "_grid__item_width_7-10_1uzdm_1", "grid__item_width_8-10": "_grid__item_width_8-10_1uzdm_1", "grid__item_width_9-10": "_grid__item_width_9-10_1uzdm_1", "grid__item_order_1": "_grid__item_order_1_1uzdm_1", "grid__item_order_2": "_grid__item_order_2_1uzdm_1", "grid__item_order_3": "_grid__item_order_3_1uzdm_1", "grid__item_order_4": "_grid__item_order_4_1uzdm_1", "grid__item_order_5": "_grid__item_order_5_1uzdm_1", "grid__item_order_6": "_grid__item_order_6_1uzdm_1", "grid__item_order_7": "_grid__item_order_7_1uzdm_1", "grid__item_order_8": "_grid__item_order_8_1uzdm_1", "grid__item_order_9": "_grid__item_order_9_1uzdm_1", "grid__item_order_10": "_grid__item_order_10_1uzdm_1", "grid_align_left@small": "_grid_align_left@small_1uzdm_1", "grid_align_center@small": "_grid_align_center@small_1uzdm_1", "grid_align_right@small": "_grid_align_right@small_1uzdm_1", "grid_align_justify@small": "_grid_align_justify@small_1uzdm_1", "grid_valign_top@small": "_grid_valign_top@small_1uzdm_1", "grid_valign_middle@small": "_grid_valign_middle@small_1uzdm_1", "grid_valign_bottom@small": "_grid_valign_bottom@small_1uzdm_1", "grid_valign_baseline@small": "_grid_valign_baseline@small_1uzdm_1", "grid_valign_justify@small": "_grid_valign_justify@small_1uzdm_1", "grid_direction_row@small": "_grid_direction_row@small_1uzdm_1", "grid_direction_row-reverse@small": "_grid_direction_row-reverse@small_1uzdm_1", "grid_direction_column@small": "_grid_direction_column@small_1uzdm_1", "grid_direction_column-reverse@small": "_grid_direction_column-reverse@small_1uzdm_1", "grid_wrap_nowrap@small": "_grid_wrap_nowrap@small_1uzdm_1", "grid_wrap_wrap@small": "_grid_wrap_wrap@small_1uzdm_1", "grid_wrap_wrap-reverse@small": "_grid_wrap_wrap-reverse@small_1uzdm_1", "grid_size_xxs@small": "_grid_size_xxs@small_1uzdm_1", "grid_size_xs@small": "_grid_size_xs@small_1uzdm_1", "grid_size_s@small": "_grid_size_s@small_1uzdm_1", "grid_size_m@small": "_grid_size_m@small_1uzdm_1", "grid_size_l@small": "_grid_size_l@small_1uzdm_1", "grid_size_xl@small": "_grid_size_xl@small_1uzdm_1", "grid_size_xxl@small": "_grid_size_xxl@small_1uzdm_1", "grid_size_xxxl@small": "_grid_size_xxxl@small_1uzdm_1", "grid_column_1@small": "_grid_column_1@small_1uzdm_1", "grid_column_2@small": "_grid_column_2@small_1uzdm_1", "grid_column_3@small": "_grid_column_3@small_1uzdm_1", "grid_column_4@small": "_grid_column_4@small_1uzdm_1", "grid_column_5@small": "_grid_column_5@small_1uzdm_1", "grid_column_6@small": "_grid_column_6@small_1uzdm_1", "grid_column_7@small": "_grid_column_7@small_1uzdm_1", "grid_column_8@small": "_grid_column_8@small_1uzdm_1", "grid_column_9@small": "_grid_column_9@small_1uzdm_1", "grid_column_10@small": "_grid_column_10@small_1uzdm_1", "grid__item_width_1-1@small": "_grid__item_width_1-1@small_1uzdm_1", "grid__item_width_1-2@small": "_grid__item_width_1-2@small_1uzdm_1", "grid__item_width_1-3@small": "_grid__item_width_1-3@small_1uzdm_1", "grid__item_width_2-3@small": "_grid__item_width_2-3@small_1uzdm_1", "grid__item_width_1-4@small": "_grid__item_width_1-4@small_1uzdm_1", "grid__item_width_2-4@small": "_grid__item_width_2-4@small_1uzdm_1", "grid__item_width_3-4@small": "_grid__item_width_3-4@small_1uzdm_1", "grid__item_width_1-5@small": "_grid__item_width_1-5@small_1uzdm_1", "grid__item_width_2-5@small": "_grid__item_width_2-5@small_1uzdm_1", "grid__item_width_3-5@small": "_grid__item_width_3-5@small_1uzdm_1", "grid__item_width_4-5@small": "_grid__item_width_4-5@small_1uzdm_1", "grid__item_width_1-6@small": "_grid__item_width_1-6@small_1uzdm_1", "grid__item_width_2-6@small": "_grid__item_width_2-6@small_1uzdm_1", "grid__item_width_3-6@small": "_grid__item_width_3-6@small_1uzdm_1", "grid__item_width_4-6@small": "_grid__item_width_4-6@small_1uzdm_1", "grid__item_width_5-6@small": "_grid__item_width_5-6@small_1uzdm_1", "grid__item_width_1-7@small": "_grid__item_width_1-7@small_1uzdm_1", "grid__item_width_2-7@small": "_grid__item_width_2-7@small_1uzdm_1", "grid__item_width_3-7@small": "_grid__item_width_3-7@small_1uzdm_1", "grid__item_width_4-7@small": "_grid__item_width_4-7@small_1uzdm_1", "grid__item_width_5-7@small": "_grid__item_width_5-7@small_1uzdm_1", "grid__item_width_6-7@small": "_grid__item_width_6-7@small_1uzdm_1", "grid__item_width_1-8@small": "_grid__item_width_1-8@small_1uzdm_1", "grid__item_width_2-8@small": "_grid__item_width_2-8@small_1uzdm_1", "grid__item_width_3-8@small": "_grid__item_width_3-8@small_1uzdm_1", "grid__item_width_4-8@small": "_grid__item_width_4-8@small_1uzdm_1", "grid__item_width_5-8@small": "_grid__item_width_5-8@small_1uzdm_1", "grid__item_width_6-8@small": "_grid__item_width_6-8@small_1uzdm_1", "grid__item_width_7-8@small": "_grid__item_width_7-8@small_1uzdm_1", "grid__item_width_1-9@small": "_grid__item_width_1-9@small_1uzdm_1", "grid__item_width_2-9@small": "_grid__item_width_2-9@small_1uzdm_1", "grid__item_width_3-9@small": "_grid__item_width_3-9@small_1uzdm_1", "grid__item_width_4-9@small": "_grid__item_width_4-9@small_1uzdm_1", "grid__item_width_5-9@small": "_grid__item_width_5-9@small_1uzdm_1", "grid__item_width_6-9@small": "_grid__item_width_6-9@small_1uzdm_1", "grid__item_width_7-9@small": "_grid__item_width_7-9@small_1uzdm_1", "grid__item_width_8-9@small": "_grid__item_width_8-9@small_1uzdm_1", "grid__item_width_1-10@small": "_grid__item_width_1-10@small_1uzdm_1", "grid__item_width_2-10@small": "_grid__item_width_2-10@small_1uzdm_1", "grid__item_width_3-10@small": "_grid__item_width_3-10@small_1uzdm_1", "grid__item_width_4-10@small": "_grid__item_width_4-10@small_1uzdm_1", "grid__item_width_5-10@small": "_grid__item_width_5-10@small_1uzdm_1", "grid__item_width_6-10@small": "_grid__item_width_6-10@small_1uzdm_1", "grid__item_width_7-10@small": "_grid__item_width_7-10@small_1uzdm_1", "grid__item_width_8-10@small": "_grid__item_width_8-10@small_1uzdm_1", "grid__item_width_9-10@small": "_grid__item_width_9-10@small_1uzdm_1", "grid__item_order_1@small": "_grid__item_order_1@small_1uzdm_1", "grid__item_order_2@small": "_grid__item_order_2@small_1uzdm_1", "grid__item_order_3@small": "_grid__item_order_3@small_1uzdm_1", "grid__item_order_4@small": "_grid__item_order_4@small_1uzdm_1", "grid__item_order_5@small": "_grid__item_order_5@small_1uzdm_1", "grid__item_order_6@small": "_grid__item_order_6@small_1uzdm_1", "grid__item_order_7@small": "_grid__item_order_7@small_1uzdm_1", "grid__item_order_8@small": "_grid__item_order_8@small_1uzdm_1", "grid__item_order_9@small": "_grid__item_order_9@small_1uzdm_1", "grid__item_order_10@small": "_grid__item_order_10@small_1uzdm_1", "grid_align_left@medium": "_grid_align_left@medium_1uzdm_1", "grid_align_center@medium": "_grid_align_center@medium_1uzdm_1", "grid_align_right@medium": "_grid_align_right@medium_1uzdm_1", "grid_align_justify@medium": "_grid_align_justify@medium_1uzdm_1", "grid_valign_top@medium": "_grid_valign_top@medium_1uzdm_1", "grid_valign_middle@medium": "_grid_valign_middle@medium_1uzdm_1", "grid_valign_bottom@medium": "_grid_valign_bottom@medium_1uzdm_1", "grid_valign_baseline@medium": "_grid_valign_baseline@medium_1uzdm_1", "grid_valign_justify@medium": "_grid_valign_justify@medium_1uzdm_1", "grid_direction_row@medium": "_grid_direction_row@medium_1uzdm_1", "grid_direction_row-reverse@medium": "_grid_direction_row-reverse@medium_1uzdm_1", "grid_direction_column@medium": "_grid_direction_column@medium_1uzdm_1", "grid_direction_column-reverse@medium": "_grid_direction_column-reverse@medium_1uzdm_1", "grid_wrap_nowrap@medium": "_grid_wrap_nowrap@medium_1uzdm_1", "grid_wrap_wrap@medium": "_grid_wrap_wrap@medium_1uzdm_1", "grid_wrap_wrap-reverse@medium": "_grid_wrap_wrap-reverse@medium_1uzdm_1", "grid_size_xxs@medium": "_grid_size_xxs@medium_1uzdm_1", "grid_size_xs@medium": "_grid_size_xs@medium_1uzdm_1", "grid_size_s@medium": "_grid_size_s@medium_1uzdm_1", "grid_size_m@medium": "_grid_size_m@medium_1uzdm_1", "grid_size_l@medium": "_grid_size_l@medium_1uzdm_1", "grid_size_xl@medium": "_grid_size_xl@medium_1uzdm_1", "grid_size_xxl@medium": "_grid_size_xxl@medium_1uzdm_1", "grid_size_xxxl@medium": "_grid_size_xxxl@medium_1uzdm_1", "grid_column_1@medium": "_grid_column_1@medium_1uzdm_1", "grid_column_2@medium": "_grid_column_2@medium_1uzdm_1", "grid_column_3@medium": "_grid_column_3@medium_1uzdm_1", "grid_column_4@medium": "_grid_column_4@medium_1uzdm_1", "grid_column_5@medium": "_grid_column_5@medium_1uzdm_1", "grid_column_6@medium": "_grid_column_6@medium_1uzdm_1", "grid_column_7@medium": "_grid_column_7@medium_1uzdm_1", "grid_column_8@medium": "_grid_column_8@medium_1uzdm_1", "grid_column_9@medium": "_grid_column_9@medium_1uzdm_1", "grid_column_10@medium": "_grid_column_10@medium_1uzdm_1", "grid__item_width_1-1@medium": "_grid__item_width_1-1@medium_1uzdm_1", "grid__item_width_1-2@medium": "_grid__item_width_1-2@medium_1uzdm_1", "grid__item_width_1-3@medium": "_grid__item_width_1-3@medium_1uzdm_1", "grid__item_width_2-3@medium": "_grid__item_width_2-3@medium_1uzdm_1", "grid__item_width_1-4@medium": "_grid__item_width_1-4@medium_1uzdm_1", "grid__item_width_2-4@medium": "_grid__item_width_2-4@medium_1uzdm_1", "grid__item_width_3-4@medium": "_grid__item_width_3-4@medium_1uzdm_1", "grid__item_width_1-5@medium": "_grid__item_width_1-5@medium_1uzdm_1", "grid__item_width_2-5@medium": "_grid__item_width_2-5@medium_1uzdm_1", "grid__item_width_3-5@medium": "_grid__item_width_3-5@medium_1uzdm_1", "grid__item_width_4-5@medium": "_grid__item_width_4-5@medium_1uzdm_1", "grid__item_width_1-6@medium": "_grid__item_width_1-6@medium_1uzdm_1", "grid__item_width_2-6@medium": "_grid__item_width_2-6@medium_1uzdm_1", "grid__item_width_3-6@medium": "_grid__item_width_3-6@medium_1uzdm_1", "grid__item_width_4-6@medium": "_grid__item_width_4-6@medium_1uzdm_1", "grid__item_width_5-6@medium": "_grid__item_width_5-6@medium_1uzdm_1", "grid__item_width_1-7@medium": "_grid__item_width_1-7@medium_1uzdm_1", "grid__item_width_2-7@medium": "_grid__item_width_2-7@medium_1uzdm_1", "grid__item_width_3-7@medium": "_grid__item_width_3-7@medium_1uzdm_1", "grid__item_width_4-7@medium": "_grid__item_width_4-7@medium_1uzdm_1", "grid__item_width_5-7@medium": "_grid__item_width_5-7@medium_1uzdm_1", "grid__item_width_6-7@medium": "_grid__item_width_6-7@medium_1uzdm_1", "grid__item_width_1-8@medium": "_grid__item_width_1-8@medium_1uzdm_1", "grid__item_width_2-8@medium": "_grid__item_width_2-8@medium_1uzdm_1", "grid__item_width_3-8@medium": "_grid__item_width_3-8@medium_1uzdm_1", "grid__item_width_4-8@medium": "_grid__item_width_4-8@medium_1uzdm_1", "grid__item_width_5-8@medium": "_grid__item_width_5-8@medium_1uzdm_1", "grid__item_width_6-8@medium": "_grid__item_width_6-8@medium_1uzdm_1", "grid__item_width_7-8@medium": "_grid__item_width_7-8@medium_1uzdm_1", "grid__item_width_1-9@medium": "_grid__item_width_1-9@medium_1uzdm_1", "grid__item_width_2-9@medium": "_grid__item_width_2-9@medium_1uzdm_1", "grid__item_width_3-9@medium": "_grid__item_width_3-9@medium_1uzdm_1", "grid__item_width_4-9@medium": "_grid__item_width_4-9@medium_1uzdm_1", "grid__item_width_5-9@medium": "_grid__item_width_5-9@medium_1uzdm_1", "grid__item_width_6-9@medium": "_grid__item_width_6-9@medium_1uzdm_1", "grid__item_width_7-9@medium": "_grid__item_width_7-9@medium_1uzdm_1", "grid__item_width_8-9@medium": "_grid__item_width_8-9@medium_1uzdm_1", "grid__item_width_1-10@medium": "_grid__item_width_1-10@medium_1uzdm_1", "grid__item_width_2-10@medium": "_grid__item_width_2-10@medium_1uzdm_1", "grid__item_width_3-10@medium": "_grid__item_width_3-10@medium_1uzdm_1", "grid__item_width_4-10@medium": "_grid__item_width_4-10@medium_1uzdm_1", "grid__item_width_5-10@medium": "_grid__item_width_5-10@medium_1uzdm_1", "grid__item_width_6-10@medium": "_grid__item_width_6-10@medium_1uzdm_1", "grid__item_width_7-10@medium": "_grid__item_width_7-10@medium_1uzdm_1", "grid__item_width_8-10@medium": "_grid__item_width_8-10@medium_1uzdm_1", "grid__item_width_9-10@medium": "_grid__item_width_9-10@medium_1uzdm_1", "grid__item_order_1@medium": "_grid__item_order_1@medium_1uzdm_1", "grid__item_order_2@medium": "_grid__item_order_2@medium_1uzdm_1", "grid__item_order_3@medium": "_grid__item_order_3@medium_1uzdm_1", "grid__item_order_4@medium": "_grid__item_order_4@medium_1uzdm_1", "grid__item_order_5@medium": "_grid__item_order_5@medium_1uzdm_1", "grid__item_order_6@medium": "_grid__item_order_6@medium_1uzdm_1", "grid__item_order_7@medium": "_grid__item_order_7@medium_1uzdm_1", "grid__item_order_8@medium": "_grid__item_order_8@medium_1uzdm_1", "grid__item_order_9@medium": "_grid__item_order_9@medium_1uzdm_1", "grid__item_order_10@medium": "_grid__item_order_10@medium_1uzdm_1", "grid_align_left@large": "_grid_align_left@large_1uzdm_1", "grid_align_center@large": "_grid_align_center@large_1uzdm_1", "grid_align_right@large": "_grid_align_right@large_1uzdm_1", "grid_align_justify@large": "_grid_align_justify@large_1uzdm_1", "grid_valign_top@large": "_grid_valign_top@large_1uzdm_1", "grid_valign_middle@large": "_grid_valign_middle@large_1uzdm_1", "grid_valign_bottom@large": "_grid_valign_bottom@large_1uzdm_1", "grid_valign_baseline@large": "_grid_valign_baseline@large_1uzdm_1", "grid_valign_justify@large": "_grid_valign_justify@large_1uzdm_1", "grid_direction_row@large": "_grid_direction_row@large_1uzdm_1", "grid_direction_row-reverse@large": "_grid_direction_row-reverse@large_1uzdm_1", "grid_direction_column@large": "_grid_direction_column@large_1uzdm_1", "grid_direction_column-reverse@large": "_grid_direction_column-reverse@large_1uzdm_1", "grid_wrap_nowrap@large": "_grid_wrap_nowrap@large_1uzdm_1", "grid_wrap_wrap@large": "_grid_wrap_wrap@large_1uzdm_1", "grid_wrap_wrap-reverse@large": "_grid_wrap_wrap-reverse@large_1uzdm_1", "grid_size_xxs@large": "_grid_size_xxs@large_1uzdm_1", "grid_size_xs@large": "_grid_size_xs@large_1uzdm_1", "grid_size_s@large": "_grid_size_s@large_1uzdm_1", "grid_size_m@large": "_grid_size_m@large_1uzdm_1", "grid_size_l@large": "_grid_size_l@large_1uzdm_1", "grid_size_xl@large": "_grid_size_xl@large_1uzdm_1", "grid_size_xxl@large": "_grid_size_xxl@large_1uzdm_1", "grid_size_xxxl@large": "_grid_size_xxxl@large_1uzdm_1", "grid_column_1@large": "_grid_column_1@large_1uzdm_1", "grid_column_2@large": "_grid_column_2@large_1uzdm_1", "grid_column_3@large": "_grid_column_3@large_1uzdm_1", "grid_column_4@large": "_grid_column_4@large_1uzdm_1", "grid_column_5@large": "_grid_column_5@large_1uzdm_1", "grid_column_6@large": "_grid_column_6@large_1uzdm_1", "grid_column_7@large": "_grid_column_7@large_1uzdm_1", "grid_column_8@large": "_grid_column_8@large_1uzdm_1", "grid_column_9@large": "_grid_column_9@large_1uzdm_1", "grid_column_10@large": "_grid_column_10@large_1uzdm_1", "grid__item_width_1-1@large": "_grid__item_width_1-1@large_1uzdm_1", "grid__item_width_1-2@large": "_grid__item_width_1-2@large_1uzdm_1", "grid__item_width_1-3@large": "_grid__item_width_1-3@large_1uzdm_1", "grid__item_width_2-3@large": "_grid__item_width_2-3@large_1uzdm_1", "grid__item_width_1-4@large": "_grid__item_width_1-4@large_1uzdm_1", "grid__item_width_2-4@large": "_grid__item_width_2-4@large_1uzdm_1", "grid__item_width_3-4@large": "_grid__item_width_3-4@large_1uzdm_1", "grid__item_width_1-5@large": "_grid__item_width_1-5@large_1uzdm_1", "grid__item_width_2-5@large": "_grid__item_width_2-5@large_1uzdm_1", "grid__item_width_3-5@large": "_grid__item_width_3-5@large_1uzdm_1", "grid__item_width_4-5@large": "_grid__item_width_4-5@large_1uzdm_1", "grid__item_width_1-6@large": "_grid__item_width_1-6@large_1uzdm_1", "grid__item_width_2-6@large": "_grid__item_width_2-6@large_1uzdm_1", "grid__item_width_3-6@large": "_grid__item_width_3-6@large_1uzdm_1", "grid__item_width_4-6@large": "_grid__item_width_4-6@large_1uzdm_1", "grid__item_width_5-6@large": "_grid__item_width_5-6@large_1uzdm_1", "grid__item_width_1-7@large": "_grid__item_width_1-7@large_1uzdm_1", "grid__item_width_2-7@large": "_grid__item_width_2-7@large_1uzdm_1", "grid__item_width_3-7@large": "_grid__item_width_3-7@large_1uzdm_1", "grid__item_width_4-7@large": "_grid__item_width_4-7@large_1uzdm_1", "grid__item_width_5-7@large": "_grid__item_width_5-7@large_1uzdm_1", "grid__item_width_6-7@large": "_grid__item_width_6-7@large_1uzdm_1", "grid__item_width_1-8@large": "_grid__item_width_1-8@large_1uzdm_1", "grid__item_width_2-8@large": "_grid__item_width_2-8@large_1uzdm_1", "grid__item_width_3-8@large": "_grid__item_width_3-8@large_1uzdm_1", "grid__item_width_4-8@large": "_grid__item_width_4-8@large_1uzdm_1", "grid__item_width_5-8@large": "_grid__item_width_5-8@large_1uzdm_1", "grid__item_width_6-8@large": "_grid__item_width_6-8@large_1uzdm_1", "grid__item_width_7-8@large": "_grid__item_width_7-8@large_1uzdm_1", "grid__item_width_1-9@large": "_grid__item_width_1-9@large_1uzdm_1", "grid__item_width_2-9@large": "_grid__item_width_2-9@large_1uzdm_1", "grid__item_width_3-9@large": "_grid__item_width_3-9@large_1uzdm_1", "grid__item_width_4-9@large": "_grid__item_width_4-9@large_1uzdm_1", "grid__item_width_5-9@large": "_grid__item_width_5-9@large_1uzdm_1", "grid__item_width_6-9@large": "_grid__item_width_6-9@large_1uzdm_1", "grid__item_width_7-9@large": "_grid__item_width_7-9@large_1uzdm_1", "grid__item_width_8-9@large": "_grid__item_width_8-9@large_1uzdm_1", "grid__item_width_1-10@large": "_grid__item_width_1-10@large_1uzdm_1", "grid__item_width_2-10@large": "_grid__item_width_2-10@large_1uzdm_1", "grid__item_width_3-10@large": "_grid__item_width_3-10@large_1uzdm_1", "grid__item_width_4-10@large": "_grid__item_width_4-10@large_1uzdm_1", "grid__item_width_5-10@large": "_grid__item_width_5-10@large_1uzdm_1", "grid__item_width_6-10@large": "_grid__item_width_6-10@large_1uzdm_1", "grid__item_width_7-10@large": "_grid__item_width_7-10@large_1uzdm_1", "grid__item_width_8-10@large": "_grid__item_width_8-10@large_1uzdm_1", "grid__item_width_9-10@large": "_grid__item_width_9-10@large_1uzdm_1", "grid__item_order_1@large": "_grid__item_order_1@large_1uzdm_1", "grid__item_order_2@large": "_grid__item_order_2@large_1uzdm_1", "grid__item_order_3@large": "_grid__item_order_3@large_1uzdm_1", "grid__item_order_4@large": "_grid__item_order_4@large_1uzdm_1", "grid__item_order_5@large": "_grid__item_order_5@large_1uzdm_1", "grid__item_order_6@large": "_grid__item_order_6@large_1uzdm_1", "grid__item_order_7@large": "_grid__item_order_7@large_1uzdm_1", "grid__item_order_8@large": "_grid__item_order_8@large_1uzdm_1", "grid__item_order_9@large": "_grid__item_order_9@large_1uzdm_1", "grid__item_order_10@large": "_grid__item_order_10@large_1uzdm_1", "grid_align_left@xlarge": "_grid_align_left@xlarge_1uzdm_1", "grid_align_center@xlarge": "_grid_align_center@xlarge_1uzdm_1", "grid_align_right@xlarge": "_grid_align_right@xlarge_1uzdm_1", "grid_align_justify@xlarge": "_grid_align_justify@xlarge_1uzdm_1", "grid_valign_top@xlarge": "_grid_valign_top@xlarge_1uzdm_1", "grid_valign_middle@xlarge": "_grid_valign_middle@xlarge_1uzdm_1", "grid_valign_bottom@xlarge": "_grid_valign_bottom@xlarge_1uzdm_1", "grid_valign_baseline@xlarge": "_grid_valign_baseline@xlarge_1uzdm_1", "grid_valign_justify@xlarge": "_grid_valign_justify@xlarge_1uzdm_1", "grid_direction_row@xlarge": "_grid_direction_row@xlarge_1uzdm_1", "grid_direction_row-reverse@xlarge": "_grid_direction_row-reverse@xlarge_1uzdm_1", "grid_direction_column@xlarge": "_grid_direction_column@xlarge_1uzdm_1", "grid_direction_column-reverse@xlarge": "_grid_direction_column-reverse@xlarge_1uzdm_1", "grid_wrap_nowrap@xlarge": "_grid_wrap_nowrap@xlarge_1uzdm_1", "grid_wrap_wrap@xlarge": "_grid_wrap_wrap@xlarge_1uzdm_1", "grid_wrap_wrap-reverse@xlarge": "_grid_wrap_wrap-reverse@xlarge_1uzdm_1", "grid_size_xxs@xlarge": "_grid_size_xxs@xlarge_1uzdm_1", "grid_size_xs@xlarge": "_grid_size_xs@xlarge_1uzdm_1", "grid_size_s@xlarge": "_grid_size_s@xlarge_1uzdm_1", "grid_size_m@xlarge": "_grid_size_m@xlarge_1uzdm_1", "grid_size_l@xlarge": "_grid_size_l@xlarge_1uzdm_1", "grid_size_xl@xlarge": "_grid_size_xl@xlarge_1uzdm_1", "grid_size_xxl@xlarge": "_grid_size_xxl@xlarge_1uzdm_1", "grid_size_xxxl@xlarge": "_grid_size_xxxl@xlarge_1uzdm_1", "grid_column_1@xlarge": "_grid_column_1@xlarge_1uzdm_1", "grid_column_2@xlarge": "_grid_column_2@xlarge_1uzdm_1", "grid_column_3@xlarge": "_grid_column_3@xlarge_1uzdm_1", "grid_column_4@xlarge": "_grid_column_4@xlarge_1uzdm_1", "grid_column_5@xlarge": "_grid_column_5@xlarge_1uzdm_1", "grid_column_6@xlarge": "_grid_column_6@xlarge_1uzdm_1", "grid_column_7@xlarge": "_grid_column_7@xlarge_1uzdm_1", "grid_column_8@xlarge": "_grid_column_8@xlarge_1uzdm_1", "grid_column_9@xlarge": "_grid_column_9@xlarge_1uzdm_1", "grid_column_10@xlarge": "_grid_column_10@xlarge_1uzdm_1", "grid__item_width_1-1@xlarge": "_grid__item_width_1-1@xlarge_1uzdm_1", "grid__item_width_1-2@xlarge": "_grid__item_width_1-2@xlarge_1uzdm_1", "grid__item_width_1-3@xlarge": "_grid__item_width_1-3@xlarge_1uzdm_1", "grid__item_width_2-3@xlarge": "_grid__item_width_2-3@xlarge_1uzdm_1", "grid__item_width_1-4@xlarge": "_grid__item_width_1-4@xlarge_1uzdm_1", "grid__item_width_2-4@xlarge": "_grid__item_width_2-4@xlarge_1uzdm_1", "grid__item_width_3-4@xlarge": "_grid__item_width_3-4@xlarge_1uzdm_1", "grid__item_width_1-5@xlarge": "_grid__item_width_1-5@xlarge_1uzdm_1", "grid__item_width_2-5@xlarge": "_grid__item_width_2-5@xlarge_1uzdm_1", "grid__item_width_3-5@xlarge": "_grid__item_width_3-5@xlarge_1uzdm_1", "grid__item_width_4-5@xlarge": "_grid__item_width_4-5@xlarge_1uzdm_1", "grid__item_width_1-6@xlarge": "_grid__item_width_1-6@xlarge_1uzdm_1", "grid__item_width_2-6@xlarge": "_grid__item_width_2-6@xlarge_1uzdm_1", "grid__item_width_3-6@xlarge": "_grid__item_width_3-6@xlarge_1uzdm_1", "grid__item_width_4-6@xlarge": "_grid__item_width_4-6@xlarge_1uzdm_1", "grid__item_width_5-6@xlarge": "_grid__item_width_5-6@xlarge_1uzdm_1", "grid__item_width_1-7@xlarge": "_grid__item_width_1-7@xlarge_1uzdm_1", "grid__item_width_2-7@xlarge": "_grid__item_width_2-7@xlarge_1uzdm_1", "grid__item_width_3-7@xlarge": "_grid__item_width_3-7@xlarge_1uzdm_1", "grid__item_width_4-7@xlarge": "_grid__item_width_4-7@xlarge_1uzdm_1", "grid__item_width_5-7@xlarge": "_grid__item_width_5-7@xlarge_1uzdm_1", "grid__item_width_6-7@xlarge": "_grid__item_width_6-7@xlarge_1uzdm_1", "grid__item_width_1-8@xlarge": "_grid__item_width_1-8@xlarge_1uzdm_1", "grid__item_width_2-8@xlarge": "_grid__item_width_2-8@xlarge_1uzdm_1", "grid__item_width_3-8@xlarge": "_grid__item_width_3-8@xlarge_1uzdm_1", "grid__item_width_4-8@xlarge": "_grid__item_width_4-8@xlarge_1uzdm_1", "grid__item_width_5-8@xlarge": "_grid__item_width_5-8@xlarge_1uzdm_1", "grid__item_width_6-8@xlarge": "_grid__item_width_6-8@xlarge_1uzdm_1", "grid__item_width_7-8@xlarge": "_grid__item_width_7-8@xlarge_1uzdm_1", "grid__item_width_1-9@xlarge": "_grid__item_width_1-9@xlarge_1uzdm_1", "grid__item_width_2-9@xlarge": "_grid__item_width_2-9@xlarge_1uzdm_1", "grid__item_width_3-9@xlarge": "_grid__item_width_3-9@xlarge_1uzdm_1", "grid__item_width_4-9@xlarge": "_grid__item_width_4-9@xlarge_1uzdm_1", "grid__item_width_5-9@xlarge": "_grid__item_width_5-9@xlarge_1uzdm_1", "grid__item_width_6-9@xlarge": "_grid__item_width_6-9@xlarge_1uzdm_1", "grid__item_width_7-9@xlarge": "_grid__item_width_7-9@xlarge_1uzdm_1", "grid__item_width_8-9@xlarge": "_grid__item_width_8-9@xlarge_1uzdm_1", "grid__item_width_1-10@xlarge": "_grid__item_width_1-10@xlarge_1uzdm_1", "grid__item_width_2-10@xlarge": "_grid__item_width_2-10@xlarge_1uzdm_1", "grid__item_width_3-10@xlarge": "_grid__item_width_3-10@xlarge_1uzdm_1", "grid__item_width_4-10@xlarge": "_grid__item_width_4-10@xlarge_1uzdm_1", "grid__item_width_5-10@xlarge": "_grid__item_width_5-10@xlarge_1uzdm_1", "grid__item_width_6-10@xlarge": "_grid__item_width_6-10@xlarge_1uzdm_1", "grid__item_width_7-10@xlarge": "_grid__item_width_7-10@xlarge_1uzdm_1", "grid__item_width_8-10@xlarge": "_grid__item_width_8-10@xlarge_1uzdm_1", "grid__item_width_9-10@xlarge": "_grid__item_width_9-10@xlarge_1uzdm_1", "grid__item_order_1@xlarge": "_grid__item_order_1@xlarge_1uzdm_1", "grid__item_order_2@xlarge": "_grid__item_order_2@xlarge_1uzdm_1", "grid__item_order_3@xlarge": "_grid__item_order_3@xlarge_1uzdm_1", "grid__item_order_4@xlarge": "_grid__item_order_4@xlarge_1uzdm_1", "grid__item_order_5@xlarge": "_grid__item_order_5@xlarge_1uzdm_1", "grid__item_order_6@xlarge": "_grid__item_order_6@xlarge_1uzdm_1", "grid__item_order_7@xlarge": "_grid__item_order_7@xlarge_1uzdm_1", "grid__item_order_8@xlarge": "_grid__item_order_8@xlarge_1uzdm_1", "grid__item_order_9@xlarge": "_grid__item_order_9@xlarge_1uzdm_1", "grid__item_order_10@xlarge": "_grid__item_order_10@xlarge_1uzdm_1", "grid_align_left@xxlarge": "_grid_align_left@xxlarge_1uzdm_1", "grid_align_center@xxlarge": "_grid_align_center@xxlarge_1uzdm_1", "grid_align_right@xxlarge": "_grid_align_right@xxlarge_1uzdm_1", "grid_align_justify@xxlarge": "_grid_align_justify@xxlarge_1uzdm_1", "grid_valign_top@xxlarge": "_grid_valign_top@xxlarge_1uzdm_1", "grid_valign_middle@xxlarge": "_grid_valign_middle@xxlarge_1uzdm_1", "grid_valign_bottom@xxlarge": "_grid_valign_bottom@xxlarge_1uzdm_1", "grid_valign_baseline@xxlarge": "_grid_valign_baseline@xxlarge_1uzdm_1", "grid_valign_justify@xxlarge": "_grid_valign_justify@xxlarge_1uzdm_1", "grid_direction_row@xxlarge": "_grid_direction_row@xxlarge_1uzdm_1", "grid_direction_row-reverse@xxlarge": "_grid_direction_row-reverse@xxlarge_1uzdm_1", "grid_direction_column@xxlarge": "_grid_direction_column@xxlarge_1uzdm_1", "grid_direction_column-reverse@xxlarge": "_grid_direction_column-reverse@xxlarge_1uzdm_1", "grid_wrap_nowrap@xxlarge": "_grid_wrap_nowrap@xxlarge_1uzdm_1", "grid_wrap_wrap@xxlarge": "_grid_wrap_wrap@xxlarge_1uzdm_1", "grid_wrap_wrap-reverse@xxlarge": "_grid_wrap_wrap-reverse@xxlarge_1uzdm_1", "grid_size_xxs@xxlarge": "_grid_size_xxs@xxlarge_1uzdm_1", "grid_size_xs@xxlarge": "_grid_size_xs@xxlarge_1uzdm_1", "grid_size_s@xxlarge": "_grid_size_s@xxlarge_1uzdm_1", "grid_size_m@xxlarge": "_grid_size_m@xxlarge_1uzdm_1", "grid_size_l@xxlarge": "_grid_size_l@xxlarge_1uzdm_1", "grid_size_xl@xxlarge": "_grid_size_xl@xxlarge_1uzdm_1", "grid_size_xxl@xxlarge": "_grid_size_xxl@xxlarge_1uzdm_1", "grid_size_xxxl@xxlarge": "_grid_size_xxxl@xxlarge_1uzdm_1", "grid_column_1@xxlarge": "_grid_column_1@xxlarge_1uzdm_1", "grid_column_2@xxlarge": "_grid_column_2@xxlarge_1uzdm_1", "grid_column_3@xxlarge": "_grid_column_3@xxlarge_1uzdm_1", "grid_column_4@xxlarge": "_grid_column_4@xxlarge_1uzdm_1", "grid_column_5@xxlarge": "_grid_column_5@xxlarge_1uzdm_1", "grid_column_6@xxlarge": "_grid_column_6@xxlarge_1uzdm_1", "grid_column_7@xxlarge": "_grid_column_7@xxlarge_1uzdm_1", "grid_column_8@xxlarge": "_grid_column_8@xxlarge_1uzdm_1", "grid_column_9@xxlarge": "_grid_column_9@xxlarge_1uzdm_1", "grid_column_10@xxlarge": "_grid_column_10@xxlarge_1uzdm_1", "grid__item_width_1-1@xxlarge": "_grid__item_width_1-1@xxlarge_1uzdm_1", "grid__item_width_1-2@xxlarge": "_grid__item_width_1-2@xxlarge_1uzdm_1", "grid__item_width_1-3@xxlarge": "_grid__item_width_1-3@xxlarge_1uzdm_1", "grid__item_width_2-3@xxlarge": "_grid__item_width_2-3@xxlarge_1uzdm_1", "grid__item_width_1-4@xxlarge": "_grid__item_width_1-4@xxlarge_1uzdm_1", "grid__item_width_2-4@xxlarge": "_grid__item_width_2-4@xxlarge_1uzdm_1", "grid__item_width_3-4@xxlarge": "_grid__item_width_3-4@xxlarge_1uzdm_1", "grid__item_width_1-5@xxlarge": "_grid__item_width_1-5@xxlarge_1uzdm_1", "grid__item_width_2-5@xxlarge": "_grid__item_width_2-5@xxlarge_1uzdm_1", "grid__item_width_3-5@xxlarge": "_grid__item_width_3-5@xxlarge_1uzdm_1", "grid__item_width_4-5@xxlarge": "_grid__item_width_4-5@xxlarge_1uzdm_1", "grid__item_width_1-6@xxlarge": "_grid__item_width_1-6@xxlarge_1uzdm_1", "grid__item_width_2-6@xxlarge": "_grid__item_width_2-6@xxlarge_1uzdm_1", "grid__item_width_3-6@xxlarge": "_grid__item_width_3-6@xxlarge_1uzdm_1", "grid__item_width_4-6@xxlarge": "_grid__item_width_4-6@xxlarge_1uzdm_1", "grid__item_width_5-6@xxlarge": "_grid__item_width_5-6@xxlarge_1uzdm_1", "grid__item_width_1-7@xxlarge": "_grid__item_width_1-7@xxlarge_1uzdm_1", "grid__item_width_2-7@xxlarge": "_grid__item_width_2-7@xxlarge_1uzdm_1", "grid__item_width_3-7@xxlarge": "_grid__item_width_3-7@xxlarge_1uzdm_1", "grid__item_width_4-7@xxlarge": "_grid__item_width_4-7@xxlarge_1uzdm_1", "grid__item_width_5-7@xxlarge": "_grid__item_width_5-7@xxlarge_1uzdm_1", "grid__item_width_6-7@xxlarge": "_grid__item_width_6-7@xxlarge_1uzdm_1", "grid__item_width_1-8@xxlarge": "_grid__item_width_1-8@xxlarge_1uzdm_1", "grid__item_width_2-8@xxlarge": "_grid__item_width_2-8@xxlarge_1uzdm_1", "grid__item_width_3-8@xxlarge": "_grid__item_width_3-8@xxlarge_1uzdm_1", "grid__item_width_4-8@xxlarge": "_grid__item_width_4-8@xxlarge_1uzdm_1", "grid__item_width_5-8@xxlarge": "_grid__item_width_5-8@xxlarge_1uzdm_1", "grid__item_width_6-8@xxlarge": "_grid__item_width_6-8@xxlarge_1uzdm_1", "grid__item_width_7-8@xxlarge": "_grid__item_width_7-8@xxlarge_1uzdm_1", "grid__item_width_1-9@xxlarge": "_grid__item_width_1-9@xxlarge_1uzdm_1", "grid__item_width_2-9@xxlarge": "_grid__item_width_2-9@xxlarge_1uzdm_1", "grid__item_width_3-9@xxlarge": "_grid__item_width_3-9@xxlarge_1uzdm_1", "grid__item_width_4-9@xxlarge": "_grid__item_width_4-9@xxlarge_1uzdm_1", "grid__item_width_5-9@xxlarge": "_grid__item_width_5-9@xxlarge_1uzdm_1", "grid__item_width_6-9@xxlarge": "_grid__item_width_6-9@xxlarge_1uzdm_1", "grid__item_width_7-9@xxlarge": "_grid__item_width_7-9@xxlarge_1uzdm_1", "grid__item_width_8-9@xxlarge": "_grid__item_width_8-9@xxlarge_1uzdm_1", "grid__item_width_1-10@xxlarge": "_grid__item_width_1-10@xxlarge_1uzdm_1", "grid__item_width_2-10@xxlarge": "_grid__item_width_2-10@xxlarge_1uzdm_1", "grid__item_width_3-10@xxlarge": "_grid__item_width_3-10@xxlarge_1uzdm_1", "grid__item_width_4-10@xxlarge": "_grid__item_width_4-10@xxlarge_1uzdm_1", "grid__item_width_5-10@xxlarge": "_grid__item_width_5-10@xxlarge_1uzdm_1", "grid__item_width_6-10@xxlarge": "_grid__item_width_6-10@xxlarge_1uzdm_1", "grid__item_width_7-10@xxlarge": "_grid__item_width_7-10@xxlarge_1uzdm_1", "grid__item_width_8-10@xxlarge": "_grid__item_width_8-10@xxlarge_1uzdm_1", "grid__item_width_9-10@xxlarge": "_grid__item_width_9-10@xxlarge_1uzdm_1", "grid__item_order_1@xxlarge": "_grid__item_order_1@xxlarge_1uzdm_1", "grid__item_order_2@xxlarge": "_grid__item_order_2@xxlarge_1uzdm_1", "grid__item_order_3@xxlarge": "_grid__item_order_3@xxlarge_1uzdm_1", "grid__item_order_4@xxlarge": "_grid__item_order_4@xxlarge_1uzdm_1", "grid__item_order_5@xxlarge": "_grid__item_order_5@xxlarge_1uzdm_1", "grid__item_order_6@xxlarge": "_grid__item_order_6@xxlarge_1uzdm_1", "grid__item_order_7@xxlarge": "_grid__item_order_7@xxlarge_1uzdm_1", "grid__item_order_8@xxlarge": "_grid__item_order_8@xxlarge_1uzdm_1", "grid__item_order_9@xxlarge": "_grid__item_order_9@xxlarge_1uzdm_1", "grid__item_order_10@xxlarge": "_grid__item_order_10@xxlarge_1uzdm_1", "grid_align_left@xxxlarge": "_grid_align_left@xxxlarge_1uzdm_1", "grid_align_center@xxxlarge": "_grid_align_center@xxxlarge_1uzdm_1", "grid_align_right@xxxlarge": "_grid_align_right@xxxlarge_1uzdm_1", "grid_align_justify@xxxlarge": "_grid_align_justify@xxxlarge_1uzdm_1", "grid_valign_top@xxxlarge": "_grid_valign_top@xxxlarge_1uzdm_1", "grid_valign_middle@xxxlarge": "_grid_valign_middle@xxxlarge_1uzdm_1", "grid_valign_bottom@xxxlarge": "_grid_valign_bottom@xxxlarge_1uzdm_1", "grid_valign_baseline@xxxlarge": "_grid_valign_baseline@xxxlarge_1uzdm_1", "grid_valign_justify@xxxlarge": "_grid_valign_justify@xxxlarge_1uzdm_1", "grid_direction_row@xxxlarge": "_grid_direction_row@xxxlarge_1uzdm_1", "grid_direction_row-reverse@xxxlarge": "_grid_direction_row-reverse@xxxlarge_1uzdm_1", "grid_direction_column@xxxlarge": "_grid_direction_column@xxxlarge_1uzdm_1", "grid_direction_column-reverse@xxxlarge": "_grid_direction_column-reverse@xxxlarge_1uzdm_1", "grid_wrap_nowrap@xxxlarge": "_grid_wrap_nowrap@xxxlarge_1uzdm_1", "grid_wrap_wrap@xxxlarge": "_grid_wrap_wrap@xxxlarge_1uzdm_1", "grid_wrap_wrap-reverse@xxxlarge": "_grid_wrap_wrap-reverse@xxxlarge_1uzdm_1", "grid_size_xxs@xxxlarge": "_grid_size_xxs@xxxlarge_1uzdm_1", "grid_size_xs@xxxlarge": "_grid_size_xs@xxxlarge_1uzdm_1", "grid_size_s@xxxlarge": "_grid_size_s@xxxlarge_1uzdm_1", "grid_size_m@xxxlarge": "_grid_size_m@xxxlarge_1uzdm_1", "grid_size_l@xxxlarge": "_grid_size_l@xxxlarge_1uzdm_1", "grid_size_xl@xxxlarge": "_grid_size_xl@xxxlarge_1uzdm_1", "grid_size_xxl@xxxlarge": "_grid_size_xxl@xxxlarge_1uzdm_1", "grid_size_xxxl@xxxlarge": "_grid_size_xxxl@xxxlarge_1uzdm_1", "grid_column_1@xxxlarge": "_grid_column_1@xxxlarge_1uzdm_1", "grid_column_2@xxxlarge": "_grid_column_2@xxxlarge_1uzdm_1", "grid_column_3@xxxlarge": "_grid_column_3@xxxlarge_1uzdm_1", "grid_column_4@xxxlarge": "_grid_column_4@xxxlarge_1uzdm_1", "grid_column_5@xxxlarge": "_grid_column_5@xxxlarge_1uzdm_1", "grid_column_6@xxxlarge": "_grid_column_6@xxxlarge_1uzdm_1", "grid_column_7@xxxlarge": "_grid_column_7@xxxlarge_1uzdm_1", "grid_column_8@xxxlarge": "_grid_column_8@xxxlarge_1uzdm_1", "grid_column_9@xxxlarge": "_grid_column_9@xxxlarge_1uzdm_1", "grid_column_10@xxxlarge": "_grid_column_10@xxxlarge_1uzdm_1", "grid__item_width_1-1@xxxlarge": "_grid__item_width_1-1@xxxlarge_1uzdm_1", "grid__item_width_1-2@xxxlarge": "_grid__item_width_1-2@xxxlarge_1uzdm_1", "grid__item_width_1-3@xxxlarge": "_grid__item_width_1-3@xxxlarge_1uzdm_1", "grid__item_width_2-3@xxxlarge": "_grid__item_width_2-3@xxxlarge_1uzdm_1", "grid__item_width_1-4@xxxlarge": "_grid__item_width_1-4@xxxlarge_1uzdm_1", "grid__item_width_2-4@xxxlarge": "_grid__item_width_2-4@xxxlarge_1uzdm_1", "grid__item_width_3-4@xxxlarge": "_grid__item_width_3-4@xxxlarge_1uzdm_1", "grid__item_width_1-5@xxxlarge": "_grid__item_width_1-5@xxxlarge_1uzdm_1", "grid__item_width_2-5@xxxlarge": "_grid__item_width_2-5@xxxlarge_1uzdm_1", "grid__item_width_3-5@xxxlarge": "_grid__item_width_3-5@xxxlarge_1uzdm_1", "grid__item_width_4-5@xxxlarge": "_grid__item_width_4-5@xxxlarge_1uzdm_1", "grid__item_width_1-6@xxxlarge": "_grid__item_width_1-6@xxxlarge_1uzdm_1", "grid__item_width_2-6@xxxlarge": "_grid__item_width_2-6@xxxlarge_1uzdm_1", "grid__item_width_3-6@xxxlarge": "_grid__item_width_3-6@xxxlarge_1uzdm_1", "grid__item_width_4-6@xxxlarge": "_grid__item_width_4-6@xxxlarge_1uzdm_1", "grid__item_width_5-6@xxxlarge": "_grid__item_width_5-6@xxxlarge_1uzdm_1", "grid__item_width_1-7@xxxlarge": "_grid__item_width_1-7@xxxlarge_1uzdm_1", "grid__item_width_2-7@xxxlarge": "_grid__item_width_2-7@xxxlarge_1uzdm_1", "grid__item_width_3-7@xxxlarge": "_grid__item_width_3-7@xxxlarge_1uzdm_1", "grid__item_width_4-7@xxxlarge": "_grid__item_width_4-7@xxxlarge_1uzdm_1", "grid__item_width_5-7@xxxlarge": "_grid__item_width_5-7@xxxlarge_1uzdm_1", "grid__item_width_6-7@xxxlarge": "_grid__item_width_6-7@xxxlarge_1uzdm_1", "grid__item_width_1-8@xxxlarge": "_grid__item_width_1-8@xxxlarge_1uzdm_1", "grid__item_width_2-8@xxxlarge": "_grid__item_width_2-8@xxxlarge_1uzdm_1", "grid__item_width_3-8@xxxlarge": "_grid__item_width_3-8@xxxlarge_1uzdm_1", "grid__item_width_4-8@xxxlarge": "_grid__item_width_4-8@xxxlarge_1uzdm_1", "grid__item_width_5-8@xxxlarge": "_grid__item_width_5-8@xxxlarge_1uzdm_1", "grid__item_width_6-8@xxxlarge": "_grid__item_width_6-8@xxxlarge_1uzdm_1", "grid__item_width_7-8@xxxlarge": "_grid__item_width_7-8@xxxlarge_1uzdm_1", "grid__item_width_1-9@xxxlarge": "_grid__item_width_1-9@xxxlarge_1uzdm_1", "grid__item_width_2-9@xxxlarge": "_grid__item_width_2-9@xxxlarge_1uzdm_1", "grid__item_width_3-9@xxxlarge": "_grid__item_width_3-9@xxxlarge_1uzdm_1", "grid__item_width_4-9@xxxlarge": "_grid__item_width_4-9@xxxlarge_1uzdm_1", "grid__item_width_5-9@xxxlarge": "_grid__item_width_5-9@xxxlarge_1uzdm_1", "grid__item_width_6-9@xxxlarge": "_grid__item_width_6-9@xxxlarge_1uzdm_1", "grid__item_width_7-9@xxxlarge": "_grid__item_width_7-9@xxxlarge_1uzdm_1", "grid__item_width_8-9@xxxlarge": "_grid__item_width_8-9@xxxlarge_1uzdm_1", "grid__item_width_1-10@xxxlarge": "_grid__item_width_1-10@xxxlarge_1uzdm_1", "grid__item_width_2-10@xxxlarge": "_grid__item_width_2-10@xxxlarge_1uzdm_1", "grid__item_width_3-10@xxxlarge": "_grid__item_width_3-10@xxxlarge_1uzdm_1", "grid__item_width_4-10@xxxlarge": "_grid__item_width_4-10@xxxlarge_1uzdm_1", "grid__item_width_5-10@xxxlarge": "_grid__item_width_5-10@xxxlarge_1uzdm_1", "grid__item_width_6-10@xxxlarge": "_grid__item_width_6-10@xxxlarge_1uzdm_1", "grid__item_width_7-10@xxxlarge": "_grid__item_width_7-10@xxxlarge_1uzdm_1", "grid__item_width_8-10@xxxlarge": "_grid__item_width_8-10@xxxlarge_1uzdm_1", "grid__item_width_9-10@xxxlarge": "_grid__item_width_9-10@xxxlarge_1uzdm_1", "grid__item_order_1@xxxlarge": "_grid__item_order_1@xxxlarge_1uzdm_1", "grid__item_order_2@xxxlarge": "_grid__item_order_2@xxxlarge_1uzdm_1", "grid__item_order_3@xxxlarge": "_grid__item_order_3@xxxlarge_1uzdm_1", "grid__item_order_4@xxxlarge": "_grid__item_order_4@xxxlarge_1uzdm_1", "grid__item_order_5@xxxlarge": "_grid__item_order_5@xxxlarge_1uzdm_1", "grid__item_order_6@xxxlarge": "_grid__item_order_6@xxxlarge_1uzdm_1", "grid__item_order_7@xxxlarge": "_grid__item_order_7@xxxlarge_1uzdm_1", "grid__item_order_8@xxxlarge": "_grid__item_order_8@xxxlarge_1uzdm_1", "grid__item_order_9@xxxlarge": "_grid__item_order_9@xxxlarge_1uzdm_1", "grid__item_order_10@xxxlarge": "_grid__item_order_10@xxxlarge_1uzdm_1" };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





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













var objectWithoutProperties$1 = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function objectWithoutProperties(props, list) {
    return Object.keys(props).filter(function (key) {
        return !list.includes(key);
    }).reduce(function (obj, key) {
        obj[key] = props[key];
        return obj;
    }, {});
}

function createPropTypes(modList) {
    var result = {
        tagName: PropTypes.string,
        className: PropTypes.string
    };

    modList.forEach(function (key) {
        result[key] = PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object, PropTypes.number]);
    });

    return result;
}

function createClassName(blockName, modList, props, styles) {
    var classList = [styles[blockName]];

    modList.filter(function (key) {
        return Object.prototype.hasOwnProperty.call(props, key);
    }).forEach(function (key) {
        var value = props[key];
        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
        var modifier = blockName + '_' + key;

        if (type === 'string' || type === 'number') {
            classList.push(styles[modifier + '_' + value]);
        } else if (Array.isArray(value) && value.length) {
            value.forEach(function (modVal) {
                classList.push(styles[modifier + '_' + modVal]);
            });
        } else if (type === 'object') {
            Object.keys(value).filter(function (modVal) {
                return value[modVal];
            }).forEach(function (modVal) {
                classList.push(styles[modifier + '_' + modVal]);
            });
        }
    });

    if (props.className) {
        classList.push(props.className);
    }

    return classList.join(' ');
}

function createElement(_ref) {
    var type = _ref.type,
        name = _ref.name,
        modList = _ref.modList,
        styles = _ref.styles;

    function reactElement(_ref2) {
        var _ref2$tagName = _ref2.tagName,
            tagName = _ref2$tagName === undefined ? type : _ref2$tagName,
            props = objectWithoutProperties$1(_ref2, ['tagName']);

        return React.createElement(tagName, _extends({}, objectWithoutProperties(props, modList), {
            className: createClassName(name, modList, props, styles)
        }), props.children);
    }

    reactElement.displayName = name;
    reactElement.propTypes = createPropTypes(modList);

    return reactElement;
}

var Grid = createElement({
    name: 'grid',
    type: 'div',
    modList: ['column', 'size', 'direction', 'align', 'valign', 'wrap'],
    styles: styles
});

var GridItem = createElement({
    name: 'grid__item',
    type: 'div',
    modList: ['width', 'order'],
    styles: styles
});

Grid.Item = GridItem;

return Grid;

})));
