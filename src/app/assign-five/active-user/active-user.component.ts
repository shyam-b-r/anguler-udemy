import { Component, Input, OnInit } from '@angular/core';
import { UserStatusService } from 'src/app/services/userstatus.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.scss']
})
export class ActiveUserComponent implements OnInit {
  @Input() user: {name: string, status: string};
  @Input() id: number;
  constructor(private userService: UserStatusService) { }

  ngOnInit(): void {
    
  }
  onToggleState() {
    this.userService.onChangeStatus(this.id, this.user);
  }
}
