import winston from 'winston'

const logger = winston.createLogger({
  level: 'info',
  defaultMeta:{
    serviceName:'auth-service'
  }
  ,
  transports: [  //where log will be stored 
  new winston.transports.File({
    level:'debug',
    dirname:'logs',
    filename:'auth.log',
    silent:false
   }), 

    new winston.transports.Console({
        level: 'info',
        format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    })
  ]
})

export default logger