// prettier-ignore
// const tasks = [
//     p0 = {cpu: [ 0 ], inputOutput: [ 0 ]},
//     p1 = {cpu: [ 6, 5, 7, 8, 6, 5, 9, 7, 8 ], inputOutput: [ 41, 42, 40, 38, 44, 41, 31, 43 ]},
//     p2 = {cpu: [ 9, 7, 8, 12, 9, 11, 8, 12, 7, 6 ], inputOutput: [ 24, 21, 36, 26, 31, 28, 21, 13, 11, ]},
//     p3 = {cpu: [ 7, 8, 12, 6, 8, 9, 6, 4, 16 ], inputOutput: [ 21, 25, 29, 26, 33, 22, 24, 29 ]},
//     p4 = {cpu: [ 5, 7, 14, 4, 9, 10, 11, 5, 3 ], inputOutput: [ 35, 41, 45, 51, 61, 54, 82, 77 ]},
//     p5 = {cpu: [ 6, 7, 5, 9, 8, 5, 7, 4, 3 ], inputOutput: [ 33, 44, 42, 37, 46, 41, 31, 43 ]},
//     p6 = {cpu: [ 8, 12, 11, 12, 9, 19, 10, 6, 3, 4 ], inputOutput: [ 24, 21, 36, 26, 31, 28, 21, 13, 11 ]},
//     p7 = {cpu: [ 7, 3, 12, 8, 4, 6, 12, 10 ], inputOutput: [ 46, 41, 42, 21, 32, 19, 33 ]},
//     p8 = {cpu: [ 6, 7, 8, 9, 10, 11, 8 ], inputOutput: [ 14, 33, 51, 63, 87, 74 ]},
//     p9 = {cpu: [ 4, 5, 6, 4, 5, 6, 4, 5, 6 ], inputOutput: [ 32, 40, 29,21, 44, 24, 31, 33 ]}
// ]

// // let time = 0;
// // let isIdle = false;
// // const completedTask = [];

// // // while loop when there is nothing left in the readyQ

// const roundOne = (tasks) => {
//   let readyQ = 0;
//   for (let i = 0; i < tasks.length; i++) {
//     // readyQ should calculate the start point of first 2 arrays
//     const startQ = tasks[0].cpu[0];
//     if (i === 0) {
//       readyQ = startQ + tasks[i + 1].cpu[i];
//       console.log(`readyQ ${readyQ}`);
//     } else if (i === 1) {
//       console.log(readyQ);
//       console.log(tasks[i].cpu[i]);
//       readyQ = readyQ + tasks[i+1].cpu[i];
//         console.log(`readyQ ${readyQ} }`);
//     }
//   }
// };

// roundOne(tasks);

// let readyQ = tasks[i].cpu[i] + tasks[i + 1].cpu[i];

const processes = [
    { name: "P1", cpuBurst: [6, 5, 7, 8, 6, 5, 9, 7, 8], ioTime: [41, 42, 40, 38, 44, 41, 31, 43] },
    { name: "P2", cpuBurst: [9, 7, 8, 12, 9, 11, 8, 12, 7, 6], ioTime: [24, 21, 36, 26, 31, 28, 21, 13, 11] },
    { name: "P3", cpuBurst: [7, 8, 12, 6, 8, 9, 6, 4, 16], ioTime: [21, 25, 29, 26, 33, 22, 24, 29] },
    { name: "P4", cpuBurst: [5, 7, 14, 4, 9, 10, 11, 5, 3], ioTime: [35, 41, 45, 51, 61, 54, 82, 77] },
    { name: "P5", cpuBurst: [6, 7, 5, 9, 8, 5, 7, 4, 3], ioTime: [33, 44, 42, 37, 46, 41, 31, 43] },
    { name: "P6", cpuBurst: [8, 12, 11, 12, 9, 19, 10, 6, 3, 4], ioTime: [24, 21, 36, 26, 31, 28, 21, 13, 11] },
    { name: "P7", cpuBurst: [7, 3, 12, 8, 4, 6, 12, 10], ioTime: [46, 41, 42, 21, 32, 19, 33] },
    { name: "P8", cpuBurst: [6, 7, 8, 9, 10, 11, 8], ioTime: [14, 33, 51, 63, 87, 74] },
    { name: "P9", cpuBurst: [4, 5, 6, 4, 5, 6, 4, 5, 6], ioTime: [32, 40, 29, 21, 44, 24, 31, 33] }
  ];

const fcfsScheduler = (processes) => {
  console.log("Starting FCFS scheduler...");
  let currentTime = 0;
  let completionTimes = [];
  let waitingTimes = [];

  for (let i = 0; i < processes.length; i++) {
    const process = processes[i];
    console.log(`Executing ${process.name}...`);
    currentTime += process.cpuBurst.reduce((a, b) => a + b, 0);
    completionTimes.push({ name: process.name, completionTime: currentTime });
    waitingTimes.push({
      name: process.name,
      waitingTime: currentTime - process.cpuBurst[0],
    });
  }

  console.log("FCFS scheduling complete!");
  console.log("Task completion times:");
  console.log(completionTimes);
  console.log("Task waiting times:");
  console.log(waitingTimes);
};

fcfsScheduler(processes);
