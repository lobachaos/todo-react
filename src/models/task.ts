export const TaskStatus = {
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED',
} as const;

export const TaskState = {
    CREATING: 'CREATING',
    CREATED: 'CREATED',
} as const;

export const TASKS_KEY = 'tasks';

export interface Task {
    id: string;
    title: string;
    status:  typeof TaskStatus[keyof typeof TaskStatus];
    state: typeof TaskState[keyof typeof TaskState];
}