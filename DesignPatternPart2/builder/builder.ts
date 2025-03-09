export {};

type ComputerType = "Desktop" | "Laptop";
type Cpu = "Core i5" | "Core i9";
type Ram = 16 | 32 | 64;

class Computer {
    type: ComputerType;
    cpu: Cpu;
    ram: Ram;
}

interface ComputerBuilder {
    addCpu(cpu: Cpu);
    addRam(ram: Ram);
}

class DesktopBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
        this.computer.type = "Desktop";
    }

    addCpu(cpu: Cpu) {
        this.computer.cpu = cpu;
    }

    addRam(ram: Ram) {
        this.computer.ram = ram;
    }

    getResult(): Computer {
        return this.computer;
    }
}

class LaptopBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
        this.computer.type = "Laptop";
    }

    addCpu(cpu: Cpu) {
        this.computer.cpu = cpu;
    }

    addRam(ram: Ram) {
        this.computer.ram = ram;
    }

    getResult(): Computer {
        return this.computer;
    }
}

class Director {
    constructor(private builder: ComputerBuilder) {}

    construct() {
        this.builder.addCpu("Core i5");
        this.builder.addRam(16);
    }

    highSpecConstruct() {
        this.builder.addCpu("Core i9");
        this.builder.addRam(64);
    }
}

function run() {
    const desktopBuilder = new DesktopBuilder();
    const desktopDirector = new Director(desktopBuilder);
    desktopDirector.construct();
    const desktopComputer = desktopBuilder.getResult();
    console.log(desktopComputer);

    const laptopBuilder = new LaptopBuilder();
    const laptopDirector = new Director(laptopBuilder);
    laptopDirector.highSpecConstruct();
    const laptopComputer = laptopBuilder.getResult();
    console.log(laptopComputer);
}

run();
