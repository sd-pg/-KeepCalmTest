import {Body, Controller, Post} from '@nestjs/common';
import {SecondBackTaskService} from "../second-back-task/second-back-task.service";

@Controller('second-back-task')
export class SecondBackTaskController {
    constructor(private readonly secondBackTaskService: SecondBackTaskService) {}

    @Post('second-back-task')
    getResult(@Body() data: { a: number; b: number }): { result: number } {
        const { a, b } = data;
        const result = this.secondBackTaskService.getResult(a, b);
        return { result };
    }
}
