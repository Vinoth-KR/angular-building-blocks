import { NgModule } from "@angular/core"
import { EmiCalculatorComponent } from "./components/emiCalculator.component"

@NgModule({
    declarations:[EmiCalculatorComponent],
    exports:[EmiCalculatorComponent]
})
export class EmiCalculatorModule{

}