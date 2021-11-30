export class BaseLogger {
    log(data){
        console.log("Default logger: " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic: "+ data)
    }
}

export class MongocLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo: "+ data)

    }
}
