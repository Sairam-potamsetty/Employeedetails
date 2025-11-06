import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
name:"ntc",
standalone: true  // 👈 this is important for standalone components

})
export class ntcPipe  implements PipeTransform{
      finalword:string='';

transform(value: string): string {
    if(!value) return '';
    if(value.replace(/\b\w/g, (char) => char)==value.replace(/\b\w/g, (char) => char.toUpperCase())){
          this.finalword=value.replace(/\b\w/g, (char) => char.toLowerCase());
    }
    else{
       this.finalword=value.replace(/\b\w/g, (char) => char.toUpperCase());
    }
   return this.finalword;
    
  }
}