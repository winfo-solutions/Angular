import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AppService {
    constructor (private httpClient: HttpClient) {}

    submitData(body) : Observable<any>{

        return this.httpClient.post("http://localhost:3000/posts", body);
        
    }

    deleteData(id) : Observable<any>{
        return this.httpClient.delete("http://localhost:3000/posts"+"/"+id);
    }
    getData() {
        return this.httpClient.get("http://localhost:3000/posts/");
    }
}
