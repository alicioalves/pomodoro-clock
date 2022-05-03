export function save(updatedTimers) {
    this.timers = this.timers.map((timer, i) => {
        return { ...timer, minutes: parseInt(updatedTimers[i]) }
    })
    this.closeDialog();
}