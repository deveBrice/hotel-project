import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IRegiter } from '../../app/shared/interface/iRegister.interface';

@Injectable({
    providedIn: 'root'
})

export class RequestManagerService {
    private readonly API_URL_SERVER = 'http://localhost:8080';
    constructor(private httpClient: HttpClient) {}

    registerUser = (data: any) => {
        return this.httpClient.post<IRegiter>(`${this.API_URL_SERVER}/api/users/register`, data);
    }
}