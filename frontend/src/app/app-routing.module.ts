import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { InstructionsComponent } from "./instructions.component";

const routes: Routes = [
  {
    path: "instructions",
    component: InstructionsComponent,
  },
  {
    path: "**",
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
