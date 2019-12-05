import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddressService } from '../address.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {
  addresses: Address = new Address();
  addressform: FormGroup;
  constructor(private formbuilder: FormBuilder, private addressservice: AddressService, private toastr: ToastrService, private router: ActivatedRoute, private route: Router) { }
  id: number;
  ngOnInit() {

    this.addressform = this.formbuilder.group({
      //AddressId:['',[Validators.required]],
      Name: ['', [Validators.required]],
      Familyname: ['', [Validators.required]],
      DOBStr: ['', [Validators.required]],
      Street: ['', [Validators.required]],
      Pincode: ['', [Validators.required]],
      City: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      Email: ['', Validators.compose([Validators.required, Validators.email])],
      Occupation: ['', [Validators.required]]
    });

    this.id = this.router.snapshot.params["id"];

    this.addressservice.GetAddress(this.id).subscribe(x => {
      this.addresses = x;

    });
  }

  get formControls() {
    return this.addressform.controls;
  }

  updateaddress() {
    this.addresses.AddressId = this.id;
    this.addresses.Name = this.addressform.controls.Name.value;
    this.addresses.Familyname = this.addressform.controls.Familyname.value;
    this.addresses.DOB = this.addressform.controls.DOBStr.value;
    this.addresses.Street = this.addressform.controls.Street.value;
    this.addresses.Pincode = this.addressform.controls.Pincode.value;
    this.addresses.City = this.addressform.controls.City.value;
    this.addresses.Country = this.addressform.controls.Country.value;
    this.addresses.phone = this.addressform.controls.phone.value;
    this.addresses.Email = this.addressform.controls.Email.value;
    this.addresses.Occupation = this.addressform.controls.Occupation.value;
    this.addressservice.UpdateAddress(this.id,this.addresses).subscribe(x => {
      this.toastr.success('address updated')
      this.route.navigate(['list-address'])
    });
  }
}

