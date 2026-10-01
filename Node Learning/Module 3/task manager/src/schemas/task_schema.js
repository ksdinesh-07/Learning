import { z } from 'zod';

export const task_schema = z.object({
    title: z.string(),
    email: z.email(),
    due_date: z.string().date()
});