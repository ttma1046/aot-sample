/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '../../../src/app/app.component';
import * as i2 from '@angular/common';
var styles_AppComponent = [];
export var RenderType_AppComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_AppComponent,
    data: {} });
function View_AppComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['Hello Angular']))], null, null);
}
function View_AppComponent_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['Hello Angular']))], null, null);
}
function View_AppComponent_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['', '']))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;
        _ck(_v, 1, 0, currVal_0);
    });
}
export function View_AppComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'button', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.toggleHeading() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['Toggle Heading'])),
        (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AppComponent_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AppComponent_2)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i0.ɵted(null, ['\n\n'])), (_l()(), i0.ɵeld(0, null, null, 1, 'h3', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['List of Heroes'])), (_l()(),
            i0.ɵted(null, ['\n'])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AppComponent_3)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.showHeading;
        _ck(_v, 4, 0, currVal_0);
        var currVal_1 = _co.showHeading;
        _ck(_v, 7, 0, currVal_1);
        var currVal_2 = _co.heroes;
        _ck(_v, 13, 0, currVal_2);
    }, null);
}
export function View_AppComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'my-app', [], null, null, null, View_AppComponent_0, RenderType_AppComponent)),
        i0.ɵdid(49152, null, 0, i1.AppComponent, [], null, null)], null, null);
}
export var AppComponentNgFactory = i0.ɵccf('my-app', i1.AppComponent, View_AppComponent_Host_0, {}, {}, []);
//# sourceMappingURL=app.component.ngfactory.js.map