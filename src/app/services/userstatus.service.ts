export class UserStatusService {
    activeUsers = [{ 
        name: 'Max',
        status: 'Active'
     } , { 
        name: 'Leone',
        status: 'Active'
     }];
    inactiveUsers = [{ 
        name: 'Guru',
        status: 'Inactive'
     } , { 
        name: 'Suresh',
        status: 'Inactive'
     }];

     onChangeStatus(id: number, usr: {name: string, status: string}) {
         if(usr.status == 'Inactive') {
             this.inactiveUsers.splice(id, 1);
             usr.status = 'Active';
             this.activeUsers.push(usr);
         } else {
            this.activeUsers.splice(id, 1);
            usr.status = 'Inactive';
            this.inactiveUsers.push(usr);
        }
     }
}