import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SelectFilterPipe implements PipeTransform {
    transform(array: any[], column: string, query: string): any;
    static ɵfac: i0.ɵɵFactoryDef<SelectFilterPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SelectFilterPipe, "selectFilter">;
}
