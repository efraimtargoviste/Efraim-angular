import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appDateFormat]'
})
export class DateFormatDirective {
    private formattedValue: string = '';
    initialValue: string = '';

    constructor(private el: ElementRef) { }

    @HostListener('input', ['$event'])
    onInputChange(event: any) {
        const input = event.target as HTMLInputElement;
        const value = input.value.replace(/\D/g, ''); // remove NAN
        const maxLength = 8; // max length in this format DD/MM/YYYY

        this.initialValue = input.value;
        this.formattedValue = '';
        if (value.length > maxLength) {
            this.formatValue(value);
            input.value = this.formattedValue.slice(0, maxLength + 2);
            return;
        }

        this.formatValue(value);
        input.value = this.formattedValue;
    }

    formatValue(value: string | any[]) {
        for (let i = 0; i < value.length; i++) {
            this.formattedValue += value[i];
            if (i === 1 || i === 3) {
                this.formattedValue += '/';
            }
          }
    }
}