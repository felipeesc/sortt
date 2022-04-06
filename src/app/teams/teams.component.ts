import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  public pesso = "";
  @Input() times: string[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }


}
