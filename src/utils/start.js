export function start() {
    this.stop();
    this.isRunning = true;
    this.timerInstance = setInterval(() => {
        if (this.totalSeconds <= 0) {
            this.stop();
            return;
        }
        this.totalSeconds -= 1;
    }, 1000)
}