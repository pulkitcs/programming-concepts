// singleton

// freeze, prevents new properties to be added and exising to not be edited
type config = {
  start: () => string,
  update: () => string,
  name: string
}

const config:config = {
  start: () => "something started",
  update: () => "something updated",
  name: 'Ram'
}

Object.freeze(config);

config.start();
config.update();

try {
  config.name = "Krishna";
}
catch(e) {
  //console.log(e);
}

console.log(config);


class Process {
  constructor() {

  }

  start() {
    console.log("This has started");

  }

  update() {
    console.log("This has updated");
  }
}

const newProcess: Process = new Process();

Object.freeze(newProcess);
console.log(Object.isFrozen(newProcess));

type element = {
  name: string;
  getName?: () => string;
}

// function elements(name: string) {
//   this.name = name;
// }

// elements.prototype.getName = function(): string {
//   return this.name;
// }

// const na: element = new elements('sodium');

function Elements(name: string) {
    this.name = name;
}

const na: element = new Elements("sodium");