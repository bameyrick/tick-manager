const initialTicks: Function[] = [];
const preTicks: Function[] = [];
const ticks: Function[] = [];
let running = false;

export function AddInitialTick(fn: Function): void {
	initialTicks.push(fn);
	run();
}

export function AddPreTick(fn: Function): void {
	preTicks.push(fn);
	run();
}

export function AddTick(fn: Function): void {
	ticks.push(fn);
	run();
}

function run(): void {
	if (running) {
		return;
	}

	running = true;
	tick();
}

function tick(): void {
	initialTicks.forEach(fn => fn());
	preTicks.forEach(fn => fn());
	ticks.forEach(fn => fn());

	requestAnimationFrame(tick);
}
