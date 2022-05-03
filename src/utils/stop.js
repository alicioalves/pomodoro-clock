export function stop() {
    this.isRunning = false;
    clearInterval(this.timerInstance);
}