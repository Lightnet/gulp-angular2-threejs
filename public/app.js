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
    template: '\n\n    <div id="container" style="height:100%;width:100%;">\n        <div class="ui-layout-center" style="margin  : 0;padding : 0;">\n            <canvas id="renderCanvas"></canvas>\n        </div>\n        <div class="ui-layout-north">North {{text0}}</div>\n        <div class="ui-layout-south">South</div>\n        <div class="ui-layout-east">East</div>\n        <div class="ui-layout-west">West</div>\n    </div>\n\n    '
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
            //renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.setSize(800, 600);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwic3JjXFxhcHAuanMiLCJzcmNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7Ozs7O2tDQ0FBOztBQUdBOztBQUVBOztBQUVBOztBQUdBOztBQVJBOztBQUVBOztBQUVBOztBQUdBOztBQUdBOztBQUNBOztBQUNBOzs7O0lBa0JhLE8sV0FBQSxPLFdBaEJaLHFCQUFVO0FBQ1AsY0FBVSxVQURIO0FBRVA7QUFGTyxDQUFWLEM7QUFvQkcsdUJBQWE7QUFBQTs7QUFBQSxhQUhiLEtBR2EsR0FITCxNQUdLO0FBQUEsYUFGYixLQUVhLEdBRkwsSUFFSzs7QUFDVCxZQUFJLE9BQU8sSUFBWDtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBSTtBQUM1QyxvQkFBUSxHQUFSLENBQVksU0FBWjtBQUNBLGNBQUUsWUFBRixFQUFnQixNQUFoQixDQUF1QixFQUFDLFdBQVUsSUFBWCxFQUF2QjtBQUNBLGlCQUFLLElBQUw7QUFDSCxTQUpEO0FBS0g7Ozs7K0JBRUs7QUFDRixnQkFBSSxTQUFTLFNBQVMsY0FBVCxDQUF3QixjQUF4QixDQUFiOztBQUVBLGdCQUFJLFFBQVEsSUFBSSxNQUFNLEtBQVYsRUFBWjtBQUNOLGdCQUFJLFNBQVMsSUFBSSxNQUFNLGlCQUFWLENBQTZCLEVBQTdCLEVBQWlDLE9BQU8sVUFBUCxHQUFrQixPQUFPLFdBQTFELEVBQXVFLEdBQXZFLEVBQTRFLElBQTVFLENBQWI7O0FBRUE7QUFDTSxnQkFBSSxXQUFXLElBQUksTUFBTSxhQUFWLENBQXdCLEVBQUUsUUFBUSxNQUFWLEVBQXhCLENBQWY7QUFDTjtBQUNNLHFCQUFTLE9BQVQsQ0FBa0IsR0FBbEIsRUFBdUIsR0FBdkI7QUFDTjs7QUFFQSxnQkFBSSxXQUFXLElBQUksTUFBTSxXQUFWLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCLENBQWY7QUFDQSxnQkFBSSxXQUFXLElBQUksTUFBTSxpQkFBVixDQUE2QixFQUFFLE9BQU8sUUFBVCxFQUE3QixDQUFmO0FBQ0EsZ0JBQUksT0FBTyxJQUFJLE1BQU0sSUFBVixDQUFnQixRQUFoQixFQUEwQixRQUExQixDQUFYO0FBQ0Esa0JBQU0sR0FBTixDQUFXLElBQVg7O0FBRUEsbUJBQU8sUUFBUCxDQUFnQixDQUFoQixHQUFvQixDQUFwQjs7QUFFQSxnQkFBSSxTQUFTLFNBQVQsTUFBUyxHQUFZO0FBQ3hCLHNDQUF1QixNQUF2Qjs7QUFFQSxxQkFBSyxRQUFMLENBQWMsQ0FBZCxJQUFtQixHQUFuQjtBQUNBLHFCQUFLLFFBQUwsQ0FBYyxDQUFkLElBQW1CLEdBQW5COztBQUVBLHlCQUFTLE1BQVQsQ0FBZ0IsS0FBaEIsRUFBdUIsTUFBdkI7QUFDQSxhQVBEOztBQVNBO0FBQ0c7Ozs7OztBQUdMO0FBQ0k7QUFDQTtBQUNKOztJQW1CYSxTLFdBQUEsUyxZQWpCWixvQkFBUztBQUNOLGFBQVMsZ0NBQ1E7QUFDYjtBQUZLLEtBREg7QUFLTixrQkFBYyxDQUNWLE9BRFUsQ0FDSDtBQUNQO0FBQ0E7QUFDQTtBQUpVLEtBTFI7QUFXTjtBQUNJO0FBQ0E7QUFDSjtBQUNBLGVBQVcsQ0FBQyxPQUFEO0FBZkwsQ0FBVCxDOzs7Ozs7O0FDcEZEOztBQUNBOztBQUVBOztBQUVBOztBQVBBOztBQVNBLHNEQUF5QixlQUF6Qjs7QUFFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIiLCIvL3NldHVwIGFwcFxyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgSW5wdXQsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG4vL2ltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbi8vaW1wb3J0IHsgR3JlZXRlciB9IGZyb20gJy4vc2VydmljZXMnO1xyXG5cclxuaW1wb3J0ICcuL3RocmVlLm1pbi5qcyc7XHJcbi8vaW1wb3J0ICcuL3RocmVlLm1vZHVsZS5qcyc7XHJcblxyXG5pbXBvcnQgJy4vanF1ZXJ5Lm1pbi5qcyc7XHJcbmltcG9ydCAnLi9qcXVlcnktdWkubWluLmpzJztcclxuaW1wb3J0ICcuL2pxdWVyeS5sYXlvdXQubWluLmpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYWluLWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG5cclxuICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBzdHlsZT1cImhlaWdodDoxMDAlO3dpZHRoOjEwMCU7XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpLWxheW91dC1jZW50ZXJcIiBzdHlsZT1cIm1hcmdpbiAgOiAwO3BhZGRpbmcgOiAwO1wiPlxyXG4gICAgICAgICAgICA8Y2FudmFzIGlkPVwicmVuZGVyQ2FudmFzXCI+PC9jYW52YXM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpLWxheW91dC1ub3J0aFwiPk5vcnRoIHt7dGV4dDB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1sYXlvdXQtc291dGhcIj5Tb3V0aDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1sYXlvdXQtZWFzdFwiPkVhc3Q8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktbGF5b3V0LXdlc3RcIj5XZXN0PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkFwcCB7XHJcbiAgICB0ZXh0MCA9IFwidGVzdFwiO1xyXG4gICAgc2NlbmUgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIC8vdmFyIHRleHQgPSBcImhlbGxvXCI7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibWFpbi1hcHBcIik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlZD9cIik7XHJcbiAgICAgICAgICAgICQoJyNjb250YWluZXInKS5sYXlvdXQoe3Jlc2l6YWJsZTp0cnVlfSk7XHJcbiAgICAgICAgICAgIHNlbGYuaW5pdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXJDYW52YXNcIik7XHJcblxyXG4gICAgICAgIHZhciBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cdFx0dmFyIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNzUsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwICk7XHJcblxyXG5cdFx0Ly92YXIgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG4gICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzOiBjYW52YXMgfSk7XHJcblx0XHQvL3JlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcclxuICAgICAgICByZW5kZXJlci5zZXRTaXplKCA4MDAsIDYwMCApO1xyXG5cdFx0Ly9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XHJcblxyXG5cdFx0dmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxLCAxLCAxICk7XHJcblx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6IDB4MDBmZjAwIH0gKTtcclxuXHRcdHZhciBjdWJlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cdFx0c2NlbmUuYWRkKCBjdWJlICk7XHJcblxyXG5cdFx0Y2FtZXJhLnBvc2l0aW9uLnogPSA1O1xyXG5cclxuXHRcdHZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSggcmVuZGVyICk7XHJcblxyXG5cdFx0XHRjdWJlLnJvdGF0aW9uLnggKz0gMC4xO1xyXG5cdFx0XHRjdWJlLnJvdGF0aW9uLnkgKz0gMC4xO1xyXG5cclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZW5kZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy9jb25zdCByb3V0aW5nID0gUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgLy97IHBhdGg6ICcnLCBjb21wb25lbnQ6IEhlbGxvIH0sXHJcbiAgICAvL3sgcGF0aDogJ2NpYW8vOm5hbWUnLCBjb21wb25lbnQ6IENpYW8gfSxcclxuLy9dKTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZS8vLFxyXG4gICAgICAgIC8vcm91dGluZyxcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBNYWluQXBwLy8sXHJcbiAgICAgICAgLy9IZWxsbyxcclxuICAgICAgICAvL0NpYW8sXHJcbiAgICAgICAgLy9MaW5rZXIsXHJcbiAgICBdLFxyXG4gICAgLy9wcm92aWRlcnM6IFtcclxuICAgICAgICAvL0dyZWV0ZXIsXHJcbiAgICAgICAgLy97IHByb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9LFxyXG4gICAgLy9dLFxyXG4gICAgYm9vdHN0cmFwOiBbTWFpbkFwcF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG5cclxufVxyXG4iLCIvL21haW4gZW50cnlcclxuXHJcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcclxuXHJcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAnO1xyXG5cclxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG5cclxuLypcclxuLy9kb2VzIG5vdCB3b3JrIHdpdGggaHR0cHM6Ly9hbmd1bGFyLmlvL2RvY3MvdHMvbGF0ZXN0L3F1aWNrc3RhcnQuaHRtbCB0aGF0IGl0IHJlcWlyZSBzaGltLiBTaW5jZSBpdCB0eXBlc2NyaXB0XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gIHRlbXBsYXRlOiBgPGgxPkhlbGxvIHt7bmFtZX19PC9oMT5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBuYW1lID0gJ0FuZ3VsYXInOyB9XHJcbiovXHJcbiJdfQ==