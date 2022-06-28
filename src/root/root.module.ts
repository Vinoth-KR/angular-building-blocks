//import decorator NgModule from @angular/core
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from "./components/root.component";

//Defining Metadata using TypeScript Decorators
@NgModule({
    declarations:[RootComponent],
    imports:[BrowserModule],
    bootstrap:[RootComponent]
})
export class RootModule{
    
}