import { Injectable } from '@nestjs/common';

@Injectable()
export class SecondBackTaskService {
    getResult(a: number, b: number): number {
        // мапа со всеми возможными окончаниями при возведении любого числа в степень
        const lastDigitMap: Record<number, number[]> = {
            0: [0, 0, 0, 0],
            1: [1, 1, 1, 1],
            2: [2, 4, 8, 6],
            3: [3, 9, 7, 1],
            4: [4, 6, 4, 6],
            5: [5, 5, 5, 5],
            6: [6, 6, 6, 6],
            7: [7, 9, 3, 1],
            8: [8, 4, 2, 6],
            9: [9, 1, 9, 1],
        };

        const baseLastDigit = a % 10;
        const powLastDigit = b % 4 === 0 ? 3 : (b % 4) - 1;
        const resultLastDigit = lastDigitMap[baseLastDigit][powLastDigit];

        return resultLastDigit;
    }
}
