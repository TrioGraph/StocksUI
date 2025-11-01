import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { createGetProfileResponseForm } from '../../forms/angel-broking-forms';
import { AngelBrokingApiService } from '../../services/angel-broking-api.service';

@Component({selector:'app-get-profile-response',templateUrl:'./get-profile-response.component.html',styleUrls:['./get-profile-response.component.css']})
export class GetProfileResponseComponent{
  form = this.fb.group(createGetProfileResponseForm(this.fb).controls);
  json = new FormControl(JSON.stringify(this.form.value, null,2));
  constructor(private fb: FormBuilder, private api: AngelBrokingApiService){
    this.form.valueChanges.subscribe(v=>this.json.setValue(JSON.stringify(v,null,2),{emitEvent:false}));
    this.json.valueChanges.subscribe(v=>{try{this.form.patchValue(JSON.parse(v));}catch{}})
  }
  submit(){this.api.postGeneric('get-profile-response', this.form.value).subscribe(r=>console.log(r));}
}
