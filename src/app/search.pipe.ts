import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value, keys: string[], term: string): any {
    let targetString: string = "";
    return value.filter((item) => {
      targetString = "";
      for (let key in keys) {
        if (item.hasOwnProperty(keys[key])) {
          targetString += item[keys[key]];
        }
      }

      if ((targetString.toLocaleLowerCase()).indexOf(term.toLocaleLowerCase()) >= 0) {
        return true;
      } else {
        return false;
      }
    });
  }
}
