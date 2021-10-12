export class TempTracker {

    public temps: number[] = [];
    public max = null;
    public min = null;
    public mean = null;
    public mode = null;

    constructor(temps: number[]) {
        this.insert(temps);
        console.log(temps);
    }

    // Insert
    insert(temps: number[]): any {
        this.temps = temps;
        this.get_max();
        this.get_min();
        this.get_mean();
        this.get_mode();
    }

    // Max
    get_max(): void {
        this.max = Math.max(...this.temps);
    }

    // Min
    get_min(): void {
        this.min = Math.min(...this.temps);
    }

    // Mean
    get_mean(): void {
        let sum = 0;
        this.temps.forEach(item => {
            sum += +item;
        });
        console.log(sum);
        const len = this.temps.length;
        console.log(len);
        this.mean = (sum / len).toFixed(2);
    }

    // Mode
    get_mode(): void {
        this.mode = this.calcMode(this.temps);
    }

    // Calc Mode
    calcMode(arr: number[]): number {
        let mode = 0;
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < i; j++) {
                if (arr[j] === arr[i]) {
                    mode = arr[j];
                    count++;
                }
            }
        }
        return mode;
    }
}
