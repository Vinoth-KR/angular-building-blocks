import { Component, EventEmitter, Output } from "@angular/core";
import { CalculationSummaryModel } from "src/creditCardEmiCalculator/models/calculationSummary.model";

@Component({
    templateUrl : './emiCalculator.component.html',
    selector : 'emi-calculator'
})
export class EmiCalculatorComponent{
    amount:number=0;
    tenure:number=0;
    interestRate:number=0;

    @Output()
    onResultComputed=new EventEmitter<CalculationSummaryModel>();

    setValue(value:string){
        this.amount = parseInt(value);
    }

    setTenure(value:string){
        this.tenure = parseInt(value);
    }

    setInterestRate(value:string){  
        this.interestRate = parseInt(value);
    }

    calculateEmi(){
            let emiCost = this.amount - 1000;
            let totalInterest = this.amount - 500;
            let totalAmountPayable = this.amount + 2000;

            let resultModel = new CalculationSummaryModel(emiCost,totalInterest,totalAmountPayable);
            this.onResultComputed.emit(resultModel); //publishing the data.
    }

    reset(){
        this.amount = 0;
        this.tenure = 0;
        this.interestRate=0;   
        
        let resultModel = new CalculationSummaryModel(0,0,0);
        this.onResultComputed.emit(resultModel);
    }
}