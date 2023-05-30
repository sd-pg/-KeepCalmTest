import { Module } from '@nestjs/common';
import { SecondBackTaskController } from './second-back-task.controller';
import { SecondBackTaskService } from './second-back-task.service';

@Module({
  controllers: [SecondBackTaskController],
  providers: [SecondBackTaskService]
})
export class SecondBackTaskModule {}
