import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input} from '@angular/core';
import {Table} from 'primeng/table';
import {MessageService, ConfirmationService} from 'primeng/api';
import {Product, ProductService} from "../../services/product.service";
import {Customer, Device, Representative} from "../../../../interfaces/device.interface";
import {CustomerService} from "../../../../services/costumer.service";
import {DeviceService} from "../../services/device.service";
import {HttpClient} from "@angular/common/http";
import {map, Observable, Subscription} from "rxjs";

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  devices$: any[] = []
  devices: Device[] = [{}];

  value: any;
  customers1: Customer[] = [];

  customers2: Customer[] = [];

  customers3: Customer[] = [];

  selectedCustomers1: Customer[] = [];

  selectedCustomer: Customer = {};

  representatives: Representative[] = [];

  statuses: any[] = [];

  products: Product[] = [];

  rowGroupMetadata: any;

  expandedRows: expandedRows = {};

  activityValues: number[] = [0, 100];

  isExpanded: boolean = false;

  idFrozen: boolean = false;

  loading: boolean = true;
  vendors: any[] = [];
  @ViewChild('filter') filter!: ElementRef;

  constructor(private customerService: CustomerService, private productService: ProductService, private deviceService: DeviceService, private http: HttpClient) {
  }


  //   .toPromise()
  //   .then((res:any) => res.data as Device[])
  //   .then((data:any) => data);
  getDevices() {
    this.deviceService.getDevices().subscribe((res: any) => {
      this.devices = res.data
      console.log(this.devices)
      this.loading = false;
      //   let j = 0;
      //   let i = 0;
      //   let x = 0;
      //   // debugger
      //   this.vendors[0] = this.devices[0].vendor
      //   for (i = 1; i < this.devices.length; i++) {
      //     let temp = this.devices[i].vendor
      //     for (j = 0; j <= 10; j++) {
      //       if (this.vendors[j] == temp) {
      //         break;
      //       }
      //     }
      //     if (j == 11) {
      //       x++;
      //       this.vendors[x] = temp;
      //     }
      //     j = 0;
      //   }
      //   console.log(this.vendors);
      //   return this.devices
      //
      // }
    })
  }

  getVendors() {
    this.deviceService.getVendors();
    console.log("i here")
    console.log(this.deviceService.getVendors())
this.vendors=this.deviceService.vendors;
    console.log("i here2");
    console.log(this.vendors)

    // let j = 0;
    // let i = 0
    // console.log('vendors');
    // console.log(this.devices);
    // for (i = 0; i < this.devices.length; i++) {
    //   let temp = this.devices[i].vendor
    //   for (j = 0; j < this.vendors.length; j++) {
    //     if (this.vendors[j] == temp) {
    //       break;
    //     }
    //   }
    //   if (j == this.vendors.length) {
    //     this.vendors[j - 1] = temp;
    //   }
    // }
    // console.log(this.vendors[1]);
  }

  ngOnInit() {
    this.getDevices();
    this.getVendors();
    console.log(this.deviceService.getVendors())
    console.log("sssssssa")
console.log(this.deviceService.vendors);

    // this.deviceService.getDevices()
    //   .then((devices:any) => {
    //   this.devices = devices;
    //   this.loading = false;
    //
    //   // @ts-ignore
    //   this.devices.forEach(device => device.date = new Date(device.date));
    // });
    this.customerService.getCustomersMedium().then(customers => this.customers2 = customers);
    this.customerService.getCustomersLarge().then(customers => this.customers3 = customers);
    this.productService.getProductsWithOrdersSmall().then(data => this.products = data);

    this.representatives = [
      {name: 'Amy Elsner', image: 'amyelsner.png'},
      {name: 'Anna Fali', image: 'annafali.png'},
      {name: 'Asiya Javayant', image: 'asiyajavayant.png'},
      {name: 'Bernardo Dominic', image: 'bernardodominic.png'},
      {name: 'Elwin Sharvill', image: 'elwinsharvill.png'},
      {name: 'Ioni Bowcher', image: 'ionibowcher.png'},
      {name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png'},
      {name: 'Onyama Limba', image: 'onyamalimba.png'},
      {name: 'Stephen Shaw', image: 'stephenshaw.png'},
      {name: 'XuXue Feng', image: 'xuxuefeng.png'}
    ];

    this.statuses = [
      {label: 'Unqualified', value: 'unqualified'},
      {label: 'Qualified', value: 'qualified'},
      {label: 'New', value: 'new'},
      {label: 'Negotiation', value: 'negotiation'},
      {label: 'Renewal', value: 'renewal'},
      {label: 'Proposal', value: 'proposal'}
    ];
  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.customers3) {
      for (let i = 0; i < this.customers3.length; i++) {
        const rowData = this.customers3[i];
        const representativeName = rowData?.representative?.name || '';

        if (i === 0) {
          this.rowGroupMetadata[representativeName] = {index: 0, size: 1};
        } else {
          const previousRowData = this.customers3[i - 1];
          const previousRowGroup = previousRowData?.representative?.name;
          if (representativeName === previousRowGroup) {
            this.rowGroupMetadata[representativeName].size++;
          } else {
            this.rowGroupMetadata[representativeName] = {index: i, size: 1};
          }
        }
      }
    }
  }

  expandAll() {
    if (!this.isExpanded) {
      this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');

    } else {
      this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
  }

  formatCurrency(value: number) {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }


  @Input() data: string[] = [];
  @Output() dataOutput = new EventEmitter<string[]>();

  sendDataToParent() {
    this.dataOutput.emit(this.data);
  }

}
