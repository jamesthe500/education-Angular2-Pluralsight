import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
}) // this is the name of the pipe, used to ref the pipe in HtML

export class ConvertToSpacesPipe implements PipeTransform {
    transform(value: string, character: string): string{
        
        return value.replace(character, ' ');
    }
}