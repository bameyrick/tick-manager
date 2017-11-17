const initialTicks: Function[] = [];
const preTicks: Function[] = [];
const ticks: Function[] = [];
let running: boolean = false;

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
	initialTicks.forEach((fn: Function) => fn());
	preTicks.forEach((fn: Function) => fn());
	ticks.forEach((fn: Function) => fn());

	requestAnimationFrame(tick);
}
