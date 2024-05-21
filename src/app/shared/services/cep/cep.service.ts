import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  url = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) {}

  searchCep(cep: string) {
    return this.http.get(`${this.url}${cep}/json/`);
  }
}
