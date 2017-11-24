import Rx from "rxjs";

const btn = document.querySelector("#btn");

const observeble = Rx.Observable.create(observer => {
    observer.next(1);
    setTimeout(() => {
        observer.next(4);
    }, 1000);
});

btn.onclick = () => {
    let count = 0;
    observeble.next(++count);
};

observeble.subscribe(x => {
    console.log("got value", x);
});