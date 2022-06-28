//import decorator NgModule from @angular/core
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from "./components/root.component";
import { EmiCalculatorContainerComponent } from "src/creditCardEmiCalculator/components/emiCalculatorContainer/emiCalculatorContainer.component";
import { CreditCardEmiCalculatorModule } from "src/creditCardEmiCalculator/creditCardEmiCalculator.module";

//Defining Metadata using TypeScript Decorators
@NgModule({
    declarations:[RootComponent],
    imports:[BrowserModule, CreditCardEmiCalculatorModule],
    bootstrap:[RootComponent, EmiCalculatorContainerComponent]
})
export class RootModule{
    
}