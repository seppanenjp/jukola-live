import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InstructionsComponent } from "./instructions.component";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [AppComponent, InstructionsComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModalModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
