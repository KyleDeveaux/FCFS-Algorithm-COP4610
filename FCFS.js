// Define the process data
const processes = [
    { id: "P1", arrivalTime: 0, bursts: [6, 41, 5, 42, 7, 40, 8, 38, 6, 44, 5, 41, 9, 31, 7, 43, 8] },
    { id: "P2", arrivalTime: 0, bursts: [9, 24, 7, 21, 8, 36, 12, 26, 9, 31, 11, 28, 8, 21, 12, 13, 7, 11, 6] },
    { id: "P3", arrivalTime: 0, bursts: [7, 21, 8, 25, 12, 29, 6, 26, 8, 33, 9, 22, 6, 24, 4, 29, 16] },
    { id: "P4", arrivalTime: 0, bursts: [5, 35, 7, 41, 14, 45, 4, 51, 9, 61, 10, 54, 11, 82, 5, 77, 3] },
    { id: "P5", arrivalTime: 0, bursts: [6, 33, 7, 44, 5, 42, 9, 37, 8, 46, 5, 41, 7, 31, 4, 43, 3] },
    { id: "P6", arrivalTime: 0, bursts: [8, 24, 12, 21, 11, 36, 12, 26, 9, 31, 19, 28, 10, 21, 6, 13, 3, 11, 4] },
    { id: "P7", arrivalTime: 0, bursts: [7, 46, 3, 41, 12, 42, 8, 21, 4, 32, 6, 19, 12, 33, 10] },
    { id: "P8", arrivalTime: 0, bursts: [6, 14, 7, 33, 8, 51, 9, 63, 10, 87, 11, 74, 8] },
    { id: "P9", arrivalTime: 0, bursts: [4, 32, 5, 40, 6, 29, 4, 21, 5, 44, 6, 24, 4, 31, 5, 33, 6] },
  ];
  
  // Sort the processes based on their arrival time
  processes.sort((a, b) => a.arrivalTime - b.arrivalTime);
  
  // Define variables to store the metrics
  let cpuUtilization = 0;
  let responseTime = 0;
  let waitTime = 0;
  let turnaroundTime = 0;
// Define a variable to store the current time
let currentTime = 0;

// Loop through the processes
for (let i = 0; i < processes.length; i++) {
  const process = processes[i];

  // Calculate the start time of the process
  const startTime = Math.max(currentTime, process.arrivalTime);

  // Update the response time
  responseTime += startTime - process.arrivalTime;

  // Update the CPU utilization
  cpuUtilization += process.bursts.reduce((acc, burst) => acc + burst, 0);

  // Update the current time
  currentTime = startTime + process.bursts.reduce((acc, burst) => acc + burst, 0);

  // Calculate the wait time
  waitTime += startTime - process.arrivalTime;

  // Calculate the turnaround time
  turnaroundTime += currentTime - process.arrivalTime;
}

// Calculate the CPU utilization
cpuUtilization = cpuUtilization / currentTime;

// Calculate the average response time, wait time, and turnaround time
responseTime /= processes.length;
waitTime /= processes.length;
turnaroundTime /= processes.length;

// Print the results
console.log("Average Response Time: " + responseTime);
console.log("Average Wait Time: " + waitTime);
console.log("Average Turnaround Time: " + turnaroundTime);
