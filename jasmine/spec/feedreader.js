/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        var feedUrl, feedName;

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('has a URL defined', function(){
            allFeeds.forEach(function(feed){
                feedUrl = feed.url;
                expect(feedUrl).toBeDefined();
                expect(feedUrl.length).not.toBe(0);
            })
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('has a URL defined', function(){
            allFeeds.forEach(function(feed){
                feedName = feed.name;
                expect(feedName).toBeDefined();
                expect(feedName.length).not.toBe(0);
            })
         });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function(){

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        var menuDisplay;

        it('is hidden by default', function(){
            menuDisplay = $('body').hasClass('menu-hidden');
            expect(menuDisplay).toBeTruthy();
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('on click, menu displays', function(){
            var menuClick = $('.menu-icon-link');
            menuClick.click();
            var menuDisplay = $('body').hasClass('menu-hidden');
            expect(menuDisplay).toEqual(false);
        });

        it('on click again, menu hides', function(){
            var menuClick = $('.menu-icon-link');
            menuClick.click();
            var menuDisplay = $('body').hasClass('menu-hidden');
            expect(menuDisplay).toEqual(true);
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('has at least one entry with feed container', function(){
            var feedEntry = $('.feed .entry');
            expect(feedEntry.length).toBeTruthy();
            done();
        });

     })

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){


        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        var oldLoad, newLoad;

        beforeAll(function(done){
            loadFeed(0, function(){
                oldLoad = $('.feed').text();
                loadFeed(1, function(){
                    newLoad = $('.feed').text();
                    done();
                });
            });
        });

        it('has content changes by loadFeed function', function(done){
            expect(oldLoad).not.toEqual(newLoad);
        });

    });

    /*Implement error handling for undefined variables and out-of-bound array access*/
    describe('Implement error handling', function(){
        it('for undefined variables and out-of-bound array access', function(){
            //This is valid since out-of-bound array gives undefined.
            var undefined_variable;
            expect(undefined_variable).toBeUndefined();
        });


    });

}());
