export function changeCurrentTimer(num) {
    this.currentTimer = num;
    this.reset(this.timers[num].minutes);
}