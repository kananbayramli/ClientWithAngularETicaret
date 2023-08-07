import { Component, OnInit } from '@angular/core';
import { BaseComponent , SpinnerType} from 'src/app/base/base.component';
import{NgxSpinnerService} from 'ngx-spinner'
import { HttpClientService } from 'src/app/services/common/http-client.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService : HttpClientService){
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMultiple);

    // this.httpClientService.get({
    //   controller: "products"
    // }).subscribe(data => console.log(data, "kkk"));

    // console.log("kkkkkkkkkkkkk");

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "Qelem",
    //   stock: 100,
    //   price: 50
    // }).subscribe(data => console.log(data+'kkkk'));


    // this.httpClientService.put({
    //   controller: "products",
    // },{
    //   id: "",
    //   name: "rengli qelem",
    //   stock: 20,
    //   price: 30
    // }).subscribe();

  }
}
