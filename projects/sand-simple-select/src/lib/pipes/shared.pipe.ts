import { NgModule } from '@angular/core';
import { SelectFilterPipe } from './filter.pipe'
import { HighlightSearch } from './highlight.pipe';


@NgModule({
    exports: [
        SelectFilterPipe,
        HighlightSearch
    ],
    imports: [
        
    ],
    declarations: [
        SelectFilterPipe,
        HighlightSearch
    ],
    providers: [
    ]
})
export class SharedPipe { }
