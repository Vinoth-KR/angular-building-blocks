import { Component, Input } from "@angular/core";
import { CalculationSummaryModel } from "src/creditCardEmiCalculator/models/calculationSummary.model";

@Component({    
  templateUrl: './emiSummary.component.html',
  selector:'emi-Summary'
})

export class EmiSummaryComponent{

    @Input()
    result!:CalculationSummaryModel;
}