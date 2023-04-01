export interface User {
  id: string;
  name: string;
  authorization:Authorization;


}
export enum Authorization {
  CISO='CISO',
  OperationManager='Operation manager' ,
  SeniorManagement='Senior management',
  RealTime='Real time' ,
}
