console.log("Application started");
setTimeout(() => {
    throw new Error("Application crashed");
}, 5000);