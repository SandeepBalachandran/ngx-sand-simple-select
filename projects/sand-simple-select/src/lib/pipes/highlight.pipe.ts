import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'highlight',
})
export class HighlightSearch implements PipeTransform {
    transform(value: any[], key:any, query: any): any {
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