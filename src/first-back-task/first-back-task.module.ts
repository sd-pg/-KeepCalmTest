import { Module } from '@nestjs/common';
import { FirstBackTaskController } from './first-back-task.controller';
import { FirstBackTaskService } from './first-back-task.service';

@Module({
  controllers: [FirstBackTaskController],
  providers: [FirstBackTaskService]
})
export class FirstBackTaskModule {}
