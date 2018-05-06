function AngularDocsPage() {

    var listNavItems = $$('aio-nav-menu aio-nav-item div .vertical-menu-item.level-1');
    var listTutorials = $$('div.heading-children.level-1 aio-nav-item div .vertical-menu-item.level-2[href^="tutorial"]');
    var listVersions = $$('ul.form-select-dropdown.ng-star-inserted li.ng-star-inserted');
    var listSections = $$('div.search-area h3');

    return {

        getMenuButton: $('button.hamburger.mat-button'),
        getVersionButton: $('button.form-select-button'),
        getShell: $('aio-shell'),

        getFindField: $('input[aria-label="search"]'),
        getSearchResults: $('h2.visually-hidden'),
        getSearchResultsArea: $('div.search-results'),
        getResultsLabel: $('div.search-results p.ng-star-inserted'),
        getSectionSearchResults: listSections,

        getSideNav: $('mat-sidenav.sidenav.mat-sidenav'),
        getLinkHome: $('a.nav-link.home[href="/"]'),
        getLinkDocs: $('a.nav-link[href="docs"]'),
        getLinkFeatures: $('a.nav-link[href="features"]'),
        getLinkResources: $('a.nav-link[href="resources"]'),
        getLinkEvents: $('a.nav-link[href="events"]'),
        getLinkBlog: $('a.nav-link[href="https://blog.angular.io/"]'),

        getListNavItems: listNavItems,
        getListTutorials: listTutorials,
        getListVersions: listVersions

    };
}

module.exports = new AngularDocsPage();