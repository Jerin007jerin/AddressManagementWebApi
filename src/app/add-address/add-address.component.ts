import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address } from '../address';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {
  addressform:FormGroup;
  addresses:Address=new Address();
  constructor(private addressservice:AddressService,private toastr:ToastrService,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.addressform=this.formbuilder.group({
      //AddressId:['',[Validators.required]],
      Name:['',[Validators.required]],
      Familyname:['',[Validators.required]],
      DOB:['',[Validators.required]],
      Street:['',[Validators.required]],
      Pincode:['',[Validators.required]],
      City:['',[Validators.required]],
      Country:['',[Validators.required]],
      phone:['',[Validators.required]],
      Email:['', Validators.compose([Validators.required, Validators.email])],
      Occupation:['',[Validators.required]]
    });

  }
  get formControls()
  {
    return this.addressform.controls;
  }
  addaddress()
  {
  //this.addresses.AddressId=this.addressform.controls.AddressId.value;
  this.addresses.Name=this.addressform.controls.Name.value;
  this.addresses.Familyname=this.addressform.controls.Familyname.value;
  this.addresses.DOB=this.addressform.controls.DOB.value;
  this.addresses.Street=this.addressform.controls.Street.value;
  this.addresses.Pincode=this.addressform.controls.Pincode.value;
  this.addresses.City=this.addressform.controls.City.value;
  this.addresses.Country=this.addressform.controls.Country.value;
  this.addresses.phone=this.addressform.controls.phone.value;
  this.addresses.Email=this.addressform.controls.Email.value;
  this.addresses.Occupation=this.addressform.controls.Occupation.value;
  this.addressservice.AddAddress(this.addresses).subscribe(x=>{
    this.toastr.success('address added')
    this.router.navigate(['list-address'])
    });
}
}
