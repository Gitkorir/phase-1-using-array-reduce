const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Array representing the number of batteries in different assemblies
const assembledBatteries = [
  5,
  8,
  3,
  2,
  4,
  9, // Example battery counts from different assemblies
];

// Function to calculate the total number of batteries
const totalBatteries = assembledBatteries.reduce(
  (sum, batteries) => sum + batteries,
  0
);

// Export the variable for testing
if (typeof module !== "undefined" || module.exports) {
  module.exports = {
    totalBatteries,
  };
}
