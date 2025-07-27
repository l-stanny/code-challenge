import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
})
export class TasksComponent implements OnInit {
  productName: string;
  showMessage!: boolean;
  productNames: string[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.productName = 'Cool Jacket';
  }

  ngOnInit(): void {}

  onSubmit(form: any): void {
    if (form.productName === '') {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
    this.productNames.push(this.productName);
  }

  deletetask(event: any): void {
    const clickedButton = event.target as HTMLElement;
    const parentElement = clickedButton.parentNode as HTMLElement;
    if (parentElement) {
      this.renderer.removeChild(parentElement.parentNode, parentElement);
    }
  }
}
