import { NgModule } from '@angular/core';
import { SandSimpleSelectComponent } from './sand-simple-select/sand-simple-select.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectFilterPipe } from './pipes/filter.pipe';
import * as i0 from "@angular/core";
// import { SharedPipe } from './pipes/shared.pipe';
export class SandSimpleSelectModule {
}
SandSimpleSelectModule.ɵmod = i0.ɵɵdefineNgModule({ type: SandSimpleSelectModule });
SandSimpleSelectModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SandSimpleSelectModule_Factory(t) { return new (t || SandSimpleSelectModule)(); }, imports: [[
            HttpClientModule,
            CommonModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SandSimpleSelectModule, { declarations: [SandSimpleSelectComponent,
        SelectFilterPipe], imports: [HttpClientModule,
        CommonModule,
        FormsModule], exports: [SandSimpleSelectComponent,
        // SharedPipe
        SelectFilterPipe] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SandSimpleSelectModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    SandSimpleSelectComponent,
                    SelectFilterPipe
                ],
                imports: [
                    HttpClientModule,
                    CommonModule,
                    FormsModule,
                ],
                exports: [
                    SandSimpleSelectComponent,
                    // SharedPipe
                    SelectFilterPipe
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuZC1zaW1wbGUtc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9FeHBlcmltZW50cy9TYW5kU2ltcGxlU2VsZWN0L3Byb2plY3RzL3NhbmQtc2ltcGxlLXNlbGVjdC9zcmMvIiwic291cmNlcyI6WyJsaWIvc2FuZC1zaW1wbGUtc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBQ3ZELG9EQUFvRDtBQXVCcEQsTUFBTSxPQUFPLHNCQUFzQjs7MERBQXRCLHNCQUFzQjsySEFBdEIsc0JBQXNCLGtCQWJ4QjtZQUNQLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osV0FBVztTQUdaO3dGQU9VLHNCQUFzQixtQkFoQi9CLHlCQUF5QjtRQUN6QixnQkFBZ0IsYUFHaEIsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixXQUFXLGFBS1gseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYixnQkFBZ0I7a0RBR1Asc0JBQXNCO2NBbEJsQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHlCQUF5QjtvQkFDekIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLFdBQVc7aUJBR1o7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHlCQUF5QjtvQkFDekIsYUFBYTtvQkFDYixnQkFBZ0I7aUJBQ2pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTYW5kU2ltcGxlU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zYW5kLXNpbXBsZS1zZWxlY3Qvc2FuZC1zaW1wbGUtc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTZWxlY3RGaWx0ZXJQaXBlIH0gZnJvbSAnLi9waXBlcy9maWx0ZXIucGlwZSc7XHJcbi8vIGltcG9ydCB7IFNoYXJlZFBpcGUgfSBmcm9tICcuL3BpcGVzL3NoYXJlZC5waXBlJztcclxuXHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTYW5kU2ltcGxlU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgU2VsZWN0RmlsdGVyUGlwZVxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgLy8gU2hhcmVkUGlwZVxyXG5cclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNhbmRTaW1wbGVTZWxlY3RDb21wb25lbnQsXHJcbiAgICAvLyBTaGFyZWRQaXBlXHJcbiAgICBTZWxlY3RGaWx0ZXJQaXBlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FuZFNpbXBsZVNlbGVjdE1vZHVsZSB7IH1cclxuIl19