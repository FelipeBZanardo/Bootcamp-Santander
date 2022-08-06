import { NONE_TYPE } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printList',
  pure: false
})
export class PrintListPipe implements PipeTransform {

  transform(value: string[], separador: string = ' '): string {
    
    let returnStr = '';
    if(value.length){
      value.forEach(val => {returnStr = returnStr + separador + val});
    }
    return returnStr;


  }

}
