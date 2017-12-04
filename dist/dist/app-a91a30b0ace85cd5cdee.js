"use strict";

webpackJsonp([0], { 14: function _(n, a) {}, 16: function _(n, a, e) {
    n.exports = { template: e(286) };
  }, 17: function _(n, a, e) {
    var s = e(0),
        t = e(299),
        i = e(298),
        l = e(297),
        o = e(296),
        c = e(300);n.exports = "home", s.module("home", []).component("fountainForm", t).component("fountainCard", l).component("fountainCarousel", i).component("fountainAlbum", o).component("fountainHome", c);
  }, 18: function _(n, a, e) {
    n.exports = { template: e(292) };
  }, 19: function _(n, a, e) {
    e(285), n.exports = { template: e(293) };
  }, 20: function _(n, a, e) {
    n.exports = { template: e(294) };
  }, 21: function _(n, a) {
    function e(n, a, e) {
      e.html5Mode(!0).hashPrefix("!"), a.otherwise("/"), n.state("app", { url: "/", component: "app" });
    }e.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"], n.exports = e;
  }, 280: function _(n, a) {}, 281: function _(n, a) {}, 282: function _(n, a) {}, 283: function _(n, a) {}, 284: function _(n, a) {}, 285: function _(n, a) {}, 286: function _(n, a) {
    n.exports = '<div class="main-container">\n  <fountain-header></fountain-header>\n  <main class="main">\n    \x3c!--<fountain-title></fountain-title>--\x3e\n    <fountain-home></fountain-home>\n  </main>\n  \x3c!--<fountain-footer></fountain-footer>--\x3e\n</div>\n';
  }, 287: function _(n, a) {
    n.exports = '<div class="album-container">\n    <div class="album">\n        <div class="container">\n            <div class="row text-center text-lg-left">\n\n                <div class="col-lg-3 col-md-4 col-sm-6 card">\n                    <a href="#" class="d-block mb-0 h-100">\n                        <img class="img-fluid" src="/assets/images/album/one.png" alt="">\n                        <h4 class="card-text text-center">Digital Strategy</h4>\n                    </a>\n                </div>\n                <div class="col-lg-3 col-md-4 col-sm-6 card ">\n                    <a href="#" class="d-block mb-0 h-100">\n                        <img class="img-fluid" src="/assets/images/album/two.png" alt="">\n                        <h4 class="card-text text-center">Design</h4>\n                    </a>\n                </div>\n                <div class="col-lg-3 col-md-4 col-sm-6 card ">\n                    <a href="#" class="d-block mb-0 h-100">\n                        <img class="img-fluid" src="/assets/images/album/three.png" alt="">\n                        <h4 class="card-text text-center">Development</h4>\n                    </a>\n                </div>\n                <div class="col-lg-3 col-md-4 col-sm-6 card ">\n                    <a href="#" class="d-block mb-0 h-100">\n                        <img class="img-fluid" src="/assets/images/album/four.png" alt="">\n                        <h4 class="card-text text-center">Performance<br/>\n                            Marketing</h4>\n                    </a>\n                </div>\n                <div class="col-lg-3 col-md-4 col-sm-6 card ">\n                    <a href="#" class="d-block mb-0 h-100">\n                        <img class="img-fluid" src="/assets/images/album/four.png" alt="">\n                        <h4 class="card-text text-center">Neuro Linguistic<br/>\n                            Search</h4>\n                    </a>\n                </div>\n                <div class="col-lg-3 col-md-4 col-sm-6 card ">\n                    <a href="#" class="d-block mb-0 h-100">\n                        <img class="img-fluid" src="/assets/images/album/three.png" alt="">\n                        <h4 class="card-text text-center">Video</h4>\n                    </a>\n                </div>\n                <div class="col-lg-3 col-md-4 col-sm-6 card ">\n                    <a href="#" class="d-block mb-0 h-100">\n                        <img class="img-fluid" src="/assets/images/album/two.png" alt="">\n                        <h4 class="card-text text-center">Neuromarketing</h4>\n                    </a>\n                </div>\n                <div class="col-lg-3 col-md-4 col-sm-6 card ">\n                    <a href="#" class="d-block mb-0 h-100">\n                        <img class="img-fluid" src="/assets/images/album/one.png" alt="">\n                        <h4 class="card-text text-center">Analysis &<br/>\n                            Improvement</h4>\n                    </a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>';
  }, 288: function _(n, a) {
    n.exports = '<div class="card-container">\n    <div class="card" style="width: 23rem;">\n        <div class="card-body">\n            <h4 class="card-title">Elegant Communication</h4>\n            <p class="card-text">\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\n                sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing\n                elit, sed diam Lorem ipsum dolor sit amet, consectetuer\n                adipiscing elit, sed diam Lorem ipsum dolor sit amet,\n                consectetuer adipiscing elit, sed diam Lorem ipsum dolor\n                sit amet, consectetuer adipiscing elit, sed diam </p>\n            <a href="#" class="btn">LINK TEXT</a>\n        </div>\n    </div>\n</div>';
  }, 289: function _(n, a) {
    n.exports = '<div class="carousel-container">\n    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">\n        <ol class="carousel-indicators">\n            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>\n            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>\n            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>\n        </ol>\n        <div class="carousel-inner">\n            <div class="carousel-item active">\n                <img class="d-block img-fluid" ng-src="/assets/images/carousel/slide_1.png" alt="First slide">\n            </div>\n            <div class="carousel-item">\n                <img class="d-block img-fluid" ng-src="/assets/images/carousel/slide_1.png" alt="Second slide">\n            </div>\n            <div class="carousel-item">\n                <img class="d-block img-fluid" ng-src="/assets/images/carousel/slide_1.png" alt="Third slide">\n            </div>\n        </div>\n    </div>\n</div>';
  }, 290: function _(n, a) {
    n.exports = '<div class="form-container">\n\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-6 d-xs-none">\n\n            </div>\n            <div class="col-lg-6">\n                <form name="userForm" ng-submit="$ctrl.submitForm(userForm.$valid)" novalidate>\n\n                    \x3c!-- NAME --\x3e\n                    <div class="form-group"\n                         ng-class="{ \'has-error\' : userForm.name.$invalid && !userForm.name.$pristine }">\n                        <label>Name*</label>\n                        <input type="text" name="name" class="form-control" ng-model="user.name" required>\n                        <p ng-show="userForm.name.$invalid && !userForm.name.$pristine" class="help-block">You name is\n                            required.</p>\n                    </div>\n\n                    \x3c!-- USERNAME --\x3e\n                    <div class="form-group"\n                         ng-class="{ \'has-error\' : userForm.username.$invalid && !userForm.username.$pristine }">\n                        <label>Username</label>\n                        <input type="text" name="username" class="form-control" ng-model="user.username"\n                               ng-minlength="3" ng-maxlength="8">\n                        <p ng-show="userForm.username.$error.minlength" class="help-block">Username is too short.</p>\n                        <p ng-show="userForm.username.$error.maxlength" class="help-block">Username is too long.</p>\n                    </div>\n\n                    \x3c!-- EMAIL --\x3e\n                    <div class="form-group"\n                         ng-class="{ \'has-error\' : userForm.email.$invalid && !userForm.email.$pristine }">\n                        <label>Email</label>\n                        <input type="email" name="email" class="form-control" ng-model="user.email">\n                        <p ng-show="userForm.email.$invalid && !userForm.email.$pristine" class="help-block">Enter a\n                            valid email.</p>\n                    </div>\n\n                    <button type="submit" class="btn btn-primary">Submit</button>\n\n                </form>\n            </div>\n        </div>\n    </div>\n</div>';
  }, 291: function _(n, a) {
    n.exports = '<div class="home-container">\n    <fountain-carousel></fountain-carousel>\n    <fountain-card></fountain-card>\n    <fountain-album></fountain-album>\n    <fountain-form></fountain-form>\n</div>\n';
  }, 292: function _(n, a) {
    n.exports = '<footer class="footer">\n  Build with ♥ by the&nbsp;\n  <a href="https://github.com/orgs/FountainJS/people">\n    FountainJS team\n  </a>\n</footer>\n';
  }, 293: function _(n, a) {
    n.exports = '<header class="header">\n    <nav class="navbar navbar-expand-lg navbar-light ">\n        <a class="navbar-brand" href="#">L A B</a>\n        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"\n                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">\n            <span class="navbar-toggler-icon"></span>\n        </button>\n\n        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">\n            <ul class="nav navbar-nav ml-auto">\n                <li class="nav-item">\n                    <a class="nav-link" href="#">OUR WORK</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link" href="#">OUR APPROACH</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link" href="#">SECRET SAUCE INSIGHT</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link" href="#">CAREERS</a>\n                </li>\n\n            </ul>\n        </div>\n    </nav>\n</header>\n';
  }, 294: function _(n, a) {
    n.exports = '<div class="title">\n  <h1 class="title-h1">\'Allo, \'Allo!</h1>\n  <div>\n    <img class="title-logo" src="http://fountainjs.io/assets/imgs/yeoman.png"/>\n    <img class="title-logo" src="http://fountainjs.io/assets/imgs/fountain.png"/>\n  </div>\n  <h2 class="title-h2">Always a pleasure scaffolding your apps.</h2>\n</div>\n';
  }, 296: function _(n, a, e) {
    e(280), n.exports = { template: e(287) };
  }, 297: function _(n, a, e) {
    e(281), n.exports = { template: e(288) };
  }, 298: function _(n, a, e) {
    e(282), n.exports = { template: e(289) };
  }, 299: function _(n, a, e) {
    function s() {
      function n(n) {}this.submitForm = n;
    }e(283), n.exports = { template: e(290), controller: s };
  }, 300: function _(n, a, e) {
    function s() {}e(284), n.exports = { template: e(291), controller: s };
  }, 301: function _(n, a, e) {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });var s = e(4);e.n(s);var t = e(0),
        i = e(17);e(2), e(3);var l = e(21),
        o = e(16),
        c = e(19),
        r = e(20),
        m = e(18);e(14), t.module("app", [i, "ui.router", "toaster"]).config(l).component("app", o).component("fountainHeader", c).component("fountainTitle", r).component("fountainFooter", m);
  } }, [301]);
//# sourceMappingURL=app-a91a30b0ace85cd5cdee.js.map