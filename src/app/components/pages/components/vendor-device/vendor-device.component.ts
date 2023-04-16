import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Customer, Device, Representative} from "../../../../interfaces/device.interface";
import {Product, ProductService} from "../../services/product.service";
import {CustomerService} from "../../../../services/costumer.service";
import {DeviceService} from "../../services/device.service";
import {HttpClient} from "@angular/common/http";
import {Table} from "primeng/table";
import {ActivatedRoute} from "@angular/router";
interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-vendor-device',
  templateUrl: './vendor-device.component.html',
  styleUrls: ['./vendor-device.component.scss']
})
export class VendorDeviceComponent {
  devices$: any[] = []
  devices: Device[] = [{}];
  metrics: any[] = [];
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
  vendor!: string;
  basicData: any;

  basicOptions: any;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private customerService: CustomerService, private productService: ProductService, private deviceService: DeviceService, private http: HttpClient,
              private route: ActivatedRoute) {
  }


  //   .toPromise()
  //   .then((res:any) => res.data as Device[])
  //   .then((data:any) => data);
  // getDevices() {
  //   this.deviceService.getDevices().subscribe((res: any) => {
  //     this.devices = res.data
  //     console.log(this.devices)
  //     this.loading = false;
  //     //   let j = 0;
  //     //   let i = 0;
  //     //   let x = 0;
  //     //   // debugger
  //     //   this.vendors[0] = this.devices[0].vendor
  //     //   for (i = 1; i < this.devices.length; i++) {
  //     //     let temp = this.devices[i].vendor
  //     //     for (j = 0; j <= 10; j++) {
  //     //       if (this.vendors[j] == temp) {
  //     //         break;
  //     //       }
  //     //     }
  //     //     if (j == 11) {
  //     //       x++;
  //     //       this.vendors[x] = temp;
  //     //     }
  //     //     j = 0;
  //     //   }
  //     //   console.log(this.vendors);
  //     //   return this.devices
  //     //
  //     // }
  //   })
  // }
  getDevices(vendor?: string) {
    console.log(vendor)
    this.deviceService.getDevices().subscribe((res: any) => {
      this.devices = res.data
      if (vendor != undefined) {
        this.devices = this.devices.filter((d: any) => d.vendor === vendor)
      }

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
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#FFA726',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
    this.route.params.subscribe((params: any) => {
      this.vendor = params['vendor'];
      this.getDevices(this.vendor);
    })
    // this.getDevices();
    // this.getVendors();
    // console.log(this.deviceService.getVendors())
    // console.log("sssssssa")
    // console.log(this.deviceService.vendors);

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

    this.metrics = [
      {
        title: 'Total CVE’s for vendor',
        // icon: 'pi pi-shopping-cart',
        color_light: '#64B5F6',
        color_dark: '#1976D2',
        textContent: [
          {amount: '90', text: 'Detected'},
          {amount: '15', text: 'At Risk'}
        ]
      },
      {
        title: 'Involved in PAS',
        // icon: 'pi pi-dollar',
        color_light: '#7986CB',
        color_dark: '#303F9F',
        textContent: [
          {amount: '9', text: 'Detected'},
          {amount: '84%', text: 'Avg.Probability'}
        ]
      },
      {
        title: 'Overall Risk level',
        // icon: 'pi pi-users',
        color_light: '#4DB6AC',
        color_dark: '#00796B',
        textContent: [
          {amount: 18, text: 'Detected'},
          {amount: 'HIGH', text: 'AVG. Criticality'}
        ]
      },
    ];

  }
  applyLightTheme() {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
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
