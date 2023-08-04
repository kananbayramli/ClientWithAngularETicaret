import { Component , OnInit} from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit{  

  constructor(private alertify: AlertifyService) {}

ngOnInit(): void {}

m(){
  this.alertify.message("Wellcome to admin dashboard  ;)", {
    messageType: MessageType.Success,
    delay: 3,
    position: Position.TopCenter

  });
}


d(){
  this.alertify.dismiss();
}


}
