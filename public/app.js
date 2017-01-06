(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppModule = exports.MainApp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _dec2, _class3; //setup app

//import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//import { ActivatedRoute, RouterModule } from '@angular/router';

//import { Greeter } from './services';

//import './three.module.js';

var _core = require('@angular/core');

var _platformBrowser = require('@angular/platform-browser');

require('rxjs/add/operator/map');

require('./three.min.js');

require('./jquery.min.js');

require('./jquery-ui.min.js');

require('./jquery.layout.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainApp = exports.MainApp = (_dec = (0, _core.Component)({
    selector: 'main-app',
    template: '\n\n    <div id="container" style="height:100%;width:100%;">\n        <div class="ui-layout-center">Center\n            <h1>{{text0}}</h1>\n            <canvas id="renderCanvas"></canvas>\n        </div>\n        <div class="ui-layout-north">North</div>\n        <div class="ui-layout-south">South</div>\n        <div class="ui-layout-east">East</div>\n        <div class="ui-layout-west">West</div>\n    </div>\n\n    '
}), _dec(_class = function () {
    function MainApp() {
        _classCallCheck(this, MainApp);

        this.text0 = "test";
        this.scene = null;

        var self = this;
        console.log(this);
        //var text = "hello";
        //console.log(this);
        //console.log("main-app");
        window.addEventListener('DOMContentLoaded', function () {
            console.log("loaded?");
            $('#container').layout({ resizable: true });
            self.init();
        });
    }

    _createClass(MainApp, [{
        key: 'init',
        value: function init() {
            var canvas = document.getElementById("renderCanvas");

            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

            //var renderer = new THREE.WebGLRenderer();
            var renderer = new THREE.WebGLRenderer({ canvas: canvas });
            renderer.setSize(window.innerWidth, window.innerHeight);
            //renderer.setSize( 800, 600 );
            //document.body.appendChild( renderer.domElement );

            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            var cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            camera.position.z = 5;

            var render = function render() {
                requestAnimationFrame(render);

                cube.rotation.x += 0.1;
                cube.rotation.y += 0.1;

                renderer.render(scene, camera);
            };

            render();
        }
    }]);

    return MainApp;
}()) || _class);

//const routing = RouterModule.forRoot([
//{ path: '', component: Hello },
//{ path: 'ciao/:name', component: Ciao },
//]);

