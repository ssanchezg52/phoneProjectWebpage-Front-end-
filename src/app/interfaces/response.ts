import { Phone } from "./phone";

export interface Response{
    timeStamp:Date;
	statusCode:number;
	status:string;
	reason:string;
	message:string;
	developerMessage:string;
	data:{phoneSpecific:Phone,phoneList?:Phone[], phoneListContent:Content}
}

export interface Content{
	content:Phone[]
}