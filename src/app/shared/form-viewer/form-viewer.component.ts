import { Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.css'],
  standalone: false
})
export class FormViewerComponent {
  @Input() form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  keys(): string[] {
    return this.form ? Object.keys(this.form.controls) : [];
  }

  getControl(key: string): any {
    return this.form.get(key) as any;
  }

  controlType(c: any): 'group' | 'array' | 'control' {
    if (!c) return 'control';
    if (c instanceof FormGroup) return 'group';
    if (c instanceof FormArray) return 'array';
    return 'control';
  }

  isGroup(c: any) {
    return c instanceof FormGroup;
  }

  removeArrayItem(key: string, idx: number) {
    const arr = this.getControl(key) as FormArray;
    arr.removeAt(idx);
  }

  addArrayItem(key: string) {
    const arr = this.getControl(key) as FormArray;
    // add a simple blank control or group depending on first item
    if (arr.length && this.isGroup(arr.at(0))) {
      arr.push(this.fb.group({}));
    } else {
      arr.push(this.fb.control(''));
    }
  }
}
