import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnClass! : string;
  @Input() btnText! : string;
  @Output() btnClick =new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    
  }
  
  clickHandler(){
    this.btnClick.emit();
  }

}
