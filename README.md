# To understand cluster module in Node JS

- Use **os** module to count number of cores (CPUs) on the machine
- Use **cluster** module to fork primary (master) process on each core
- Use **http** module to create a simple HTTP server
- Use **loadtest** (third party) module to test concurrent connections

### Conclusion
- Cluster is useful for scaling the application
- Node JS is not good at balancing the load 
