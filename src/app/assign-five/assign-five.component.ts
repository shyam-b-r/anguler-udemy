import { Component, OnInit } from '@angular/core';
import { UserStatusService } from 'src/app/services/userstatus.service';

@Component({
  selector: 'app-assign-five',
  templateUrl: './assign-five.component.html',
  styleUrls: ['./assign-five.component.scss']
})
export class AssignFiveComponent implements OnInit {
  aUsers: {name: string, status: string}[];
  iUsers: {name: string, status: string}[];
  constructor(private userService : UserStatusService) { }

  ngOnInit(): void {
    this.aUsers = this.userService.activeUsers;
    this.iUsers = this.userService.inactiveUsers;
  }

}
