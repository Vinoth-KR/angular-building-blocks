import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { EmiCalculatorContainerComponent } from "./components/emiCalculatorContainer/emiCalculatorContainer.component";
import { EmiCalculatorModule } from "./components/emiCalculator/emiCalculator.module";
import { EmiBreakupModule } from "./components/emiBreakup/emiBreakup.module";

@NgModule({
    declarations:[EmiCalculatorContainerComponent],  
    imports:[EmiCalculatorModule, EmiBreakupModule], 
    exports:[EmiCalculatorContainerComponent]    
})
export class CreditCardEmiCalculatorModule{

}