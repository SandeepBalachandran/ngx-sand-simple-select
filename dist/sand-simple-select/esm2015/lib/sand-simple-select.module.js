import { NgModule } from '@angular/core';
import { SandSimpleSelectComponent } from './sand-simple-select/sand-simple-select.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedPipe } from './pipes/shared.pipe';
import * as i0 from "@angular/core";
export class SandSimpleSelectModule {
}
SandSimpleSelectModule.ɵmod = i0.ɵɵdefineNgModule({ type: SandSimpleSelectModule });
SandSimpleSelectModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SandSimpleSelectModule_Factory(t) { return new (t || SandSimpleSelectModule)(); }, imports: [[
            HttpClientModule,
            CommonModule,
            FormsModule,
            SharedPipe
        ], SharedPipe] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SandSimpleSelectModule, { declarations: [SandSimpleSelectComponent], imports: [HttpClientModule,
        CommonModule,
        FormsModule,
        SharedPipe], exports: [SandSimpleSelectComponent,
        SharedPipe] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SandSimpleSelectModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuZC1zaW1wbGUtc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9FeHBlcmltZW50cy9TYW5kU2ltcGxlU2VsZWN0L3Byb2plY3RzL3NhbmQtc2ltcGxlLXNlbGVjdC9zcmMvIiwic291cmNlcyI6WyJsaWIvc2FuZC1zaW1wbGUtc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQW1CakQsTUFBTSxPQUFPLHNCQUFzQjs7MERBQXRCLHNCQUFzQjsySEFBdEIsc0JBQXNCLGtCQVp4QjtZQUNQLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osV0FBVztZQUNYLFVBQVU7U0FFWCxFQUdDLFVBQVU7d0ZBR0Qsc0JBQXNCLG1CQWJsQix5QkFBeUIsYUFFdEMsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixXQUFXO1FBQ1gsVUFBVSxhQUlWLHlCQUF5QjtRQUN6QixVQUFVO2tEQUdELHNCQUFzQjtjQWRsQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxVQUFVO2lCQUVYO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx5QkFBeUI7b0JBQ3pCLFVBQVU7aUJBQ1g7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNhbmRTaW1wbGVTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NhbmQtc2ltcGxlLXNlbGVjdC9zYW5kLXNpbXBsZS1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNoYXJlZFBpcGUgfSBmcm9tICcuL3BpcGVzL3NoYXJlZC5waXBlJztcclxuXHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbU2FuZFNpbXBsZVNlbGVjdENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgU2hhcmVkUGlwZVxyXG5cclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNhbmRTaW1wbGVTZWxlY3RDb21wb25lbnQsXHJcbiAgICBTaGFyZWRQaXBlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FuZFNpbXBsZVNlbGVjdE1vZHVsZSB7IH1cclxuIl19