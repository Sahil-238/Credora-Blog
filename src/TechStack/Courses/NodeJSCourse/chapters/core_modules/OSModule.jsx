import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCpu, FiHardDrive, FiUsers, FiInfo } from 'react-icons/fi';

const OSModule = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">OS Module in Node.js</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction to OS Module</h2>
        <p className="text-gray-600 mb-4">
          The OS module in Node.js provides operating system-related utility methods and properties.
          It allows you to interact with the operating system and retrieve information about the
          system's resources, memory, CPUs, and more.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiCpu className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>System information retrieval</li>
                <li>Memory usage statistics</li>
                <li>CPU information and load</li>
                <li>Network interfaces</li>
                <li>User information</li>
                <li>Operating system constants</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">System Information</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiInfo className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Get basic information about the operating system:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const os = require('os');

// OS platform and architecture
console.log('Platform:', os.platform());    // 'darwin', 'win32', 'linux'
console.log('Architecture:', os.arch());    // 'x64', 'arm', etc.

// OS information
console.log('OS Type:', os.type());         // 'Windows_NT', 'Darwin', 'Linux'
console.log('OS Release:', os.release());   // Version of the operating system
console.log('OS Version:', os.version());   // Kernel version

// System uptime
console.log('Uptime:', os.uptime());       // System uptime in seconds

// Host name
console.log('Hostname:', os.hostname());    // Computer's network name

// End-of-line marker
console.log('EOL:', os.EOL);               // \\n or \\r\\n

// OS constants
console.log('Constants:', os.constants);    // Operating system constants`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Memory Information</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiHardDrive className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Access information about system memory:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const os = require('os');

// Total system memory
console.log('Total Memory:', os.totalmem());
console.log('Total Memory (GB):', os.totalmem() / 1024 / 1024 / 1024);

// Free system memory
console.log('Free Memory:', os.freemem());
console.log('Free Memory (GB):', os.freemem() / 1024 / 1024 / 1024);

// Memory usage monitoring
function getMemoryUsage() {
  const total = os.totalmem();
  const free = os.freemem();
  const used = total - free;
  const usedPercentage = (used / total) * 100;

  return {
    total: total / 1024 / 1024 / 1024,    // GB
    free: free / 1024 / 1024 / 1024,      // GB
    used: used / 1024 / 1024 / 1024,      // GB
    usedPercentage: usedPercentage.toFixed(2)
  };
}

console.log('Memory Usage:', getMemoryUsage());`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">CPU Information</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiCpu className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Get information about the system's CPUs:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const os = require('os');

// Get CPU information
const cpus = os.cpus();
console.log('Number of CPUs:', cpus.length);

// CPU details
cpus.forEach((cpu, index) => {
  console.log(\`CPU \${index + 1}:\`);
  console.log('  Model:', cpu.model);
  console.log('  Speed:', cpu.speed, 'MHz');
  console.log('  Times:', cpu.times);
});

// CPU architecture
console.log('CPU Architecture:', os.arch());

// Load average
console.log('Load Average:', os.loadavg());
// Returns [1min, 5min, 15min] load averages

// CPU priority
const priority = os.getPriority();
console.log('Process Priority:', priority);

// Set process priority (requires appropriate permissions)
try {
  os.setPriority(os.getPriority() - 1);
  console.log('New Priority:', os.getPriority());
} catch (err) {
  console.error('Failed to set priority:', err);
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Network Interfaces</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Get Network Interface Information</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const os = require('os');

// Get all network interfaces
const networkInterfaces = os.networkInterfaces();

// Display network interface information
Object.entries(networkInterfaces).forEach(([name, interfaces]) => {
  console.log(\`Interface: \${name}\`);
  interfaces.forEach(interface => {
    console.log('  Address:', interface.address);
    console.log('  Netmask:', interface.netmask);
    console.log('  Family:', interface.family);
    console.log('  MAC:', interface.mac);
    console.log('  Internal:', interface.internal);
    console.log('  CIDR:', interface.cidr);
  });
});

// Filter for specific interface types
function getIPv4Addresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];

  Object.values(interfaces).forEach(ifaces => {
    ifaces.forEach(iface => {
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push(iface.address);
      }
    });
  });

  return addresses;
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Information</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiUsers className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Access information about the current user and system users:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const os = require('os');

// Get current user info
const userInfo = os.userInfo();
console.log('User Information:');
console.log('  Username:', userInfo.username);
console.log('  UID:', userInfo.uid);
console.log('  GID:', userInfo.gid);
console.log('  Home Directory:', userInfo.homedir);
console.log('  Shell:', userInfo.shell);

// Get home directory
console.log('Home Directory:', os.homedir());

// Get temporary directory
console.log('Temp Directory:', os.tmpdir());

// Current process user information
console.log('Current UID:', process.getuid());
console.log('Current GID:', process.getgid());

// Check if running as root/admin
function isRoot() {
  return process.getuid && process.getuid() === 0;
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Cache system information that doesn't change frequently</li>
            <li>Handle platform-specific differences</li>
            <li>Use appropriate error handling for privileged operations</li>
            <li>Consider memory usage when monitoring system resources</li>
            <li>Be careful with CPU-intensive operations</li>
            <li>Validate user permissions before system modifications</li>
            <li>Use appropriate units for memory calculations</li>
            <li>Consider cross-platform compatibility</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course/url-module"
          className="text-blue-600 hover:text-blue-800"
        >
          ← URL Module
        </Link>
        <Link
          to="/nodejs-course/process"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Process →
        </Link>
      </div>
    </motion.div>
  );
};

export default OSModule; 