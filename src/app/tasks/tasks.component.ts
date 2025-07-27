import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  imports: [ReactiveFormsModule, FormsModule],
})
export class TasksComponent implements OnInit {
  taskName: string;
  showMessage!: boolean;
  taskNames: string[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.taskName = 'My task';
  }

  ngOnInit(): void {}

  onSubmit(form: any): void {
    if (form.taskName === '') {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
    this.taskNames.push(this.taskName);
  }

  deletetask(event: any): void {
    const clickedButton = event.target as HTMLElement;
    const parentElement = clickedButton.parentNode as HTMLElement;
    if (parentElement) {
      this.renderer.removeChild(parentElement.parentNode, parentElement);
    }
  }
}
