import Rx from "rxjs";

export class Operators {
    run() {
        const observable1 = Rx.Observable.interval(1000);
        const observable2 = Rx.Observable.interval(400);

        const merged = Rx.Observable.merge(observable1, observable2);

        merged.subscribe(v => console.log(v));
    }
}