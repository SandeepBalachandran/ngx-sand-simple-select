import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'selectFilter'
})
export class SelectFilterPipe implements PipeTransform {
    transform(array: any[], column: string, query: string): any {
        if (array.length !== 0 && query) {
            return array.filter(s => s[column].toLowerCase().includes(query.toLowerCase()));
        }
        return array;
    }
}
