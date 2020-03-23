import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-setup',
  templateUrl: './custom-setup.component.html',
  styleUrls: ['./custom-setup.component.scss']
})
export class CustomSetupComponent implements OnInit {
  @Input() setRuleCard: any;
  @Output() setRules: EventEmitter<any> = new EventEmitter();

  private showConfigDev = false;

  constructor() { 
    this.setRuleCard =[{name: 'rule1', icon: 'hashtag'}, {name: 'rule2', icon: 'th'}];
  }

  ngOnInit() {
  }

  setRuleEvent(event, card) {
    this.setRules.emit(card);
    console.log(card);
  }

  toggleShowConfig() {   

    this.showConfigDev =  !this.showConfigDev;
    //document.getElementById('menubar').style.width = '0';
  }

  closeConfigRuleBar() {
    this.showConfigDev =  !this.showConfigDev;
   // document.getElementById('menubar').style.width = '0';
    console.log('closeConfigRuleBar');
  }

}
