import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { createOrderBookDataForm } from '../../forms/angel-broking-forms';
import { AngelBrokingApiService } from '../../services/angel-broking-api.service';

@Component({selector:'app-order-book-data',templateUrl:'./order-book-data.component.html',styleUrls:['./order-book-data.component.css']})
export class OrderBookDataComponent{
  form = this.fb.group(createOrderBookDataForm(this.fb).controls);
  json = new FormControl(JSON.stringify(this.form.value, null,2));
  constructor(private fb: FormBuilder, private api: AngelBrokingApiService){
    this.form.valueChanges.subscribe(v=>this.json.setValue(JSON.stringify(v,null,2),{emitEvent:false}));
    this.json.valueChanges.subscribe(v=>{try{this.form.patchValue(JSON.parse(v));}catch{}})
  }
  submit(){this.api.postGeneric('order-book-data', this.form.value).subscribe(r=>console.log(r));}
}
