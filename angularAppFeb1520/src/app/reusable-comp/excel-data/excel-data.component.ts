import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-excel-data',
  templateUrl: './excel-data.component.html',
  styleUrls: ['./excel-data.component.scss']
})
export class ExcelDataComponent implements OnInit {
  @Input() fileName: string ;
  @Input() filePath: any ;
  @Output() readSelection: EventEmitter<any> = new EventEmitter();
  @Input() pdfFile: File;
  file: File;
  excelForm: FormGroup;
  sheetRule = false;
  ruleObj = false;
  formObject: any;
  readExcelData: any;
  resData: any; 
   dataOfRuleList = [];
  configCards: any;

  constructor(private fb: FormBuilder) { 
    this.configCards = [{name: 'Sheet', icon: 'hashtag'}, {name: 'Row', icon: 'th'}, {name: 'Columns', icon: 'th'}, {name: 'Cells', icon: 'th'}];
  }

  ngOnInit() {

    this.excelForm = this.fb.group({
      sheets: this.fb.array([])
    });
    this.file = this.pdfFile;

  }

  
  setExcelRule(card) {
    this.ruleObj = true;
    if(card !== undefined && card === 'Sheet') {
      this. sheetRule =true;
    } else {
      this.sheetRule = false;
    }
   
  }

  onSubmit() {
    this.formObject = this.excelForm.value;
    console.log("submit excel-data"+ this.formObject);
  }

  addSheetrule() {
     
    let control = this.excelForm.controls.sheets as FormArray;
    control.push(
      this.fb.group({
        sheet: ['', Validators.required],
        range: this.fb.array([])
      })

    )
     
  }

  deleteSheet(index) {
    let control = this.excelForm.controls.sheets as FormArray;
    control.removeAt(index);

  }

  addNewRange(control) {
    control.push(
      this.fb.group({
        start: ['', Validators.required],
        end: ['']
      }));
  }

  deleteRange(control, index) {
    control.removeAt(index);
  }
  closeMatFileEvent(event) {
    console.log("close excel-data" + event);
  }

 

}
