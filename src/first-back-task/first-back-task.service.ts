import { Injectable } from '@nestjs/common';

@Injectable()
export class FirstBackTaskService {
    getResult(actions: string[]): number {
        let sessionCount = 0;
        let messageCount = 0;
        let sessionStarted = false;

        for (const action of actions) {
            if (action === 'start') {
                if (!sessionStarted) {
                    sessionStarted = true;
                } else {
                    sessionCount++;
                    messageCount = 0;
                }
            } else if (action === 'end') {
                if (sessionStarted && messageCount > 0) {
                    sessionCount++;
                    sessionStarted = false;
                }
            } else if (sessionStarted && action === 'message') {
                messageCount++;
            }
        }

        return sessionCount;
    }
}