import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-mas-menos',
  templateUrl: './input-mas-menos.component.html',
  styleUrls: ['./input-mas-menos.component.scss']
})
export class InputMasMenosComponent implements OnInit {

  constructor() { }

  @Input()
  c: number;

  @Input()
  max: number;

  @Output()
  cChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  limite: EventEmitter<number> = new EventEmitter<number>();

  restar(): void {
    if (this.c > 0) {
      this.c--;
      this.cChange.emit(this.c);
    }
  }
  sumar(): void {
    if (this.c < this.max) {
      this.c++;
      this.cChange.emit(this.c);
    }
    else {
      this.limite.emit(this.max);
    }
  }

  ngOnInit(): void {
  }

}



