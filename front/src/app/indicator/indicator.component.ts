import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {
  // подготавливаем данные для последующего их использования в разметке
  @Input('data') data;
  
  ngOnInit() {

  }
}
