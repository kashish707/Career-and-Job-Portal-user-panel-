import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
  
export class AuthService {
  private _applyUrl = " https://jobsearchportal.azurewebsites.net/vacancy/ApplyAPI/";
  private _getOneUrl = "https://jobsearchportal.azurewebsites.net/vacancy/VacancyDisplay/";
  constructor(private http: HttpClient) { }
  
  getOne(id) {
     return this.http.get<any>(this._getOneUrl+id) 
}

  apply(user) {
    return this.http.post<any>(this._applyUrl, user)
  }
}
