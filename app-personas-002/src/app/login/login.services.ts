import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable()

export class LoginServices {
    token: string;
    constructor(private ruter: Router){}

    // tslint:disable-next-line: typedef
    login(email: string, password: string){
      firebase.auth().signInWithEmailAndPassword(email, password)
      // tslint:disable-next-line: whitespace
      .then( (response) => {
          firebase.auth().currentUser?.getIdToken()
          .then((token) => {
              this.token = token;
              this.ruter.navigate(['/']);
            }
          );
        }
      );
    }
// tslint:disable-next-line: typedef
getIdToken(){
  return this.token;
}
}

