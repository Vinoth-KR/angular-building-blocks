import { NgModule } from "@angular/core";

import { WidgetsModule } from "src/app/widgets/widgets.module";
import { EmiCalculatorContainerComponent } from "./components/emiCalculatorContainer/emiCalculatorContainer.component";
import { EmiCalculatorComponent } from "./components/emiCalculator/emiCalculator.component";
import { EmiBreakupComponent } from "./components/emiBreakup/emiBreakup.component";
import { EmiSummaryComponent } from "./components/emiSummary/emiSummary.component";



@NgModule({
    declarations:[EmiCalculatorContainerComponent, EmiCalculatorComponent, EmiBreakupComponent, EmiSummaryComponent],      
    imports :[WidgetsModule],
    exports:[EmiCalculatorContainerComponent]    
})
export class CreditCardEmiCalculatorModule{

}