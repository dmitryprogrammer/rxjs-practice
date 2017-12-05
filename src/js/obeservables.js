import Rx from "rxjs";

export class ObservablesPractice {
    constructor() {

        const observer = Rx.Observable.of([1, 2, 3]);
        const observer2 = Rx.Observable.create((observer) => {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            setTimeout(function () {
                observer.next(6);
            }, 2100);
            setTimeout(function () {
                observer.next(5);
            }, 1000);
            observer.next(4);
        });

        const subscription = observer.subscribe(x => console.log(x));
        const subscription2 = observer2.subscribe(y => console.log(y));

        setTimeout(() => {
            subscription.unsubscribe();
            subscription2.unsubscribe();
        }, 2000);
    }
}