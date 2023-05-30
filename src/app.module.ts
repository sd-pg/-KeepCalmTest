import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstBackTaskModule } from './first-back-task/first-back-task.module';
import { SecondBackTaskModule } from './second-back-task/second-back-task.module';
import { ThirdBackTaskModule } from './third-back-task/third-back-task.module';

@Module({
  imports: [FirstBackTaskModule, SecondBackTaskModule, ThirdBackTaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
