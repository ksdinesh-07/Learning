module.exports = {
    apps: [
        {
            name: "e-com-api",
            script: "./src/server.js",
            instances: 4,
            exec_mode: "cluster",
            env: {
                NODE_ENV: "development"
            },
            env_production: {
                NODE_ENV: "production"
            }
        }
    ]
};


//dev 
// pm2 start ecosystem.config.cjs

//production
// pm2 start ecosystem.config.cjs --env production

//del all
//pm2 delete all

//del
//pm2 delete e-com-api

//list all
// pm2 list

//save
// pm2 save

//show
//pm2 show e-com-api

//gracefull reload
// pm2 restart e-com-api(stops all and start) |   pm2 reload e-com-api(0-downtime reload)

// logs
// pm2 logs e-com-api