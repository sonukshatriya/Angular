import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
newtask:string='';
tasks:string[]=[];


  addtask(){
    if (this.newtask.trim()!==''){
      this.tasks.push(this.newtask);
      this.newtask='';
    }
  }
 removeTask(index:number){


  this.tasks.splice(index,1);
 }
}