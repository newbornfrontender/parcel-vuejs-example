'use strict'

module.exports = {
  parser: 'postcss-scss', // 'postcss-less'
  // 'modules': true,
  plugins: {
    'postcss-nested': true,
    // 'postcss-import': {},
    'postcss-strip-inline-comments': true,
    'postcss-prettify': (
      (process.env.NODE_ENV === 'production')
        ? false
        : true
    ),
    'cssnano': {
      preset: [(
        (process.env.NODE_ENV === 'production')
          ? 'advanced'
          : 'default'
      ), {
        autoprefixer: {
          cascade: (
            (process.env.NODE_ENV === 'production')
              ? false
              : true
          ),
          grid: (
            (process.env.NODE_ENV === 'production')
              ? true
              : false
          )
        }
      }]
    }
  }
}
