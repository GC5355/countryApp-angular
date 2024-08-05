import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
})

export class SearchboxComponent {

  @Input()
  public placeholder: string =''

  @Output()
  onValue = new EventEmitter<string>();

  @Output()
  prueba = new EventEmitter<string>();

  emitValue(value: string) {
    this.onValue.emit( value );
    }
}
