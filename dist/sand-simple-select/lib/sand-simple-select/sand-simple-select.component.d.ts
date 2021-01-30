import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SandSimpleSelectComponent implements OnInit {
    showList: boolean;
    noData: boolean;
    clickedInside: boolean;
    searchKey: string;
    constructor();
    ngOnInit(): void;
    /**
    * Custom template for the end user for dropdown
    */
    itemTemplate: TemplateRef<any>;
    /**
     * Custom template for no data found
     */
    notFoundTemplate: TemplateRef<any>;
    /**
   * Label for the select
   */
    selectLabel: boolean;
    /**
  * Label for the select
  */
    noDataText: boolean;
    /**
  * Label for the select
  */
    disabledropdwon: boolean;
    /**
   * Get the values for the dropdown
   */
    dropdowndata: any;
    /**
     * Emit event upon selecting a value
    */
    select: EventEmitter<any>;
    /**
    * Emit event upon selecting a value
   */
    open: EventEmitter<any>;
    /**
     * Emit event upon selecting a value
    */
    close: EventEmitter<any>;
    /**
     * Emit event on searching
     */
    search: EventEmitter<any>;
    /**
    * Propagates new value when model changes
    */
    propagateChange: any;
    onTouched: any;
    /**
     * Writes a new value from the form model into the view,
     * Updates model
     */
    writeValue(value: any): void;
    /**
     * Registers a handler that is called when something in the view has changed
     */
    registerOnChange(fn: any): void;
    /**
     * Registers a handler specifically for when a control receives a touch event
     */
    registerOnTouched(fn: () => void): void;
    /**
   * Event upon clicking the select button
   */
    showDropdown(): void;
    /**
     *
     * Event on search
     */
    onSearch(event: any): void;
    /**
    * Event upon selecting a value
    */
    onSelect(data: any, i: any): void;
    /**
  * click listener for host inside this component i.e
  * if many instances are there, this detects if clicked inside
  * this instance
  */
    clickInsideComponent(): void;
    /**
     * click handler on documnent to hide the open dropdown if clicked outside
     */
    clickOutsideComponent(): void;
    focus(event: any): void;
    blur(event: any): void;
    init(): void;
    static ɵfac: i0.ɵɵFactoryDef<SandSimpleSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SandSimpleSelectComponent, "sand-simple-select", never, { "itemTemplate": "itemTemplate"; "notFoundTemplate": "notFoundTemplate"; "selectLabel": "selectLabel"; "noDataText": "noDataText"; "disabledropdwon": "disabledropdwon"; "dropdowndata": "dropdowndata"; }, { "select": "select"; "open": "open"; "close": "close"; "search": "search"; }, never, never>;
}
