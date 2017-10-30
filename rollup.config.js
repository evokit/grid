import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import serve from 'rollup-plugin-serve'
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';
import postcssVariables from 'postcss-variables';
import postcssEach from 'postcss-each';
import postcssConditionals from 'postcss-conditionals';
import postcssMath from 'postcss-math';
import postcssMixins from 'postcss-mixins';
import postcssMqpacker from 'css-mqpacker';
import postcssNested from 'postcss-nested';

import evokitConfig from './evokit.config.js';

const cssExportMap = {};


export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'umd',
        name: 'Grid',
    },
    external: ['react', 'prop-types', 'classnames'],
    globals: {
      react: 'React',
      classnames: 'classNames',
      'prop-types': 'PropTypes',
    },
    plugins: [
        eslint(),
        postcss({
            plugins: [
                postcssVariables({globals: evokitConfig}),
                postcssEach(),
                postcssConditionals(),
                postcssMath(),
                postcssMixins(),
                postcssNested(),
                postcssMqpacker(),
                postcssModules({
                    generateScopedName: function(selector) {
                        return `ui-${selector}`;
                    },
                    getJSON: function(id, exportTokens) {
                        cssExportMap[id] = exportTokens;
                    },
                })
            ],
            extract: 'dist/style.css',
            getExport: function(id) {
                return cssExportMap[id];
            },
        }),
        babel(),
        serve({ contentBase: 'dist', port: 10001 })
    ]
};



