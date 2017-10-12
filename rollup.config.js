import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import serve from 'rollup-plugin-serve'

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
        babel(),
        serve('dist'),
    ]
};
