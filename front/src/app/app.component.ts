import { Component } from '@angular/core';
import { IndicatorService } from './indicator/indicator.service';
import { IndicatorModel } from './indicator/indicator.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  indicators: IndicatorModel[];
  constructor(private indicatorService: IndicatorService) {

  }

  ngOnInit() {
    this.loopIndicators();
  }

  // определяем процент карналита в башнях
  calculatePercents(indicators): IndicatorModel[] {
    return indicators.map((item) => {
      item.percents = (item.value / item.maxValue * 100).toFixed(0);
      return item;
    });
  }

  // обрабатываем полученные данные с сервера
  getAllIndicators(): void {
    this.indicatorService.getAllIndicators().subscribe(data => this.indicators = this.calculatePercents(data.json()));
  }

  // изменяем массу карналита в башнях каждые 3 секунды
  loopIndicators(): void {
    this.getAllIndicators();
    setInterval(() => this.getAllIndicators(), 3000);
  }

}