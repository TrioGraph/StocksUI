import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { createGetLTPDataResponseForm } from '../../forms/angel-broking-forms';
import { AngelBrokingApiService } from '../../services/angel-broking-api.service';

@Component({selector:'app-get-ltp-data-response',templateUrl:'./get-ltp-data-response.component.html',styleUrls:['./get-ltp-data-response.component.css']})
export class GetLTPDataResponseComponent{
  form = this.fb.group(createGetLTPDataResponseForm(this.fb).controls);
  json = new FormControl(JSON.stringify(this.form.value, null,2));
  constructor(private fb: FormBuilder, private api: AngelBrokingApiService){
    this.form.valueChanges.subscribe(v=>this.json.setValue(JSON.stringify(v,null,2),{emitEvent:false}));
    this.json.valueChanges.subscribe(v=>{try{this.form.patchValue(JSON.parse(v));}catch{}})
  }
  submit(){this.api.postGeneric('get-ltp-data-response', this.form.value).subscribe(r=>console.log(r));}
}
