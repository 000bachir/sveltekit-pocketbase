
export let clamp = (value: number, max: number, min: number):number => {
    return Math.max(Math.min(value, max), min)
}
export let px = (value: number) => `${value}px`

export let deg = (value: number) => `${value}deg`

export let xy = (x: number, y: number) => ({ x, y });

export function UpdateMouse(MouseX: any, MouseY: any) {
    interface Mouse {
        position: { x: number; y: number };
        decimals: { x: number; y: number };
        multiplayer: { x: number; y: number };
        offsetPosition: { x: number; y: number };
        modifiedPosition: { x: number; y: number };
    }

    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

    const mouse: Mouse = {
        position: xy(MouseX, MouseY),
        decimals: xy(MouseX / innerWidth, MouseY / innerHeight),
        multiplayer: xy(1.3, 0.4),
        offsetPosition: xy(windowWidth * -0.15, windowHeight * 0.1),
        modifiedPosition: xy(0, 0)
    };

    mouse.modifiedPosition.x = mouse.position.x * mouse.multiplayer.x + mouse.offsetPosition.x
    mouse.modifiedPosition.y = mouse.position.y * mouse.multiplayer.y + mouse.offsetPosition.y

    return mouse
}


