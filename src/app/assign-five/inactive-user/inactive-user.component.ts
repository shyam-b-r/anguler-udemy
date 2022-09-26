import { Component, OnInit , Input} from '@angular/core';
import { UserStatusService } from 'src/app/services/userstatus.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.scss']
})
export class InactiveUserComponent implements OnInit {
  @Input() user: {name: string, status: string};
  @Input() id: number;
  constructor(private userService: UserStatusService) { }

  ngOnInit(): void {
  }

  onToggleState() {
    this.userService.onChangeStatus(this.id, this.user);
  }
}
