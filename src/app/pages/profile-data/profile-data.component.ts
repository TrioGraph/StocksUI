import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { createProfileDataForm } from '../../forms/angel-broking-forms';
import { AngelBrokingApiService } from '../../services/angel-broking-api.service';

@Component({selector:'app-profile-data',templateUrl:'./profile-data.component.html',styleUrls:['./profile-data.component.css']})
export class ProfileDataComponent{
  form = this.fb.group(createProfileDataForm(this.fb).controls);
  json = new FormControl(JSON.stringify(this.form.value, null,2));
  constructor(private fb: FormBuilder, private api: AngelBrokingApiService){
    this.form.valueChanges.subscribe(v=>this.json.setValue(JSON.stringify(v,null,2),{emitEvent:false}));
    this.json.valueChanges.subscribe(v=>{try{this.form.patchValue(JSON.parse(v));}catch{}})
  }
  submit(){this.api.postGeneric('profile-data', this.form.value).subscribe(r=>console.log(r));}
}
