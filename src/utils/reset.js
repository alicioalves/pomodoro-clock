export function reset(minutes) {
    this.stop();
    this.totalSeconds = minutes * 60;
}