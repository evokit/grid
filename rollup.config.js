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

const cssExportMap = {};

const evokitThemeMedia = {
    name: [
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        'xxxlarge'
    ],
    value: [
        'only screen and (min-width: 480px)',
        'only screen and (min-width: 768px)',
        'only screen and (min-width: 960px)',
        'only screen and (min-width: 1200px)',
        'only screen and (min-width: 1400px)',
        'only screen and (min-width: 1600px)'
    ]
}

const evokitTheme = {
    grid: {
        media: evokitThemeMedia,
        size: {
            name: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
            value: [5, 10, 15, 20, 25, 30, 35, 40],
        },
        column: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        itemWidth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
};

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
                postcssVariables({globals: evokitTheme}),
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



