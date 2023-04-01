import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, from, interval, map, Observable, of} from "rxjs";

type Person = {
  age: number,
  name: string
}
@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
      private httpClient: HttpClient
  ) { }

  log() {
    console.log('log');
  }

  getPokemon(name: string): Observable<any>
  {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  createOperatorExample() {
    // const source = of(1, 2, 3, 4, 5)
    const source = from([1, 2, 3, 4, 5])

    const result = source.pipe(
        filter((value: any) => value % 2 === 0),
        map((value: any) => value * 2)
    );

    const sub = result.subscribe((value: any) => console.log(value));

    setTimeout(() => {
        sub.unsubscribe();
        console.log('unsubscribe');
    }, 2000);
  }

  customExample() {
    const source = of('a', 'b', 'c', 'd', 'e');

    const result = source.pipe(
        map((value: string) => value.toUpperCase())
    );

    const sub = result.subscribe((value: any) => console.log(value));

    setTimeout(() => {
      sub.unsubscribe();
      console.log('unsubscribe');
    }, 2000);
  }


  customExampleObjects() {
    const persons: Person[] = [
      {
        age: 10,
        name: 'Chris',
      },
      {
        age: 45,
        name: 'George',
      },
      {
        age: 26,
        name: 'Maria',
      },
      {
        age: 18,
        name: 'Ionut',
      },
    ]
    const source = from(persons)

    const result = source.pipe(
        filter((person: Person) => person.age >= 25),
        map((person: Person) => person.name.toUpperCase())
    );

    const sub = result.subscribe((value: any) => console.log(value));

    setTimeout(() => {
      sub.unsubscribe();
      console.log('unsubscribe');
    }, 3000);

  }

  customExampleInterval() {
    const source = interval(1000)

    const result =  source.subscribe((value: number)=> console.log(value))

    setTimeout(() => {
      result.unsubscribe();
      console.log('unsubscribe');
    }, 10000);
  }
}
