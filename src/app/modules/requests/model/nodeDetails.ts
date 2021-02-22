import { IRequest } from "./IRequest";

export interface INodeDetails{
    
     teOrderLineNumber :string;
     nodeId :string ;
     teResourceIdentifier:string;
     accountName:string 
     accountNumber :string;
     availabilityNode:number;
     requests:IRequest[];
}