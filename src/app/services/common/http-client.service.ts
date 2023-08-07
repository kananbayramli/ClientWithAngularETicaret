import { Injectable , Inject} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  private url(requestParametr: Partial<RequestParametres>): string{
    return `${requestParametr.baseUrl ? requestParametr.baseUrl : this.baseUrl}/${requestParametr.controller}${requestParametr.
      action ? `/${requestParametr.action}`: ""}`;
  }


  get<T>(requestParametr: Partial<RequestParametres>, id?: string): Observable<T>{
    let url: string = "";
    if(requestParametr.fullEndPoint)
    url = requestParametr.fullEndPoint;
    else
    url = `${this.url(requestParametr)}${id ? `/${id}` : ""}`;

    return this.httpClient.get<T>(url, {headers: requestParametr.headers});
  }




  post<T>(requestParametr: Partial<RequestParametres>, body: Partial<T>): Observable<T>{
    let url: string = "";
    if(requestParametr.fullEndPoint)
      url = requestParametr.fullEndPoint;
    else
      url = `${this.url(requestParametr)}`;

      return this.httpClient.post<T>(url, body, {headers: requestParametr.headers});

  }



  put<T>(requestParametr: Partial<RequestParametres>, body: Partial<T>): Observable<T>{
    let url: string = "";
    if(requestParametr.fullEndPoint)
      url = requestParametr.fullEndPoint;
    else
      url = `${this.url(requestParametr)}`;

      return this.httpClient.put<T>(url, body, {headers: requestParametr.headers});

  }

  delete<T>(requestParametr: Partial<RequestParametres>, id: string): Observable<T>{
    let url: string = "";
    if(requestParametr.fullEndPoint)
      url = requestParametr.fullEndPoint;
    else
      url = `${this.url(requestParametr)}/${id}`;

    return this.httpClient.delete<T>(url, {headers: requestParametr.headers});
  }

}



  export class RequestParametres {
    controller?: string;
    action?: string;
    headers?: HttpHeaders;
    baseUrl?: string;
    fullEndPoint?: string;

  }
