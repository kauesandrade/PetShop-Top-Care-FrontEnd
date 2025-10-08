import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrandResponse } from '../../interfaces/product/brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BrandService {

  private apiUrl = "http://localhost:8088/topcare/brand";

  constructor(private httpClient: HttpClient) { }

  getAllBrands(): Observable<Array<BrandResponse>>{
    return this.httpClient.get<Array<BrandResponse>>(`${this.apiUrl}`);
  }
}
