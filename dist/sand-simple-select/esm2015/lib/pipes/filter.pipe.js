import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SelectFilterPipe {
    transform(array, column, query) {
        if (array.length !== 0 && query) {
            return array.filter(s => s[column].toLowerCase().includes(query.toLowerCase()));
        }
        return array;
    }
}
SelectFilterPipe.ɵfac = function SelectFilterPipe_Factory(t) { return new (t || SelectFilterPipe)(); };
SelectFilterPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "selectFilter", type: SelectFilterPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectFilterPipe, [{
        type: Pipe,
        args: [{
                name: 'selectFilter'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiRDovRXhwZXJpbWVudHMvU2FuZFNpbXBsZVNlbGVjdC9wcm9qZWN0cy9zYW5kLXNpbXBsZS1zZWxlY3Qvc3JjLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2ZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUlwRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQ3pCLFNBQVMsQ0FBQyxLQUFZLEVBQUUsTUFBYyxFQUFFLEtBQWE7UUFDakQsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ25GO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7Z0ZBTlEsZ0JBQWdCO3VFQUFoQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQUg1QixJQUFJO2VBQUM7Z0JBQ0YsSUFBSSxFQUFFLGNBQWM7YUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdzZWxlY3RGaWx0ZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oYXJyYXk6IGFueVtdLCBjb2x1bW46IHN0cmluZywgcXVlcnk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCAhPT0gMCAmJiBxdWVyeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKHMgPT4gc1tjb2x1bW5dLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcbn1cclxuIl19