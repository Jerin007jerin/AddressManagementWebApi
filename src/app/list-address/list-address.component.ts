import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../address';
import { AddressService } from '../address.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.scss']
})
export class ListAddressComponent implements OnInit {
addresses:Observable<Address[]>
  constructor(private addressservice:AddressService,private toastr:ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.addresses = this.addressservice.GetAddressList();
    this.addressservice.GetAddressList().subscribe(data => console.log(data));
  }
  searchaddress(address:string)
  {
    this.addresses=this.addressservice.SearchAddress(address);
    if(address=="")
    {
      this.addresses=this.addressservice.GetAddressList();
    }
  }
  deleteaddress(id: number)
  {
    if(confirm('do you want to delete this record?'))
    {
    this.addressservice.DeleteAddress(id).subscribe(x => {
      this.toastr.error('Address Deleted');
    });

    this.reloadData();
  }
}
}
