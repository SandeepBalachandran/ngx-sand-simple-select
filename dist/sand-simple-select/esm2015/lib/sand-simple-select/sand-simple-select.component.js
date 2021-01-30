import { Component, EventEmitter, forwardRef, HostListener, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../pipes/filter.pipe";
function SandSimpleSelectComponent_ng_container_5_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 12);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelementStart(2, "div", 13);
    i0.ɵɵlistener("click", function SandSimpleSelectComponent_ng_container_5_ng_container_7_ng_container_2_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r7); const field_r4 = ctx.$implicit; const i_r5 = ctx.index; const ctx_r6 = i0.ɵɵnextContext(3); return ctx_r6.onSelect(field_r4, i_r5); });
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(field_r4.name);
} }
function SandSimpleSelectComponent_ng_container_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵtemplate(2, SandSimpleSelectComponent_ng_container_5_ng_container_7_ng_container_2_Template, 5, 1, "ng-container", 11);
    i0.ɵɵpipe(3, "selectFilter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(3, 1, ctx_r1.dropdowndata, "name", ctx_r1.searchKey));
} }
function SandSimpleSelectComponent_ng_container_5_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function SandSimpleSelectComponent_ng_container_5_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, SandSimpleSelectComponent_ng_container_5_div_9_ng_container_1_Template, 1, 0, "ng-container", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.notFoundTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r2.noDataText));
} }
function SandSimpleSelectComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "input", 7);
    i0.ɵɵlistener("click", function SandSimpleSelectComponent_ng_container_5_Template_input_click_5_listener($event) { i0.ɵɵrestoreView(_r10); return $event.stopPropagation(); })("ngModelChange", function SandSimpleSelectComponent_ng_container_5_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.searchKey = $event; })("input", function SandSimpleSelectComponent_ng_container_5_Template_input_input_5_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onSearch($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "i", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, SandSimpleSelectComponent_ng_container_5_ng_container_7_Template, 4, 5, "ng-container", 2);
    i0.ɵɵelementContainerStart(8);
    i0.ɵɵtemplate(9, SandSimpleSelectComponent_ng_container_5_div_9_Template, 2, 4, "div", 9);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r0.searchKey);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.dropdowndata.length !== 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.noData);
} }
export class SandSimpleSelectComponent {
    constructor() {
        this.noData = false;
        this.searchKey = '';
        /**
       * Get the values for the dropdown
       */
        this.dropdowndata = [];
        /**
         * Emit event upon selecting a value
        */
        this.select = new EventEmitter();
        /**
        * Emit event upon selecting a value
       */
        this.open = new EventEmitter();
        /**
         * Emit event upon selecting a value
        */
        this.close = new EventEmitter();
        /**
         * Emit event on searching
         */
        this.search = new EventEmitter();
        /**
        * Propagates new value when model changes
        */
        this.propagateChange = () => {
        };
        this.onTouched = () => {
        };
    }
    ngOnInit() {
    }
    /**
     * Writes a new value from the form model into the view,
     * Updates model
     */
    writeValue(value) {
        if (value) {
            //
        }
    }
    /**
     * Registers a handler that is called when something in the view has changed
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * Registers a handler specifically for when a control receives a touch event
     */
    registerOnTouched(fn) {
    }
    /**
   * Event upon clicking the select button
   */
    showDropdown() {
        this.showList = !this.showList;
        if (this.showList) {
            this.open.emit(true);
        }
        else {
            this.close.emit(true);
        }
        if (this.dropdowndata.length == 0) {
            this.noData = true;
        }
    }
    /**
     *
     * Event on search
     */
    onSearch(event) {
        this.search.emit(event.target.value);
    }
    /**
    * Event upon selecting a value
    */
    onSelect(data, i) {
        this.select.emit(data);
        this.propagateChange(data);
        this.showList = false;
        this.selectLabel = data.name;
    }
    /**
  * click listener for host inside this component i.e
  * if many instances are there, this detects if clicked inside
  * this instance
  */
    clickInsideComponent() {
        this.clickedInside = true;
    }
    /**
     * click handler on documnent to hide the open dropdown if clicked outside
     */
    clickOutsideComponent() {
        /* istanbul ignore else */
        if (!this.clickedInside) {
            this.showList = false;
            this.init();
        }
        this.clickedInside = false;
    }
    focus(event) {
        this.showList = false;
        this.init();
    }
    blur(event) {
        this.showList = false;
        this.init();
    }
    init() {
        this.searchKey = '';
    }
}
SandSimpleSelectComponent.ɵfac = function SandSimpleSelectComponent_Factory(t) { return new (t || SandSimpleSelectComponent)(); };
SandSimpleSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SandSimpleSelectComponent, selectors: [["sand-simple-select"]], hostBindings: function SandSimpleSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function SandSimpleSelectComponent_click_HostBindingHandler() { return ctx.clickInsideComponent(); })("click", function SandSimpleSelectComponent_click_HostBindingHandler() { return ctx.clickOutsideComponent(); }, false, i0.ɵɵresolveDocument)("focus", function SandSimpleSelectComponent_focus_HostBindingHandler($event) { return ctx.focus($event); })("blur", function SandSimpleSelectComponent_blur_HostBindingHandler($event) { return ctx.blur($event); });
    } }, inputs: { itemTemplate: "itemTemplate", notFoundTemplate: "notFoundTemplate", selectLabel: "selectLabel", noDataText: "noDataText", disabledropdwon: "disabledropdwon", dropdowndata: "dropdowndata" }, outputs: { select: "select", open: "open", close: "close", search: "search" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SandSimpleSelectComponent),
                multi: true,
            },
        ])], decls: 6, vars: 2, consts: [["tabindex", "-1", 1, "a-te-dropdown", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-down"], [4, "ngIf"], [1, "a-te-dropdownlist", "shadow"], [1, "container-wrap"], [1, "tr-te-search-outer"], [1, "tr-te-searchbar"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "click", "ngModelChange", "input"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["class", "not-found", 4, "ngIf"], [1, "triggerchoose-list-scroll"], ["class", "v-loop", 4, "ngFor", "ngForOf"], [1, "v-loop"], [1, "tr-c-list-item-i", 3, "click"], [1, "v-container"], [1, "not-found"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SandSimpleSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵlistener("click", function SandSimpleSelectComponent_Template_div_click_1_listener() { return ctx.showDropdown(); })("click", function SandSimpleSelectComponent_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵtext(3);
        i0.ɵɵelement(4, "i", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, SandSimpleSelectComponent_ng_container_5_Template, 10, 3, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.selectLabel, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showList && !ctx.disabledropdwon);
    } }, directives: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgForOf, i1.NgTemplateOutlet], pipes: [i3.SelectFilterPipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.a-te-dropdown[_ngcontent-%COMP%]{border:1px solid #e2d4d4;border-radius:6px;padding:10px}.a-te-dropdown[_ngcontent-%COMP%]:hover{cursor:pointer}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .tr-te-search-outer[_ngcontent-%COMP%]{background:#f2f7f8;padding:10px}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .tr-te-search-outer[_ngcontent-%COMP%]   .tr-te-searchbar[_ngcontent-%COMP%]{position:relative}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .tr-te-search-outer[_ngcontent-%COMP%]   .tr-te-searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-clip:padding-box;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;color:#495057;display:block;font-size:1rem;font-weight:400;height:calc(1.5em + .75rem + 2px);line-height:1.5;padding:.375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .triggerchoose-list-scroll[_ngcontent-%COMP%]{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important;max-height:270px;overflow:auto}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .triggerchoose-list-scroll[_ngcontent-%COMP%]   .tr-c-list-item-i[_ngcontent-%COMP%]{background:#fff;color:#1c057d;cursor:pointer;font-weight:500;padding:7px}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .triggerchoose-list-scroll[_ngcontent-%COMP%]   .tr-c-list-item-i[_ngcontent-%COMP%]:hover{background:#f2f7f8!important;color:#00aeb3;cursor:pointer}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SandSimpleSelectComponent, [{
        type: Component,
        args: [{
                selector: "sand-simple-select",
                templateUrl: "./sand-simple-select.component.html",
                styleUrls: ["./sand-simple-select.component.scss"],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SandSimpleSelectComponent),
                        multi: true,
                    },
                ],
            }]
    }], function () { return []; }, { itemTemplate: [{
            type: Input
        }], notFoundTemplate: [{
            type: Input
        }], selectLabel: [{
            type: Input
        }], noDataText: [{
            type: Input
        }], disabledropdwon: [{
            type: Input
        }], dropdowndata: [{
            type: Input
        }], select: [{
            type: Output
        }], open: [{
            type: Output
        }], close: [{
            type: Output
        }], search: [{
            type: Output
        }], clickInsideComponent: [{
            type: HostListener,
            args: ['click']
        }], clickOutsideComponent: [{
            type: HostListener,
            args: ['document:click']
        }], focus: [{
            type: HostListener,
            args: ['focus', ['$event']]
        }], blur: [{
            type: HostListener,
            args: ['blur', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuZC1zaW1wbGUtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9FeHBlcmltZW50cy9TYW5kU2ltcGxlU2VsZWN0L3Byb2plY3RzL3NhbmQtc2ltcGxlLXNlbGVjdC9zcmMvIiwic291cmNlcyI6WyJsaWIvc2FuZC1zaW1wbGUtc2VsZWN0L3NhbmQtc2ltcGxlLXNlbGVjdC5jb21wb25lbnQudHMiLCJsaWIvc2FuZC1zaW1wbGUtc2VsZWN0L3NhbmQtc2ltcGxlLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDdEgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUNlM0IsaUNBQ0k7SUFBQSw2QkFDSTtJQUFBLCtCQUNJO0lBRDBCLHNTQUEyQjtJQUNyRCwrQkFBeUI7SUFBQSxZQUFjO0lBQUEsaUJBQU07SUFDakQsaUJBQU07SUFDViwwQkFBZTtJQUVuQiwwQkFBZTs7O0lBSnNCLGVBQWM7SUFBZCxtQ0FBYzs7O0lBTDNELDZCQUNJO0lBQUEsK0JBQ0k7SUFBQSwySEFDSTs7SUFPUixpQkFBTTtJQUNWLDBCQUFlOzs7SUFUTyxlQUFvRjtJQUFwRiw2RkFBb0Y7OztJQWdCbEcsd0JBQ2U7Ozs7SUFGbkIsK0JBQ0k7SUFBQSxrSEFDQTtJQUNKLGlCQUFNOzs7SUFGWSxlQUF5RTtJQUF6RSwwREFBeUUsMEVBQUE7Ozs7SUE1QjNHLDZCQUNJO0lBQUEsOEJBQ0k7SUFBQSw4QkFDSTtJQUFBLDhCQUNJO0lBQUEsOEJBQ0k7SUFBQSxnQ0FFQTtJQUZ3QyxrSkFBUyx3QkFBd0IsSUFBQyx1TkFBQSxxTUFBQTtJQUExRSxpQkFFQTtJQUFBLHVCQUErQztJQUNuRCxpQkFBTTtJQUNWLGlCQUFNO0lBQ04sMkdBQ0k7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O1lBS1UsZUFBZTtrQkFBOUIsS0FBSztZQUtVLFlBQVk7a0JBQTNCLEtBQUs7WUFLVyxNQUFNO2tCQUF0QixNQUFNO1lBS1UsSUFBSTtrQkFBcEIsTUFBTTtZQUtVLEtBQUs7a0JBQXJCLE1BQU07WUFLVSxNQUFNO2tCQUF0QixNQUFNO1lBeUVBLG9CQUFvQjtrQkFEMUIsWUFBWTttQkFBQyxPQUFPO1lBVWQscUJBQXFCO2tCQUQzQixZQUFZO21CQUFDLGdCQUFnQjtZQVVZLEtBQUs7a0JBQTlDLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBS1EsSUFBSTtrQkFBNUMsWUFBWTttQkFBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwic2FuZC1zaW1wbGUtc2VsZWN0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9zYW5kLXNpbXBsZS1zZWxlY3QuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vc2FuZC1zaW1wbGUtc2VsZWN0LmNvbXBvbmVudC5zY3NzXCJdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2FuZFNpbXBsZVNlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FuZFNpbXBsZVNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgc2hvd0xpc3Q6IGJvb2xlYW47XHJcbiAgcHVibGljIG5vRGF0YSA9IGZhbHNlO1xyXG4gIGNsaWNrZWRJbnNpZGU6IGJvb2xlYW47XHJcbiAgc2VhcmNoS2V5OiBzdHJpbmc9Jyc7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEN1c3RvbSB0ZW1wbGF0ZSBmb3IgdGhlIGVuZCB1c2VyIGZvciBkcm9wZG93blxyXG4gICovXHJcbiAgQElucHV0KCkgaXRlbVRlbXBsYXRlICE6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIEN1c3RvbSB0ZW1wbGF0ZSBmb3Igbm8gZGF0YSBmb3VuZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kVGVtcGxhdGUgITogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAqIExhYmVsIGZvciB0aGUgc2VsZWN0XHJcbiAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RMYWJlbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiogTGFiZWwgZm9yIHRoZSBzZWxlY3RcclxuKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbm9EYXRhVGV4dDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiogTGFiZWwgZm9yIHRoZSBzZWxlY3RcclxuKi9cclxuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWRyb3Bkd29uOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICogR2V0IHRoZSB2YWx1ZXMgZm9yIHRoZSBkcm9wZG93blxyXG4gKi9cclxuICBASW5wdXQoKSBwdWJsaWMgZHJvcGRvd25kYXRhOiBhbnkgPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdCBldmVudCB1cG9uIHNlbGVjdGluZyBhIHZhbHVlXHJcbiAgKi9cclxuICBAT3V0cHV0KCkgcHVibGljIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICogRW1pdCBldmVudCB1cG9uIHNlbGVjdGluZyBhIHZhbHVlXHJcbiAqL1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgZXZlbnQgdXBvbiBzZWxlY3RpbmcgYSB2YWx1ZVxyXG4gICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgZXZlbnQgb24gc2VhcmNoaW5nXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBzZWFyY2g6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgKiBQcm9wYWdhdGVzIG5ldyB2YWx1ZSB3aGVuIG1vZGVsIGNoYW5nZXNcclxuICAqL1xyXG4gIHByb3BhZ2F0ZUNoYW5nZTogYW55ID0gKCkgPT4ge1xyXG4gIH1cclxuXHJcbiAgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFdyaXRlcyBhIG5ldyB2YWx1ZSBmcm9tIHRoZSBmb3JtIG1vZGVsIGludG8gdGhlIHZpZXcsXHJcbiAgICogVXBkYXRlcyBtb2RlbFxyXG4gICAqL1xyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIC8vXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBhIGhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiBzb21ldGhpbmcgaW4gdGhlIHZpZXcgaGFzIGNoYW5nZWRcclxuICAgKi9cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBhIGhhbmRsZXIgc3BlY2lmaWNhbGx5IGZvciB3aGVuIGEgY29udHJvbCByZWNlaXZlcyBhIHRvdWNoIGV2ZW50XHJcbiAgICovXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogRXZlbnQgdXBvbiBjbGlja2luZyB0aGUgc2VsZWN0IGJ1dHRvblxyXG4gKi9cclxuICBzaG93RHJvcGRvd24oKSB7XHJcbiAgICB0aGlzLnNob3dMaXN0ID0gIXRoaXMuc2hvd0xpc3Q7XHJcbiAgICBpZiAodGhpcy5zaG93TGlzdCkge1xyXG4gICAgICB0aGlzLm9wZW4uZW1pdCh0cnVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbG9zZS5lbWl0KHRydWUpXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kcm9wZG93bmRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhpcy5ub0RhdGEgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBcclxuICAgKiBFdmVudCBvbiBzZWFyY2hcclxuICAgKi9cclxuICBvblNlYXJjaChldmVudCkge1xyXG4gICAgXHJcbiAgICB0aGlzLnNlYXJjaC5lbWl0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICogRXZlbnQgdXBvbiBzZWxlY3RpbmcgYSB2YWx1ZVxyXG4gICovXHJcbiAgb25TZWxlY3QoZGF0YSwgaSkge1xyXG4gICAgdGhpcy5zZWxlY3QuZW1pdChkYXRhKVxyXG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UoZGF0YSlcclxuICAgIHRoaXMuc2hvd0xpc3QgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VsZWN0TGFiZWwgPSBkYXRhLm5hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuKiBjbGljayBsaXN0ZW5lciBmb3IgaG9zdCBpbnNpZGUgdGhpcyBjb21wb25lbnQgaS5lXHJcbiogaWYgbWFueSBpbnN0YW5jZXMgYXJlIHRoZXJlLCB0aGlzIGRldGVjdHMgaWYgY2xpY2tlZCBpbnNpZGVcclxuKiB0aGlzIGluc3RhbmNlXHJcbiovXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIHB1YmxpYyBjbGlja0luc2lkZUNvbXBvbmVudCgpIHtcclxuICAgIHRoaXMuY2xpY2tlZEluc2lkZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogY2xpY2sgaGFuZGxlciBvbiBkb2N1bW5lbnQgdG8gaGlkZSB0aGUgb3BlbiBkcm9wZG93biBpZiBjbGlja2VkIG91dHNpZGVcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycpXHJcbiAgcHVibGljIGNsaWNrT3V0c2lkZUNvbXBvbmVudCgpIHtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAoIXRoaXMuY2xpY2tlZEluc2lkZSkge1xyXG4gICAgICB0aGlzLnNob3dMaXN0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcbiAgICB0aGlzLmNsaWNrZWRJbnNpZGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQnXSkgcHVibGljIGZvY3VzKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNob3dMaXN0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXQoKVxyXG4gICAgXHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudCddKSBwdWJsaWMgYmx1cihldmVudCkge1xyXG4gICAgXHJcbiAgICB0aGlzLnNob3dMaXN0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuc2VhcmNoS2V5ID0gJydcclxuICB9XHJcblxyXG5cclxufVxyXG4iLCI8bmctY29udGFpbmVyPlxyXG4gICAgPGRpdiBjbGFzcz1cImEtdGUtZHJvcGRvd25cIiAoY2xpY2spPVwic2hvd0Ryb3Bkb3duKClcIiB0YWJpbmRleD1cIi0xXCIgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxyXG4gICAgICAgIDxzcGFuPiB7e3NlbGVjdExhYmVsfX0gPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dMaXN0ICYmICFkaXNhYmxlZHJvcGR3b25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYS10ZS1kcm9wZG93bmxpc3Qgc2hhZG93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyLXRlLXNlYXJjaC1vdXRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ci10ZS1zZWFyY2hiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VhcmNoS2V5XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAoaW5wdXQpID1cIm9uU2VhcmNoKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkcm9wZG93bmRhdGEubGVuZ3RoICE9PTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJpZ2dlcmNob29zZS1saXN0LXNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBkcm9wZG93bmRhdGEgIHwgc2VsZWN0RmlsdGVyOiAnbmFtZSc6IHNlYXJjaEtleTsgbGV0IGkgPSBpbmRleFwiIGNsYXNzPVwidi1sb29wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ci1jLWxpc3QtaXRlbS1pXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGZpZWxkLGkpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2LWNvbnRhaW5lclwiPnt7ZmllbGQubmFtZX19PC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLU5vdCBmb3VuZC0tPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90LWZvdW5kXCIgKm5nSWY9XCJub0RhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm5vdEZvdW5kVGVtcGxhdGU7ICBjb250ZXh0OiB7ICRpbXBsaWNpdDpub0RhdGFUZXh0ICB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj4iXX0=