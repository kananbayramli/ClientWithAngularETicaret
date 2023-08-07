import { Component , OnInit} from '@angular/core';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import{NgxSpinnerService} from 'ngx-spinner';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { Product } from 'src/app/contracts/product';


@Component({
  selector: 'app-products-admin',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService : HttpClientService){
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);

    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => {
      data[0].name    //contract logic
    });


    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "Qelem",
    //   stock: 100,
    //   price: 50
    // }).subscribe(data => console.log(data));


    // this.httpClientService.put({
    //   controller: "products",
    // },{
    //   id: "4c12719e-f738-4e5c-863f-498faacf8679",
    //   name: "Rengli Qelem",
    //   stock: "111",
    //   price: 5.55
    // }).subscribe();


    // this.httpClientService.delete({
    //   controller: "products"
    // }, "4c12719e-f738-4e5c-863f-498faacf8679").subscribe();


  }
}
