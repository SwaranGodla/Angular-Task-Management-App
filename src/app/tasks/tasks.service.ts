import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({providedIn: 'root'})
export class TasksService {
   private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'Learn Angular to build web applications',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u2',
            title: 'Master React',
            summary: 'Learn React to build web applications',
            dueDate: '2025-12-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Master Vue',
            summary: 'Learn Vue to build web applications',
            dueDate: '2025-12-31',
        },
    ];

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }


    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate,
        });
        this.saveTasks();
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }


    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}