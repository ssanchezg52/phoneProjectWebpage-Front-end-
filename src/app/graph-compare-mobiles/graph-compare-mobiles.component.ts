import { Component, Input, OnInit } from '@angular/core';
import { Phone } from '../interfaces/phone';
import { GraphService } from '../services/graph.service';


@Component({
  selector: 'app-graph-compare-mobiles',
  templateUrl: './graph-compare-mobiles.component.html',
  styleUrls: ['./graph-compare-mobiles.component.css']
})
export class GraphCompareMobilesComponent implements OnInit {

  @Input() public phones!:Phone[];
  public salesData:any;

  constructor(private graphService:GraphService) { }

  ngOnInit(): void {
    this.salesData = this.graphService.getData();
    console.log(this.salesData);
  }

}
