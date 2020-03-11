import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OperatorsService } from './_service/operators.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RxJS-Basics';

  constructor(private service: OperatorsService) { }

  ngOnInit() {
    // this.sampleCreationOfObservable();
    // this.observableLifeCycle();
    // this.observablesAndFunctions();
    // this.service.creationOperators();
    // this.service.transformationOperators();
    // this.service.combinationOperators();
    this.service.conditionalOperators();
    // this.service.errorHandlingOperators();
    // this.service.concatOperatorExample(document.getElementById("concatEx"));
  }

  sampleCreationOfObservable() {
    const observable = Observable.create((observer: any) => {
      observer.next('Hello World!');
    });

    observable.subscribe(data => {
      console.log(data);
    });
  }

  observableLifeCycle() {
    const observable = Observable.create((observer: any) => {
      observer.next('Hello World!');
      // observer.error("Error Passed");
      observer.complete();
    });

    observable.subscribe({
      next(msg) {
        console.log(msg);
      },
      error(err) {
        console.error(err);
      },
      complete() {
        console.log('Done');
      }
    });
  }

  observablesAndFunctions() {
    const ret = this.simpleFunction();
    console.log(ret);

    // Observable subscribes are similar to function calls

    const obs1 = new Observable(observer => {
      observer.next(100);
    });

    obs1.subscribe(data => {
      console.log('From obs1 :', data);
    });

    // Observable subscribes are similar to function calls,
    // but can emit multiple values

    const obs2 = new Observable(observer => {
      observer.next(100);
      observer.next(200);
      observer.next(300);
    });

    obs2.subscribe(data => {
      console.log('From obs2 :', data);
    });

    // Observables can return value asynchronously too
    const obs3 = new Observable(observer => {
      observer.next(100);
      setTimeout(() => {
        observer.next(200); // happens asynchronously
      }, 2000);
      observer.next(300);
    });

    obs3.subscribe(data => {
      console.log('From obs3 :', data);
    });
  }

  simpleFunction() {
    return 100;
  }
}
