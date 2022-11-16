import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ModelData } from '../interfaces/model-data';
import { Observable } from 'rxjs';

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getData(): Observable<ModelData> {
    return this.http.get<ModelData>(API_URL + 'assets/dataSources.json')
  }
}
