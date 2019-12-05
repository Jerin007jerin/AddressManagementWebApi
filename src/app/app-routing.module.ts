import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAddressComponent } from './list-address/list-address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'list-address'},
  {path:'list-address',component:ListAddressComponent},
  {path:'add-address',component:AddAddressComponent},
  {path:'edit-address/:id',component:EditAddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
