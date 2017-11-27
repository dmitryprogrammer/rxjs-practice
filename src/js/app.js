import Rx from "rxjs";

const btn = document.querySelector("#btn");

const eventObserveble = Rx.Observable.fromEvent(btn, "click")
    .scan(val => val + 1, 0)
    .map(val => val ** 2);

eventObserveble.subscribe(val => console.log("val", val));

const observeble = Rx.Observable.create(observer => {
    observer.next(2);
    setTimeout(() => {
        observer.next(4);
    }, 5000);
    observer.next(18);
}).map(val => val ** 2);

observeble.subscribe(x => {
    console.log("got value", x);
});