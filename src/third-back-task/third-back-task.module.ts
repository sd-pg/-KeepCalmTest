import { Module } from '@nestjs/common';
import { ThirdBackTaskService } from './third-back-task.service';
import { ThirdBackTaskController } from './third-back-task.controller';

@Module({
  providers: [ThirdBackTaskService],
  controllers: [ThirdBackTaskController]
})
export class ThirdBackTaskModule {}
