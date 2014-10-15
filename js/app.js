// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    LoginView.prototype.template = Handlebars.compile($("#login-tpl").html());
    MainView.prototype.template = Handlebars.compile($("#main-tpl").html());
//    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
//    EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
//    EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());

    var service = new UserService();
    var slider = new PageSlider($('body'));

    service.initialize().done(function () {
        router.addRoute('', function() {
            console.log('login');
            slider.slidePage(new LoginView().render().$el);
        });

        router.addRoute('login', function() {
            console.log('login');
            slider.slidePage(new LoginView().render().$el);
        });

        router.addRoute('main', function() {
            console.log('main');
            slider.slidePage(new MainView().render().$el);
        });

//
//        router.addRoute('employees/:id', function(id) {
//            console.log('details');
//            service.findById(parseInt(id)).done(function(employee) {
//                slider.slidePage(new EmployeeView(employee).render().$el);
//            });
//        });
//
        router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready', function () {
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByHexString('#ffffff');
        StatusBar.styleDefault();
        FastClick.attach(document.body);
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */

}());