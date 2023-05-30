import { Controller, Post, Body } from '@nestjs/common';
import { ThirdBackTaskService } from './third-back-task.service';

@Controller('third-back-task')
export class ThirdBackTaskController {
    constructor(private readonly thirdBackTaskService: ThirdBackTaskService) {}

    @Post('getResult')
    getResult(@Body() requestBody: { s: string }): string {
        const { s } = requestBody;
        return this.thirdBackTaskService.getResult(s);
    }
}