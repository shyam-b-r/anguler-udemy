import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {
    constructor(private logger: LoggingService) {}

    accounts = [{
        name: 'Sam',
        status: 'Active'
    },{
        name: 'Vidya',
        status: 'Inactive'
    },{
        name: 'Guru',
        status: 'Hidden'
    }];

    onCreateAccount(accountName: string, accountStatus: string) {
        this.accounts.push({
          name: accountName,
          status: accountStatus
        });

        this.logger.onSuccess('A server status changed, new status: ' + accountStatus);
    }

    onUpdateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
    }
}