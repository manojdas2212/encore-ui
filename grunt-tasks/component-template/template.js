/*jshint node:true*/

// Basic template description.
exports.description = 'Create an Encore-UI component, including unit tests and documentation.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'All new components must follow the Encore UI CSS & JS Standards';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
    init.process({}, [
        // Prompt for these values.
        init.prompt('name'),
        init.prompt('description')
        // TODO maybe add prompts for if directive/controller/service?
    ], function(err, props) {
        // create a class name based on component name
        props.cssName = props.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

        // Files to copy (and process).
        var files = init.filesToCopy(props);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);

        // All done!
        done();
    });
};