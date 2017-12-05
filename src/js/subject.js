import Rx from "rxjs";

export class SubjectsPractice {
    constructor() {
        const subject = new Rx.Subject();

        //  subscribing
        subject.subscribe({
            next: (v) => console.log("observable 1", v)
        });

        setTimeout(() => {
            subject.subscribe((v) => console.log("observable 2", v));
        }, 2000);

        subject.next(1);
        subject.next("Family");
        subject.next(2);
        setInterval(function () {
            subject.next({
                a: 1,
                b: 2,
                c: 3,
                d: 4
            });
        }, 5000);
    }
}