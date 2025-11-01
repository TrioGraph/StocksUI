import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { createAngelTokenForm } from '../../forms/angel-broking-forms';
import { AngelBrokingApiService } from '../../services/angel-broking-api.service';

@Component({
  selector: 'app-angel-token',
  templateUrl: './angel-token.component.html',
  styleUrls: ['./angel-token.component.css']
})
export class AngelTokenComponent {
  form = this.fb.group(createAngelTokenForm(this.fb).controls);
  json = new FormControl(JSON.stringify(this.form.value, null, 2));

  constructor(private fb: FormBuilder, private api: AngelBrokingApiService){
    this.form.valueChanges.subscribe(v => this.json.setValue(JSON.stringify(v, null, 2), {emitEvent:false}));
    this.json.valueChanges.subscribe(v => {
      try { this.form.patchValue(JSON.parse(v)); } catch {}
    });
  }

  submit(){
    this.api.postGeneric('angel-token', this.form.value).subscribe(r => console.log('submitted', r));
  }
}
