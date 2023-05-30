import { Controller, Post, Body } from '@nestjs/common';
import { FirstBackTaskService } from './first-back-task.service';

@Controller()
export class FirstBackTaskController {
    constructor(private readonly firstBackTaskService: FirstBackTaskService) {}

    @Post('first-back-task')
    getResult(@Body('actions') actions: string[]): number {
        return this.firstBackTaskService.getResult(actions);
    }
}