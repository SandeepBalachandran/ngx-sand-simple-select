import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefinePipe, Pipe, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵgetCurrentView, ɵɵelementContainerStart, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵelementContainerEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵpipe, ɵɵproperty, ɵɵpipeBind3, ɵɵelementContainer, ɵɵpureFunction1, ɵɵelement, EventEmitter, ɵɵdefineComponent, ɵɵresolveDocument, ɵɵProvidersFeature, forwardRef, ɵɵtextInterpolate1, Component, Input, Output, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { NgIf, NgForOf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

class SandSimpleSelectService {
    constructor() { }
}
SandSimpleSelectService.ɵfac = function SandSimpleSelectService_Factory(t) { return new (t || SandSimpleSelectService)(); };
SandSimpleSelectService.ɵprov = ɵɵdefineInjectable({ token: SandSimpleSelectService, factory: SandSimpleSelectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SandSimpleSelectService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class SelectFilterPipe {
    transform(array, column, query) {
        if (array.length !== 0 && query) {
            return array.filter(s => s[column].toLowerCase().includes(query.toLowerCase()));
        }
        return array;
    }
}
SelectFilterPipe.ɵfac = function SelectFilterPipe_Factory(t) { return new (t || SelectFilterPipe)(); };
SelectFilterPipe.ɵpipe = ɵɵdefinePipe({ name: "selectFilter", type: SelectFilterPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectFilterPipe, [{
        type: Pipe,
        args: [{
                name: 'selectFilter'
            }]
    }], null, null); })();

class HighlightSearch {
    transform(value, key, query) {
        if (!query) {
            return value;
        }
        const regex = new RegExp(query, 'gi');
        const match = value[key].match(regex);
        if (!match) {
            return value;
        }
        return value[key].replace(regex, `<span class='highlight'>${match[0]}</span>`);
    }
}
HighlightSearch.ɵfac = function HighlightSearch_Factory(t) { return new (t || HighlightSearch)(); };
HighlightSearch.ɵpipe = ɵɵdefinePipe({ name: "highlight", type: HighlightSearch, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HighlightSearch, [{
        type: Pipe,
        args: [{
                name: 'highlight',
            }]
    }], null, null); })();

class SharedPipe {
}
SharedPipe.ɵmod = ɵɵdefineNgModule({ type: SharedPipe });
SharedPipe.ɵinj = ɵɵdefineInjector({ factory: function SharedPipe_Factory(t) { return new (t || SharedPipe)(); }, providers: [], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SharedPipe, { declarations: [SelectFilterPipe,
        HighlightSearch], exports: [SelectFilterPipe,
        HighlightSearch] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SharedPipe, [{
        type: NgModule,
        args: [{
                exports: [
                    SelectFilterPipe,
                    HighlightSearch
                ],
                imports: [],
                declarations: [
                    SelectFilterPipe,
                    HighlightSearch
                ],
                providers: []
            }]
    }], null, null); })();

function SandSimpleSelectComponent_ng_container_5_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0, 12);
    ɵɵelementContainerStart(1);
    ɵɵelementStart(2, "div", 13);
    ɵɵlistener("click", function SandSimpleSelectComponent_ng_container_5_ng_container_7_ng_container_2_Template_div_click_2_listener() { ɵɵrestoreView(_r7); const field_r4 = ctx.$implicit; const i_r5 = ctx.index; const ctx_r6 = ɵɵnextContext(3); return ctx_r6.onSelect(field_r4, i_r5); });
    ɵɵelementStart(3, "div", 14);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    ɵɵadvance(4);
    ɵɵtextInterpolate(field_r4.name);
} }
function SandSimpleSelectComponent_ng_container_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 10);
    ɵɵtemplate(2, SandSimpleSelectComponent_ng_container_5_ng_container_7_ng_container_2_Template, 5, 1, "ng-container", 11);
    ɵɵpipe(3, "selectFilter");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind3(3, 1, ctx_r1.dropdowndata, "name", ctx_r1.searchKey));
} }
function SandSimpleSelectComponent_ng_container_5_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function SandSimpleSelectComponent_ng_container_5_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, SandSimpleSelectComponent_ng_container_5_div_9_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.notFoundTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r2.noDataText));
} }
function SandSimpleSelectComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵelementStart(2, "div", 4);
    ɵɵelementStart(3, "div", 5);
    ɵɵelementStart(4, "div", 6);
    ɵɵelementStart(5, "input", 7);
    ɵɵlistener("click", function SandSimpleSelectComponent_ng_container_5_Template_input_click_5_listener($event) { ɵɵrestoreView(_r10); return $event.stopPropagation(); })("ngModelChange", function SandSimpleSelectComponent_ng_container_5_Template_input_ngModelChange_5_listener($event) { ɵɵrestoreView(_r10); const ctx_r11 = ɵɵnextContext(); return ctx_r11.searchKey = $event; })("input", function SandSimpleSelectComponent_ng_container_5_Template_input_input_5_listener($event) { ɵɵrestoreView(_r10); const ctx_r12 = ɵɵnextContext(); return ctx_r12.onSearch($event); });
    ɵɵelementEnd();
    ɵɵelement(6, "i", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(7, SandSimpleSelectComponent_ng_container_5_ng_container_7_Template, 4, 5, "ng-container", 2);
    ɵɵelementContainerStart(8);
    ɵɵtemplate(9, SandSimpleSelectComponent_ng_container_5_div_9_Template, 2, 4, "div", 9);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵproperty("ngModel", ctx_r0.searchKey);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.dropdowndata.length !== 0);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.noData);
} }
class SandSimpleSelectComponent {
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
SandSimpleSelectComponent.ɵcmp = ɵɵdefineComponent({ type: SandSimpleSelectComponent, selectors: [["sand-simple-select"]], hostBindings: function SandSimpleSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function SandSimpleSelectComponent_click_HostBindingHandler() { return ctx.clickInsideComponent(); })("click", function SandSimpleSelectComponent_click_HostBindingHandler() { return ctx.clickOutsideComponent(); }, false, ɵɵresolveDocument)("focus", function SandSimpleSelectComponent_focus_HostBindingHandler($event) { return ctx.focus($event); })("blur", function SandSimpleSelectComponent_blur_HostBindingHandler($event) { return ctx.blur($event); });
    } }, inputs: { itemTemplate: "itemTemplate", notFoundTemplate: "notFoundTemplate", selectLabel: "selectLabel", noDataText: "noDataText", disabledropdwon: "disabledropdwon", dropdowndata: "dropdowndata" }, outputs: { select: "select", open: "open", close: "close", search: "search" }, features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SandSimpleSelectComponent),
                multi: true,
            },
        ])], decls: 6, vars: 2, consts: [["tabindex", "-1", 1, "a-te-dropdown", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-down"], [4, "ngIf"], [1, "a-te-dropdownlist", "shadow"], [1, "container-wrap"], [1, "tr-te-search-outer"], [1, "tr-te-searchbar"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "click", "ngModelChange", "input"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["class", "not-found", 4, "ngIf"], [1, "triggerchoose-list-scroll"], ["class", "v-loop", 4, "ngFor", "ngForOf"], [1, "v-loop"], [1, "tr-c-list-item-i", 3, "click"], [1, "v-container"], [1, "not-found"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SandSimpleSelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0);
        ɵɵelementStart(1, "div", 0);
        ɵɵlistener("click", function SandSimpleSelectComponent_Template_div_click_1_listener() { return ctx.showDropdown(); })("click", function SandSimpleSelectComponent_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
        ɵɵelementStart(2, "span");
        ɵɵtext(3);
        ɵɵelement(4, "i", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(5, SandSimpleSelectComponent_ng_container_5_Template, 10, 3, "ng-container", 2);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ctx.selectLabel, " ");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.showList && !ctx.disabledropdwon);
    } }, directives: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, NgForOf, NgTemplateOutlet], pipes: [SelectFilterPipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.a-te-dropdown[_ngcontent-%COMP%]{border:1px solid #e2d4d4;border-radius:6px;padding:10px}.a-te-dropdown[_ngcontent-%COMP%]:hover{cursor:pointer}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .tr-te-search-outer[_ngcontent-%COMP%]{background:#f2f7f8;padding:10px}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .tr-te-search-outer[_ngcontent-%COMP%]   .tr-te-searchbar[_ngcontent-%COMP%]{position:relative}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .tr-te-search-outer[_ngcontent-%COMP%]   .tr-te-searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-clip:padding-box;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;color:#495057;display:block;font-size:1rem;font-weight:400;height:calc(1.5em + .75rem + 2px);line-height:1.5;padding:.375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .triggerchoose-list-scroll[_ngcontent-%COMP%]{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important;max-height:270px;overflow:auto}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .triggerchoose-list-scroll[_ngcontent-%COMP%]   .tr-c-list-item-i[_ngcontent-%COMP%]{background:#fff;color:#1c057d;cursor:pointer;font-weight:500;padding:7px}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .triggerchoose-list-scroll[_ngcontent-%COMP%]   .tr-c-list-item-i[_ngcontent-%COMP%]:hover{background:#f2f7f8!important;color:#00aeb3;cursor:pointer}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SandSimpleSelectComponent, [{
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

class SandSimpleSelectModule {
}
SandSimpleSelectModule.ɵmod = ɵɵdefineNgModule({ type: SandSimpleSelectModule });
SandSimpleSelectModule.ɵinj = ɵɵdefineInjector({ factory: function SandSimpleSelectModule_Factory(t) { return new (t || SandSimpleSelectModule)(); }, imports: [[
            HttpClientModule,
            CommonModule,
            FormsModule,
            SharedPipe
        ], SharedPipe] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SandSimpleSelectModule, { declarations: [SandSimpleSelectComponent], imports: [HttpClientModule,
        CommonModule,
        FormsModule,
        SharedPipe], exports: [SandSimpleSelectComponent,
        SharedPipe] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SandSimpleSelectModule, [{
        type: NgModule,
        args: [{
                declarations: [SandSimpleSelectComponent],
                imports: [
                    HttpClientModule,
                    CommonModule,
                    FormsModule,
                    SharedPipe
                ],
                exports: [
                    SandSimpleSelectComponent,
                    SharedPipe
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of sand-simple-select
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SandSimpleSelectComponent, SandSimpleSelectModule, SandSimpleSelectService, SharedPipe };
//# sourceMappingURL=sand-simple-select.js.map
