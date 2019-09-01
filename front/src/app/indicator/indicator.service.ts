import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class IndicatorService {

  constructor(private http: Http) { }

  baseurl: string = "http://localhost:8000/";

  // получаем необработанные данные с сервера
  getAllIndicators() {
    return this.http.get(this.baseurl + 'indicators');
  }

} 