var AppModule = exports.AppModule = (_dec2 = (0, _core.NgModule)({
    imports: [_platformBrowser.BrowserModule //,
    //routing,
    ],
    declarations: [MainApp //,
    //Hello,
    //Ciao,
    //Linker,
    ],
    //providers: [
    //Greeter,
    //{ provide: LocationStrategy, useClass: HashLocationStrategy },
    //],
    bootstrap: [MainApp]
}), _dec2(_class3 = function AppModule() {
    _classCallCheck(this, AppModule);
}) || _class3);

},{"./jquery-ui.min.js":1,"./jquery.layout.min.js":1,"./jquery.min.js":1,"./three.min.js":1,"@angular/core":"@angular/core","@angular/platform-browser":"@angular/platform-browser","rxjs/add/operator/map":"rxjs/add/operator/map"}],3:[function(require,module,exports){
'use strict';

require('babel-polyfill');

require('zone.js/dist/zone');

var _platformBrowserDynamic = require('@angular/platform-browser-dynamic');

var _app = require('./app');

//main entry

(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app.AppModule);

/*
//does not work with https://angular.io/docs/ts/latest/quickstart.html that it reqire shim. Since it typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }
*/

},{"./app":2,"@angular/platform-browser-dynamic":"@angular/platform-browser-dynamic","babel-polyfill":"babel-polyfill","zone.js/dist/zone":"zone.js/dist/zone"}]},{},[3])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwic3JjXFxhcHAuanMiLCJzcmNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7Ozs7O2tDQ0FBOztBQUdBOztBQUVBOztBQUVBOztBQUdBOztBQVJBOztBQUVBOztBQUVBOztBQUdBOztBQUdBOztBQUNBOztBQUNBOzs7O0lBbUJhLE8sV0FBQSxPLFdBakJaLHFCQUFVO0FBQ1AsY0FBVSxVQURIO0FBRVA7QUFGTyxDQUFWLEM7QUFxQkcsdUJBQWE7QUFBQTs7QUFBQSxhQUhiLEtBR2EsR0FITCxNQUdLO0FBQUEsYUFGYixLQUVhLEdBRkwsSUFFSzs7QUFDVCxZQUFJLE9BQU8sSUFBWDtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBSTtBQUM1QyxvQkFBUSxHQUFSLENBQVksU0FBWjtBQUNBLGNBQUUsWUFBRixFQUFnQixNQUFoQixDQUF1QixFQUFDLFdBQVUsSUFBWCxFQUF2QjtBQUNBLGlCQUFLLElBQUw7QUFDSCxTQUpEO0FBS0g7Ozs7K0JBRUs7QUFDRixnQkFBSSxTQUFTLFNBQVMsY0FBVCxDQUF3QixjQUF4QixDQUFiOztBQUVBLGdCQUFJLFFBQVEsSUFBSSxNQUFNLEtBQVYsRUFBWjtBQUNOLGdCQUFJLFNBQVMsSUFBSSxNQUFNLGlCQUFWLENBQTZCLEVBQTdCLEVBQWlDLE9BQU8sVUFBUCxHQUFrQixPQUFPLFdBQTFELEVBQXVFLEdBQXZFLEVBQTRFLElBQTVFLENBQWI7O0FBRUE7QUFDTSxnQkFBSSxXQUFXLElBQUksTUFBTSxhQUFWLENBQXdCLEVBQUUsUUFBUSxNQUFWLEVBQXhCLENBQWY7QUFDTixxQkFBUyxPQUFULENBQWtCLE9BQU8sVUFBekIsRUFBcUMsT0FBTyxXQUE1QztBQUNNO0FBQ047O0FBRUEsZ0JBQUksV0FBVyxJQUFJLE1BQU0sV0FBVixDQUF1QixDQUF2QixFQUEwQixDQUExQixFQUE2QixDQUE3QixDQUFmO0FBQ0EsZ0JBQUksV0FBVyxJQUFJLE1BQU0saUJBQVYsQ0FBNkIsRUFBRSxPQUFPLFFBQVQsRUFBN0IsQ0FBZjtBQUNBLGdCQUFJLE9BQU8sSUFBSSxNQUFNLElBQVYsQ0FBZ0IsUUFBaEIsRUFBMEIsUUFBMUIsQ0FBWDtBQUNBLGtCQUFNLEdBQU4sQ0FBVyxJQUFYOztBQUVBLG1CQUFPLFFBQVAsQ0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBcEI7O0FBRUEsZ0JBQUksU0FBUyxTQUFULE1BQVMsR0FBWTtBQUN4QixzQ0FBdUIsTUFBdkI7O0FBRUEscUJBQUssUUFBTCxDQUFjLENBQWQsSUFBbUIsR0FBbkI7QUFDQSxxQkFBSyxRQUFMLENBQWMsQ0FBZCxJQUFtQixHQUFuQjs7QUFFQSx5QkFBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCLE1BQXZCO0FBQ0EsYUFQRDs7QUFTQTtBQUNHOzs7Ozs7QUFHTDtBQUNJO0FBQ0E7QUFDSjs7SUFtQmEsUyxXQUFBLFMsWUFqQlosb0JBQVM7QUFDTixhQUFTLGdDQUNRO0FBQ2I7QUFGSyxLQURIO0FBS04sa0JBQWMsQ0FDVixPQURVLENBQ0g7QUFDUDtBQUNBO0FBQ0E7QUFKVSxLQUxSO0FBV047QUFDSTtBQUNBO0FBQ0o7QUFDQSxlQUFXLENBQUMsT0FBRDtBQWZMLENBQVQsQzs7Ozs7OztBQ3JGRDs7QUFDQTs7QUFFQTs7QUFFQTs7QUFQQTs7QUFTQSxzREFBeUIsZUFBekI7O0FBRUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIiwiLy9zZXR1cCBhcHBcclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIElucHV0LCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuLy9pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG4vL2ltcG9ydCB7IEdyZWV0ZXIgfSBmcm9tICcuL3NlcnZpY2VzJztcclxuXHJcbmltcG9ydCAnLi90aHJlZS5taW4uanMnO1xyXG4vL2ltcG9ydCAnLi90aHJlZS5tb2R1bGUuanMnO1xyXG5cclxuaW1wb3J0ICcuL2pxdWVyeS5taW4uanMnO1xyXG5pbXBvcnQgJy4vanF1ZXJ5LXVpLm1pbi5qcyc7XHJcbmltcG9ydCAnLi9qcXVlcnkubGF5b3V0Lm1pbi5qcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWFpbi1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuXHJcbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgc3R5bGU9XCJoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1sYXlvdXQtY2VudGVyXCI+Q2VudGVyXHJcbiAgICAgICAgICAgIDxoMT57e3RleHQwfX08L2gxPlxyXG4gICAgICAgICAgICA8Y2FudmFzIGlkPVwicmVuZGVyQ2FudmFzXCI+PC9jYW52YXM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpLWxheW91dC1ub3J0aFwiPk5vcnRoPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpLWxheW91dC1zb3V0aFwiPlNvdXRoPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpLWxheW91dC1lYXN0XCI+RWFzdDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1sYXlvdXQtd2VzdFwiPldlc3Q8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQXBwIHtcclxuICAgIHRleHQwID0gXCJ0ZXN0XCI7XHJcbiAgICBzY2VuZSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgLy92YXIgdGV4dCA9IFwiaGVsbG9cIjtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJtYWluLWFwcFwiKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGVkP1wiKTtcclxuICAgICAgICAgICAgJCgnI2NvbnRhaW5lcicpLmxheW91dCh7cmVzaXphYmxlOnRydWV9KTtcclxuICAgICAgICAgICAgc2VsZi5pbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbmRlckNhbnZhc1wiKTtcclxuXHJcbiAgICAgICAgdmFyIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblx0XHR2YXIgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgd2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDAgKTtcclxuXHJcblx0XHQvL3ZhciByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBjYW52YXM6IGNhbnZhcyB9KTtcclxuXHRcdHJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcclxuICAgICAgICAvL3JlbmRlcmVyLnNldFNpemUoIDgwMCwgNjAwICk7XHJcblx0XHQvL2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuXHJcblx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEsIDEsIDEgKTtcclxuXHRcdHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHgwMGZmMDAgfSApO1xyXG5cdFx0dmFyIGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblx0XHRzY2VuZS5hZGQoIGN1YmUgKTtcclxuXHJcblx0XHRjYW1lcmEucG9zaXRpb24ueiA9IDU7XHJcblxyXG5cdFx0dmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCByZW5kZXIgKTtcclxuXHJcblx0XHRcdGN1YmUucm90YXRpb24ueCArPSAwLjE7XHJcblx0XHRcdGN1YmUucm90YXRpb24ueSArPSAwLjE7XHJcblxyXG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJlbmRlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL2NvbnN0IHJvdXRpbmcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICAvL3sgcGF0aDogJycsIGNvbXBvbmVudDogSGVsbG8gfSxcclxuICAgIC8veyBwYXRoOiAnY2lhby86bmFtZScsIGNvbXBvbmVudDogQ2lhbyB9LFxyXG4vL10pO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLy8sXHJcbiAgICAgICAgLy9yb3V0aW5nLFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIE1haW5BcHAvLyxcclxuICAgICAgICAvL0hlbGxvLFxyXG4gICAgICAgIC8vQ2lhbyxcclxuICAgICAgICAvL0xpbmtlcixcclxuICAgIF0sXHJcbiAgICAvL3Byb3ZpZGVyczogW1xyXG4gICAgICAgIC8vR3JlZXRlcixcclxuICAgICAgICAvL3sgcHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0sXHJcbiAgICAvL10sXHJcbiAgICBib290c3RyYXA6IFtNYWluQXBwXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59XHJcbiIsIi8vbWFpbiBlbnRyeVxyXG5cclxuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XHJcbmltcG9ydCAnem9uZS5qcy9kaXN0L3pvbmUnO1xyXG5cclxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcCc7XHJcblxyXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XHJcblxyXG4vKlxyXG4vL2RvZXMgbm90IHdvcmsgd2l0aCBodHRwczovL2FuZ3VsYXIuaW8vZG9jcy90cy9sYXRlc3QvcXVpY2tzdGFydC5odG1sIHRoYXQgaXQgcmVxaXJlIHNoaW0uIFNpbmNlIGl0IHR5cGVzY3JpcHRcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgdGVtcGxhdGU6IGA8aDE+SGVsbG8ge3tuYW1lfX08L2gxPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IG5hbWUgPSAnQW5ndWxhcic7IH1cclxuKi9cclxuIl19