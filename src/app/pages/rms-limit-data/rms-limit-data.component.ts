import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { createRMSLimitDataForm } from '../../forms/angel-broking-forms';
import { AngelBrokingApiService } from '../../services/angel-broking-api.service';

@Component({selector:'app-rms-limit-data',templateUrl:'./rms-limit-data.component.html',styleUrls:['./rms-limit-data.component.css']})
export class RMSLimitDataComponent{
  form = this.fb.group(createRMSLimitDataForm(this.fb).controls);
  json = new FormControl(JSON.stringify(this.form.value, null,2));
  constructor(private fb: FormBuilder, private api: AngelBrokingApiService){
    this.form.valueChanges.subscribe(v=>this.json.setValue(JSON.stringify(v,null,2),{emitEvent:false}));
    this.json.valueChanges.subscribe(v=>{try{this.form.patchValue(JSON.parse(v));}catch{}})
  }
  submit(){this.api.postGeneric('rms-limit-data', this.form.value).subscribe(r=>console.log(r));}
}
