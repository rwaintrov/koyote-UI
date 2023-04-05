export interface Device {
  id?: string;
  category?: string;
  vendor?:string;
  IP_address?:string;
  MAC_address?:string;
  series?:string;
  model?:string;
  firmware?:string;
  lastUpdate?:Date;
  lastSeen?:Date;


}
export enum Vendor {
  Cisco='Cisco',
  AsusTek='AsusTek' ,
  DELL='DELL',
  RealTime='Real time' ,
  Lenovo='Lenovo',
  GE='GE',
  Modicon='Modicon',
  HP='HP',
  Toshiba='Toshiba',


}





export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string;
  status?: string;
  activity?: number;
  representative?: Representative;
}
export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}
