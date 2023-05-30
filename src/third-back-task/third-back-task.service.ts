import { Injectable } from '@nestjs/common';

@Injectable()
export class ThirdBackTaskService {
    getResult(s: string): string {
        const stack: string[] = [];
        let result = '';

        for (let i = 0; i < s.length; i++) {
            const char = s.charAt(i);

            if (char === '{') {
                stack.push(result);
                result = '';
            } else if (char === '}') {
                const repeat = Number(stack.pop());
                result = stack.pop() + result.repeat(repeat);
            } else if (isNaN(Number(char))) {
                result += char;
            } else {
                let num = char;
                while (!isNaN(Number(s.charAt(i + 1)))) {
                    num += s.charAt(i + 1);
                    i++;
                }
                result += num;
            }
        }

        return result;
    }
}
