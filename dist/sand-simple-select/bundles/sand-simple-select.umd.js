(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('sand-simple-select', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/common/http'], factory) :
    (global = global || self, factory(global['sand-simple-select'] = {}, global.ng.core, global.ng.forms, global.ng.common, global.ng.common.http));
}(this, (function (exports, i0, i2, i1, http) { 'use strict';

    var SandSimpleSelectService = /** @class */ (function () {
        function SandSimpleSelectService() {
        }
        return SandSimpleSelectService;
    }());
    SandSimpleSelectService.ɵfac = function SandSimpleSelectService_Factory(t) { return new (t || SandSimpleSelectService)(); };
    SandSimpleSelectService.ɵprov = i0.ɵɵdefineInjectable({ token: SandSimpleSelectService, factory: SandSimpleSelectService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SandSimpleSelectService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var SelectFilterPipe = /** @class */ (function () {
        function SelectFilterPipe() {
        }
        SelectFilterPipe.prototype.transform = function (array, column, query) {
            if (array.length !== 0 && query) {
                return array.filter(function (s) { return s[column].toLowerCase().includes(query.toLowerCase()); });
            }
            return array;
        };
        return SelectFilterPipe;
    }());
    SelectFilterPipe.ɵfac = function SelectFilterPipe_Factory(t) { return new (t || SelectFilterPipe)(); };
    SelectFilterPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "selectFilter", type: SelectFilterPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectFilterPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'selectFilter'
                    }]
            }], null, null);
    })();

    var HighlightSearch = /** @class */ (function () {
        function HighlightSearch() {
        }
        HighlightSearch.prototype.transform = function (value, key, query) {
            if (!query) {
                return value;
            }
            var regex = new RegExp(query, 'gi');
            var match = value[key].match(regex);
            if (!match) {
                return value;
            }
            return value[key].replace(regex, "<span class='highlight'>" + match[0] + "</span>");
        };
        return HighlightSearch;
    }());
    HighlightSearch.ɵfac = function HighlightSearch_Factory(t) { return new (t || HighlightSearch)(); };
    HighlightSearch.ɵpipe = i0.ɵɵdefinePipe({ name: "highlight", type: HighlightSearch, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HighlightSearch, [{
                type: i0.Pipe,
                args: [{
                        name: 'highlight',
                    }]
            }], null, null);
    })();

    var SharedPipe = /** @class */ (function () {
        function SharedPipe() {
        }
        return SharedPipe;
    }());
    SharedPipe.ɵmod = i0.ɵɵdefineNgModule({ type: SharedPipe });
    SharedPipe.ɵinj = i0.ɵɵdefineInjector({ factory: function SharedPipe_Factory(t) { return new (t || SharedPipe)(); }, providers: [], imports: [[]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedPipe, { declarations: [SelectFilterPipe,
                HighlightSearch], exports: [SelectFilterPipe,
                HighlightSearch] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SharedPipe, [{
                type: i0.NgModule,
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
            }], null, null);
    })();

    function SandSimpleSelectComponent_ng_container_5_ng_container_7_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0, 12);
            i0.ɵɵelementContainerStart(1);
            i0.ɵɵelementStart(2, "div", 13);
            i0.ɵɵlistener("click", function SandSimpleSelectComponent_ng_container_5_ng_container_7_ng_container_2_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r7_1); var field_r4 = ctx.$implicit; var i_r5 = ctx.index; var ctx_r6 = i0.ɵɵnextContext(3); return ctx_r6.onSelect(field_r4, i_r5); });
            i0.ɵɵelementStart(3, "div", 14);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var field_r4 = ctx.$implicit;
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(field_r4.name);
        }
    }
    function SandSimpleSelectComponent_ng_container_5_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 10);
            i0.ɵɵtemplate(2, SandSimpleSelectComponent_ng_container_5_ng_container_7_ng_container_2_Template, 5, 1, "ng-container", 11);
            i0.ɵɵpipe(3, "selectFilter");
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(3, 1, ctx_r1.dropdowndata, "name", ctx_r1.searchKey));
        }
    }
    function SandSimpleSelectComponent_ng_container_5_div_9_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c0 = function (a0) { return { $implicit: a0 }; };
    function SandSimpleSelectComponent_ng_container_5_div_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 15);
            i0.ɵɵtemplate(1, SandSimpleSelectComponent_ng_container_5_div_9_ng_container_1_Template, 1, 0, "ng-container", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.notFoundTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r2.noDataText));
        }
    }
    function SandSimpleSelectComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 3);
            i0.ɵɵelementStart(2, "div", 4);
            i0.ɵɵelementStart(3, "div", 5);
            i0.ɵɵelementStart(4, "div", 6);
            i0.ɵɵelementStart(5, "input", 7);
            i0.ɵɵlistener("click", function SandSimpleSelectComponent_ng_container_5_Template_input_click_5_listener($event) { i0.ɵɵrestoreView(_r10_1); return $event.stopPropagation(); })("ngModelChange", function SandSimpleSelectComponent_ng_container_5_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.searchKey = $event; })("input", function SandSimpleSelectComponent_ng_container_5_Template_input_input_5_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onSearch($event); });
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
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx_r0.searchKey);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r0.dropdowndata.length !== 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r0.noData);
        }
    }
    var SandSimpleSelectComponent = /** @class */ (function () {
        function SandSimpleSelectComponent() {
            this.noData = false;
            this.searchKey = '';
            /**
           * Get the values for the dropdown
           */
            this.dropdowndata = [];
            /**
             * Emit event upon selecting a value
            */
            this.select = new i0.EventEmitter();
            /**
            * Emit event upon selecting a value
           */
            this.open = new i0.EventEmitter();
            /**
             * Emit event upon selecting a value
            */
            this.close = new i0.EventEmitter();
            /**
             * Emit event on searching
             */
            this.search = new i0.EventEmitter();
            /**
            * Propagates new value when model changes
            */
            this.propagateChange = function () {
            };
            this.onTouched = function () {
            };
        }
        SandSimpleSelectComponent.prototype.ngOnInit = function () {
        };
        /**
         * Writes a new value from the form model into the view,
         * Updates model
         */
        SandSimpleSelectComponent.prototype.writeValue = function (value) {
            if (value) {
                //
            }
        };
        /**
         * Registers a handler that is called when something in the view has changed
         */
        SandSimpleSelectComponent.prototype.registerOnChange = function (fn) {
            this.propagateChange = fn;
        };
        /**
         * Registers a handler specifically for when a control receives a touch event
         */
        SandSimpleSelectComponent.prototype.registerOnTouched = function (fn) {
        };
        /**
       * Event upon clicking the select button
       */
        SandSimpleSelectComponent.prototype.showDropdown = function () {
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
        };
        /**
         *
         * Event on search
         */
        SandSimpleSelectComponent.prototype.onSearch = function (event) {
            this.search.emit(event.target.value);
        };
        /**
        * Event upon selecting a value
        */
        SandSimpleSelectComponent.prototype.onSelect = function (data, i) {
            this.select.emit(data);
            this.propagateChange(data);
            this.showList = false;
            this.selectLabel = data.name;
        };
        /**
      * click listener for host inside this component i.e
      * if many instances are there, this detects if clicked inside
      * this instance
      */
        SandSimpleSelectComponent.prototype.clickInsideComponent = function () {
            this.clickedInside = true;
        };
        /**
         * click handler on documnent to hide the open dropdown if clicked outside
         */
        SandSimpleSelectComponent.prototype.clickOutsideComponent = function () {
            /* istanbul ignore else */
            if (!this.clickedInside) {
                this.showList = false;
                this.init();
            }
            this.clickedInside = false;
        };
        SandSimpleSelectComponent.prototype.focus = function (event) {
            this.showList = false;
            this.init();
        };
        SandSimpleSelectComponent.prototype.blur = function (event) {
            this.showList = false;
            this.init();
        };
        SandSimpleSelectComponent.prototype.init = function () {
            this.searchKey = '';
        };
        return SandSimpleSelectComponent;
    }());
    SandSimpleSelectComponent.ɵfac = function SandSimpleSelectComponent_Factory(t) { return new (t || SandSimpleSelectComponent)(); };
    SandSimpleSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SandSimpleSelectComponent, selectors: [["sand-simple-select"]], hostBindings: function SandSimpleSelectComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function SandSimpleSelectComponent_click_HostBindingHandler() { return ctx.clickInsideComponent(); })("click", function SandSimpleSelectComponent_click_HostBindingHandler() { return ctx.clickOutsideComponent(); }, false, i0.ɵɵresolveDocument)("focus", function SandSimpleSelectComponent_focus_HostBindingHandler($event) { return ctx.focus($event); })("blur", function SandSimpleSelectComponent_blur_HostBindingHandler($event) { return ctx.blur($event); });
            }
        }, inputs: { itemTemplate: "itemTemplate", notFoundTemplate: "notFoundTemplate", selectLabel: "selectLabel", noDataText: "noDataText", disabledropdwon: "disabledropdwon", dropdowndata: "dropdowndata" }, outputs: { select: "select", open: "open", close: "close", search: "search" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: i2.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return SandSimpleSelectComponent; }),
                    multi: true,
                },
            ])], decls: 6, vars: 2, consts: [["tabindex", "-1", 1, "a-te-dropdown", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-down"], [4, "ngIf"], [1, "a-te-dropdownlist", "shadow"], [1, "container-wrap"], [1, "tr-te-search-outer"], [1, "tr-te-searchbar"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "click", "ngModelChange", "input"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["class", "not-found", 4, "ngIf"], [1, "triggerchoose-list-scroll"], ["class", "v-loop", 4, "ngFor", "ngForOf"], [1, "v-loop"], [1, "tr-c-list-item-i", 3, "click"], [1, "v-container"], [1, "not-found"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SandSimpleSelectComponent_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate1(" ", ctx.selectLabel, " ");
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.showList && !ctx.disabledropdwon);
            }
        }, directives: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgForOf, i1.NgTemplateOutlet], pipes: [SelectFilterPipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.a-te-dropdown[_ngcontent-%COMP%]{border:1px solid #e2d4d4;border-radius:6px;padding:10px}.a-te-dropdown[_ngcontent-%COMP%]:hover{cursor:pointer}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .tr-te-search-outer[_ngcontent-%COMP%]{background:#f2f7f8;padding:10px}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .tr-te-search-outer[_ngcontent-%COMP%]   .tr-te-searchbar[_ngcontent-%COMP%]{position:relative}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .tr-te-search-outer[_ngcontent-%COMP%]   .tr-te-searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-clip:padding-box;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;color:#495057;display:block;font-size:1rem;font-weight:400;height:calc(1.5em + .75rem + 2px);line-height:1.5;padding:.375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .triggerchoose-list-scroll[_ngcontent-%COMP%]{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important;max-height:270px;overflow:auto}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .triggerchoose-list-scroll[_ngcontent-%COMP%]   .tr-c-list-item-i[_ngcontent-%COMP%]{background:#fff;color:#1c057d;cursor:pointer;font-weight:500;padding:7px}.a-te-dropdownlist[_ngcontent-%COMP%]   .container-wrap[_ngcontent-%COMP%]   .triggerchoose-list-scroll[_ngcontent-%COMP%]   .tr-c-list-item-i[_ngcontent-%COMP%]:hover{background:#f2f7f8!important;color:#00aeb3;cursor:pointer}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SandSimpleSelectComponent, [{
                type: i0.Component,
                args: [{
                        selector: "sand-simple-select",
                        templateUrl: "./sand-simple-select.component.html",
                        styleUrls: ["./sand-simple-select.component.scss"],
                        providers: [
                            {
                                provide: i2.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return SandSimpleSelectComponent; }),
                                multi: true,
                            },
                        ],
                    }]
            }], function () { return []; }, { itemTemplate: [{
                    type: i0.Input
                }], notFoundTemplate: [{
                    type: i0.Input
                }], selectLabel: [{
                    type: i0.Input
                }], noDataText: [{
                    type: i0.Input
                }], disabledropdwon: [{
                    type: i0.Input
                }], dropdowndata: [{
                    type: i0.Input
                }], select: [{
                    type: i0.Output
                }], open: [{
                    type: i0.Output
                }], close: [{
                    type: i0.Output
                }], search: [{
                    type: i0.Output
                }], clickInsideComponent: [{
                    type: i0.HostListener,
                    args: ['click']
                }], clickOutsideComponent: [{
                    type: i0.HostListener,
                    args: ['document:click']
                }], focus: [{
                    type: i0.HostListener,
                    args: ['focus', ['$event']]
                }], blur: [{
                    type: i0.HostListener,
                    args: ['blur', ['$event']]
                }] });
    })();

    var SandSimpleSelectModule = /** @class */ (function () {
        function SandSimpleSelectModule() {
        }
        return SandSimpleSelectModule;
    }());
    SandSimpleSelectModule.ɵmod = i0.ɵɵdefineNgModule({ type: SandSimpleSelectModule });
    SandSimpleSelectModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SandSimpleSelectModule_Factory(t) { return new (t || SandSimpleSelectModule)(); }, imports: [[
                http.HttpClientModule,
                i1.CommonModule,
                i2.FormsModule,
                SharedPipe
            ], SharedPipe] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SandSimpleSelectModule, { declarations: [SandSimpleSelectComponent], imports: [http.HttpClientModule,
                i1.CommonModule,
                i2.FormsModule,
                SharedPipe], exports: [SandSimpleSelectComponent,
                SharedPipe] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SandSimpleSelectModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [SandSimpleSelectComponent],
                        imports: [
                            http.HttpClientModule,
                            i1.CommonModule,
                            i2.FormsModule,
                            SharedPipe
                        ],
                        exports: [
                            SandSimpleSelectComponent,
                            SharedPipe
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of sand-simple-select
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SandSimpleSelectComponent = SandSimpleSelectComponent;
    exports.SandSimpleSelectModule = SandSimpleSelectModule;
    exports.SandSimpleSelectService = SandSimpleSelectService;
    exports.SharedPipe = SharedPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sand-simple-select.umd.js.map
