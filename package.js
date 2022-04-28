Package.describe({
    name: "redspear:readmore",
    summary: "A lightweight jQuery plugin for collapsing and expanding long blocks of text with \"Read more\" and \"Close\" links.",
    version: "0.1.0",
    git: "https://github.com/redspear/meteor-readmore"
});

Package.on_use(function (api, where) {
    api.versionsFrom('METEOR@1.0.2');

    api.use('jquery', 'client');
    api.use('momentjs:moment@2.8.4');

    api.addFiles([
        // Add Date Time Picker CSS and JS files
      'lib/js/readmore.js',
    ], 'client');
});
