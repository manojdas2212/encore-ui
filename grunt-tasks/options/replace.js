var config = require('../util/config');

module.exports = {
    'readme': {
        src: [
            'guides/using-encoreui.md',
            'guides/testing.md'
        ],
        overwrite: true,
        replacements: [{
            from: config.regex.version,
            to: '-<%= pkg.version %>'
        }]
    },
    'version': {
        src: [
            'src/debug/debug.module.js'
        ],
        overwrite: true,
        replacements: [{
            from: /(?:\d+\.){2}\d+(?:-\d+)*/g,
            to: '<%= pkg.version %>'
        }]
    }
};
