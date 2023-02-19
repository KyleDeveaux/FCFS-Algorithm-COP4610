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
