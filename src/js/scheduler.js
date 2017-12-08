import Rx from "rxjs";

export class SchedulerPractice {
    constructor() {
        this.run();
    }

    run() {
        this.tryAsyncScheduler();
        this.tryAsyncSchedulerByFrom();
    }

    tryAsyncScheduler() {
        const observable = Rx.Observable.create(observer => {
            let x = 0;
            while (x <= 10) {
                observer.next(x);
                x++;
            }
        }).observeOn(Rx.Scheduler.async);

        console.log("start explaining");
        observable.subscribe(x => console.log(x));
        console.log("end explaining");
    }

    tryAsyncSchedulerByFrom() {
        const observable = Rx.Observable.from([1, 2, 3], Rx.Scheduler.async);
        console.log("start explaining");
        observable.subscribe(x => console.log(x));
        console.log("end explaining");
    }
}