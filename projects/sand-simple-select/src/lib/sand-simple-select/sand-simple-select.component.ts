import { Component, EventEmitter, forwardRef, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
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
})
export class SandSimpleSelectComponent implements OnInit {
  showList: boolean;
  public noData = false;


  constructor() { }

  ngOnInit(): void {

  }

  /**
  * Custom template for the end user for dropdown
  */
  @Input() itemTemplate !: TemplateRef<any>;

  /**
   * Custom template for no data found
   */
  @Input() notFoundTemplate !: TemplateRef<any>;

  /**
 * Label for the select
 */
  @Input() public selectLabel: boolean;

  /**
* Label for the select
*/
  @Input() public noDataText: boolean;

  /**
* Label for the select
*/
  @Input() public disabledropdwon: boolean;

  /**
 * Get the values for the dropdown
 */
  @Input() public dropdowndata: any = [];

  /**
   * Emit event upon selecting a value
  */
  @Output() public select: EventEmitter<any> = new EventEmitter();

  /**
  * Emit event upon selecting a value
 */
  @Output() public open: EventEmitter<any> = new EventEmitter();

  /**
   * Emit event upon selecting a value
  */
  @Output() public close: EventEmitter<any> = new EventEmitter();


  /**
  * Propagates new value when model changes
  */
  propagateChange: any = () => {
  }

  onTouched: any = () => {
  }
  /**
   * Writes a new value from the form model into the view,
   * Updates model
   */
  writeValue(value: any): void {
    if (value) {
      //
    }
  }
  /**
   * Registers a handler that is called when something in the view has changed
   */
  registerOnChange(fn): void {
    this.propagateChange = fn;

  }

  /**
   * Registers a handler specifically for when a control receives a touch event
   */
  registerOnTouched(fn: () => void): void {

  }

  /**
 * Event upon clicking the select button
 */
  showDropdown() {
    this.showList = !this.showList;
    if (this.showList) {
      this.open.emit(true)
    } else {
      this.close.emit(true)
    }
    console.log(this.showList)
    if (this.dropdowndata.length == 0) {
      this.noData = true;
    }
  }
  /**
  * Event upon selecting a value
  */
  onSelect(data, i) {
    this.select.emit(data)
    this.showList = false;
    this.selectLabel = data.name;
  }

}
