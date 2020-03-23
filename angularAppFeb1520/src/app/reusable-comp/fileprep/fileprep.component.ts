import { Component, OnInit, HostListener } from '@angular/core';
import { renderComponent } from '@angular/core/src/render3';

@Component({
  selector: 'app-fileprep',
  templateUrl: './fileprep.component.html',
  styleUrls: ['./fileprep.component.scss']
})
export class FileprepComponent implements OnInit {
  private filePath: string = '';
  private fileName: string = '';
   fileExtemsion: string ;
   pdfFile: File;
  constructor() { }
  dragAreaClass: string = 'dragarea';
  ngOnInit() {
  }
 

  onFileSelected(event: any) {
    var $img: any = (<HTMLInputElement>event.target);
    if(typeof (FileReader) !== 'undefined') {
      var reader = new FileReader();
      reader.onload =(e: any) => {
        this.filePath = e.target.result;
      };
      reader.readAsArrayBuffer($img.files[0]);
      this.filePath = $img.files[0];
      this.fileName = $img.files[0].name;
      let k = this.fileName;
      this.fileExtemsion = k.split('.').pop().toLowerCase();

      this.pdfFile = new File([$img.files[0]], $img.files[0].name);
      
    }
    console.log(event);
  }

  closePdf() {
    this.filePath = '';
    console.log( 'closepdf');
  }

}
