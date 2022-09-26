export class LoggingService {
    onSuccess(message) {
        console.log(message);
    }

    onWarning(message) {
        console.warn(message)
    }

    onError(message) {
        console.error(message)
    }
}