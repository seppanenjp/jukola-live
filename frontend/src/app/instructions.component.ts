import { Component, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-instructions",
  templateUrl: "instructions.component.html",
})
export class InstructionsComponent {
  @ViewChild("content", { static: false }) content: NgbModal;
  constructor(private modalService: NgbModal) {}
  open(): void {
    this.modalService.open(this.content).result.then(
      (result) => {},
      (reason) => {}
    );
  }
}
