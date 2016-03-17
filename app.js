System.register(['angular2/platform/browser', './app/ng-cli-gh-pages-sample', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, ng_cli_gh_pages_sample_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (ng_cli_gh_pages_sample_1_1) {
                ng_cli_gh_pages_sample_1 = ng_cli_gh_pages_sample_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(ng_cli_gh_pages_sample_1.NgCliGhPagesSampleApp, [
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=../../app.js.map