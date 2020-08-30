import { Component, OnInit, ViewChild } from '@angular/core';
import { DataCode, EnquiryService } from './enquiry.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material'; 
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  @ViewChild(MatSort, {  }) sort: MatSort;
  @ViewChild(MatPaginator, { }) paginator: MatPaginator;
  currencyCodes: DataCode[] = [{code: 'AED' , name: 'UAE Diram' }, {code: 'AFN' , name: 'Afghani' }, {code: 'ALL' , name: 'Albanian lek' }];
  assetCode: DataCode[] = [{code: 'none' , name: 'None' }, {code: 'true' , name: 'Yes' }, {code: 'false' , name: 'No' }];
  fdistypeCode: DataCode[] = [{code: 'A' , name: 'Accumlate' }, {code: 'C' , name: 'Cash' }, {code: 'U' , name: 'Unit' }];
  enquiryForm: FormGroup;

  dataSource = new MatTableDataSource();
  displayedColumns = ['isno', 'commonName', 'denominationCurrency', 'disributionType', 'subAsset'];

  searchNotFound: boolean = false;
  resultsLength: number = 0;
  requestBody: RequestBody;

  constructor(private fb: FormBuilder, private enquiryService:  EnquiryService) {
    this.enquiryForm = this.fb.group ({
      isino: '',
      commonName: '',
      currency: '',
      subscripAssets: '',
      disributionType: ''

    });
    
    this.enquiryService.getEnquiryData({}).subscribe(data => {
      this.resultsLength = data.total;
      console.log(this.resultsLength)
      if(data.result.length > 0) {
        this.dataSource.data = data.result;
      } else {
        this.searchNotFound = true;
      }
    })
    
   }


  ngOnInit() {
  }
/*
  exportFile(): void {
    const header: Map<string, string> = new Map([
     ['isno', 'ISNO'],
     ['commonName', 'Common Name'],
     ['disributionType', 'Disribution Type'],
     ['referenceNumber', 'Reference Number'],
    ]);
    this.enquiryService.getEnquiryData({
      filterCriteria: this.formRequest(this.enquiryForm.value),
      page: {
        index:0,
        size: this.resultsLength
      }
    }).subscribe(data => {
     // const replacer = (, value) => value === null ? '': value;
      let csv = data.result.map(row => Array.from(header.keys()).map(fieldName => JSON.stringify(row[fieldName])).join(','));
      csv.unshift(Array.from(header.values()).join(','));
      csv = csv.join('\r\r');
      var blobElement = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
      let link = document.createElement('a');
      link.href = URL.createObjectURL(blobElement);
      link.download = 'data.csv';
      link.click();
    })
  }
*/
  search() {
    if(!this.enquiryForm.value.isino.trim() && !this.enquiryForm.value.commonName.trim()) {
      alert('OOPS Mandatory field is not filled out.');
    } else {
      this.clearData();
      this.requestBody = {
        filterCriteria:  this.enquiryForm.value,
        page: {
          index: 1,
          size: 10
          //size: this.paginator.pageSize
        }
      }

      this.enquiryService.getEnquiryData(this.requestBody).subscribe(data => {
        
        this.resultsLength = data.total;
        console.log(this.resultsLength);
        if(data.result.length > 0) {
          
          this.dataSource.data = data.result;
        } else {
          this.searchNotFound = true;
        }
      })
      console.log(this.requestBody);

    }
  }

  formRequest(formValues) {
    const formatObject = formValues;
    if (!formatObject.commonName) {
      delete (formatObject.commonName)
    }
    if (!formatObject.isino) {
      delete (formatObject.isino)
    }
    if (!formatObject.currency) {
      delete (formatObject.currency)
    }
    if (!formatObject.subscripAssets) {
      delete (formatObject.subscripAssets)
    }
    if (!formatObject.disributionType) {
      delete (formatObject.disributionType)
    }

    Object.keys(formatObject).map(k => formatObject[k] = typeof formatObject[k] === 'string' ? formatObject[k].trim(): formatObject[k])
    return formatObject;

  }
  clearData() {
    this.dataSource.data = [];
   // this.paginator.pageIndex =  0;
    this.searchNotFound = false;
  }

}

export interface RequestBody {
  filterCriteria: any;
  page?: {
    index: number,
    size: number
  }
}

 
