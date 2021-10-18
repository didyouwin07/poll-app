import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggedinComponent implements OnInit {


  voteA:string = "50";
  voteB:string = "50";
  pollQuestion:string="";
  constructor() { }

  ngOnInit(): void {
  }
  voted:boolean=false;
  preFilled=[
    {
      'id':1,
      'stm':'Do you want Mondays off?',
      'op1':'30',
      'op2':'70'
    },
    {
      'id':2,
      'stm':'Do you want Saturdays off?',
      'op1':'80',
      'op2':'20'
    }
  ];

  livePolls=[
    {
      'id':1,
      'stm':'Do you want Saturdays off?',
      'op1':'80',
      'op2':'20',
      'voted':false
    }
  ];
len:number=0;
  post(){
    this.len=this.livePolls.length;
    this.livePolls.push({
      'id':this.len+1,
      'stm':this.pollQuestion,
      'op1':'50',
      'op2':'50',
      'voted':false,
    });
    this.pollQuestion="";
    //console.log(this.preFilled);
    //alert('hello');
  }

  change(value:number,idd:number){
    this.voted=true;
    if(value==1){
      this.livePolls[idd-1].op1='60';
      this.livePolls[idd-1].op2='40';
    }else{
      this.livePolls[idd-1].op1='40';
      this.livePolls[idd-1].op2='60';
    }
    // console.log(idd);
    // console.log(this.livePolls);
    this.livePolls[idd-1].voted=true;

  }

}
