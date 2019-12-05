import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }
  GetAddressList(): Observable<any> {
    return this.http.get(environment.baseUrl + '/tblAddresses');
  }
  AddAddress(address:Address) {
    return this.http.post(environment.baseUrl + '/tblAddresses', address);
  }
  SearchAddress(name:string):Observable<any>{
    return this.http.get(environment.baseUrl+'/tblAddresses?name='+ name);
  }
  DeleteAddress(id:number)
  {
    return this.http.delete(environment.baseUrl+'/tblAddresses/'+id);
  }
  GetAddress(id: number):Observable<any>
  {
    return this.http.get(environment.baseUrl+'/tblAddresses/'+id);
  }
  UpdateAddress(id: number, address:Address)
  {
    return this.http.put(environment.baseUrl + '/tblAddresses/' + id, address);
  }
}
