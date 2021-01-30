import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class HighlightSearch {
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
HighlightSearch.ɵpipe = i0.ɵɵdefinePipe({ name: "highlight", type: HighlightSearch, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HighlightSearch, [{
        type: Pipe,
        args: [{
                name: 'highlight',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiRDovRXhwZXJpbWVudHMvU2FuZFNpbXBsZVNlbGVjdC9wcm9qZWN0cy9zYW5kLXNpbXBsZS1zZWxlY3Qvc3JjLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2hpZ2hsaWdodC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sZUFBZTtJQUN4QixTQUFTLENBQUMsS0FBWSxFQUFFLEdBQU8sRUFBRSxLQUFVO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0QyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsMkJBQTJCLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7OEVBYlEsZUFBZTttRUFBZixlQUFlO2tEQUFmLGVBQWU7Y0FIM0IsSUFBSTtlQUFDO2dCQUNGLElBQUksRUFBRSxXQUFXO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2hpZ2hsaWdodCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRTZWFyY2ggaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55W10sIGtleTphbnksIHF1ZXJ5OiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICghcXVlcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAocXVlcnksICdnaScpO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gdmFsdWVba2V5XS5tYXRjaChyZWdleCk7XHJcblxyXG4gICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlW2tleV0ucmVwbGFjZShyZWdleCwgYDxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPiR7bWF0Y2hbMF19PC9zcGFuPmApO1xyXG4gICAgfVxyXG59Il19