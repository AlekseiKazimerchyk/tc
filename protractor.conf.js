// An example configuration file
exports.config = {

    framework: 'jasmine',
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    SELENIUM_PROMISE_MANAGER: false,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example config.js).
    // They may include glob patterns.

    specs: ['./angularjs/docs/*-spec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 30000
    }
};