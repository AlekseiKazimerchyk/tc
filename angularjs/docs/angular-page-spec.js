var angularPage = require('./AngularDocsPage.js');

describe('Страница angular.io', function () {

    beforeEach(async function () {
        await browser.get('https://angular.io/docs/');
    });

    describe('Боковая панель навигации', function () {

        it('Боковая панель видима', async function () {
            let classes = await angularPage.getShell.getAttribute('class');
            expect(await classes).toContain('sidenav-open');
        });

        it('При клике на меню, боковая панель скроется', async function () {
            await angularPage.getMenuButton.click();
            let EC = protractor.ExpectedConditions;
            await browser.wait(EC.invisibilityOf(angularPage.getSideNav));
            let classes = await angularPage.getShell.getAttribute('class');
            expect(await classes).toContain('sidenav-closed');
        });

        it('Количество разделов боковой панели равно 5', async function () {
            let count = await angularPage.getListNavItems.count();
            expect(await count).toBe(5);
        });

        it('При клике отобразиться страница GETTING STARTED', async function () {
            await angularPage.getListNavItems.get(0).click();
            expect(await browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
        });

        it('При клике развернётся список TUTORIAL', async function () {
            await angularPage.getListNavItems.get(1).click();
            let classes = await angularPage.getListNavItems.get(1).getAttribute('class');
            expect(await classes).toContain('expanded');
        });

        it('Количество подразделов Tutorial равно 8', async function () {
            await angularPage.getListNavItems.get(1).click();
            let count = await angularPage.getListTutorials.count();
            expect(await count).toBe(8);
        });

        it('Подразделы Tutorial selected', async function () {
            await angularPage.getListNavItems.get(1).click();
            const listTutorials = await angularPage.getListTutorials;
            for (let [index, item] of listTutorials.entries()) {
                await item.click();
                let classes = await item.getAttribute('class');
                expect(await classes).toContain('selected', 'not selected: ' + index);
            }
        });

        it('При клике свернётся список разделов TUTORIAL', async function () {
            await angularPage.getListNavItems.get(1).click();
            await angularPage.getListNavItems.get(1).click();
            let classes = await angularPage.getListNavItems.get(1).getAttribute('class');
            expect(await classes).toContain('collapsed');
        });

        it('При клике кнопки версий документации появится список версий Angular (5)', async function () {
            await angularPage.getVersionButton.click();
            let count = await angularPage.getListVersions.count();
            expect(await count).toBe(5);
        });

        it('При клике кнопки версий документации будет выбрана текущая версия', async function () {
            await angularPage.getVersionButton.click();
            let classes = await angularPage.getListVersions.get(1).getAttribute('class');
            expect(await classes).toContain('selected');
        });

    });

    describe('Верхнее меню', function () {

        it('Должна открыться страница features', async function () {
            await angularPage.getLinkFeatures.click();
            expect(await browser.getCurrentUrl()).toEqual('https://angular.io/features');
        });

        it('Должна открыться страница docs', async function () {
            await angularPage.getLinkDocs.click();
            expect(await browser.getCurrentUrl()).toEqual('https://angular.io/docs');
        });

        it('Должна открыться страница resources', async function () {
            await angularPage.getLinkResources.click();
            expect(await browser.getCurrentUrl()).toEqual('https://angular.io/resources');
        });

        it('Должна открыться страница events', async function () {
            await angularPage.getLinkEvents.click();
            expect(await browser.getCurrentUrl()).toEqual('https://angular.io/events');
        });

        it('Должна открыться страница blog', async function () {
            await browser.waitForAngularEnabled(false);
            await angularPage.getLinkBlog.click();
            await browser.refresh();
            expect(await browser.getCurrentUrl()).toEqual('https://blog.angular.io/');
            await browser.waitForAngularEnabled(true);
        });

        it('Должна открыться стартовая страница home', async function () {
            await angularPage.getLinkHome.click();
            expect(await browser.getCurrentUrl()).toEqual('https://angular.io/');
        });

        xit('Поиск по значению api', async function () {
            let EC = protractor.ExpectedConditions;
            await angularPage.getFindField.clear();
            await angularPage.getFindField.sendKeys('api');
            await browser.wait(EC.presenceOf(angularPage.getSearchResultsArea));
            expect(await angularPage.getSectionSearchResults.get(0).getText()).toContain('api');
        });

        xit('Поиск по значению qwerty', async function () {
            let EC = protractor.ExpectedConditions;
            await angularPage.getFindField.clear();
            await angularPage.getFindField.sendKeys('qwerty');
            await browser.wait(EC.presenceOf(angularPage.getSearchResultsArea));
            expect(await angularPage.getResultsLabel.getText()).toBe('Searching ...');
        });

    });

});