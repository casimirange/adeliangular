import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../_services/auth.service";
import {TokenService} from "../../../_services/token/token.service";
import {ICredentials} from "../../../_interfaces/credentials";
import {IToken} from "../../../_model/token";
import {BehaviorSubject, Observable, of} from "rxjs";
import {DataState} from "../../../_enum/data.state.enum";
import {NotifsService} from "../../../_services/notifications/notifs.service";
import {aesUtil, AESUtil, key} from "../../../_helpers/aes.js";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  project = 'ADELI';
  socity = 'ADELI';
  loginForm: FormGroup ;
  credentials: ICredentials = { }
  user?: IToken;
  errorMessage = '';

  // appState$: Observable<AppState<CustomResponseLogin>> = new Observable<AppState<CustomResponseLogin>>();
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();
  readonly DataState = DataState;
  isLoginFailed: boolean;
  isLoggedIn: boolean;
  form: any;
  count: number = 0;
  constructor(
    private fb: FormBuilder, private http: HttpClient, private authService: AuthService, private tokenService: TokenService,
    private notifsService: NotifsService
    ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+./;:-]).{8,}$")]],
    });
    this.form = this.loginForm.controls;
  }

  ngOnInit(): void {
    // console.log("datas ", JSON.parse(aesUtil.decrypt(key, '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')))

    // this.notifsService.apiError.subscribe(
    //   data => {
        // this.notifsService.onError(data)
        // }
    // )
  }


  login() {

    this.isLoading.next(true);
<<<<<<< HEAD
    this.credentials.login = this.loginForm.controls['username'].value;
    this.credentials.password = this.loginForm.controls['password'].value;
    this.authService.login(this.credentials).subscribe(
      (data) => {
        this.user = data;
        this.tokenService.saveToken(data);
=======
    // this.credentials.login = this.loginForm.controls['username'].value;
    // this.credentials.password = this.loginForm.controls['password'].value;

    this.credentials.login = aesUtil.encrypt(key, this.loginForm.controls['username'].value).toString();
    this.credentials.password = aesUtil.encrypt(key, this.loginForm.controls['password'].value).toString();

    this.authService.login(this.credentials).subscribe(
      (response) => {
        this.tokenService.saveToken(JSON.parse(aesUtil.decrypt(key,response.key.toString())) as IToken);
>>>>>>> 37d14d372724acd031f893c0236343c371360e75
        this.tokenService.saveEmail(this.credentials.login);
        this.isLoading.next(false);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
      },
      (error: any) => {
        this.errorMessage = error.error.error[0];
<<<<<<< HEAD
        this.count += this.count
=======
>>>>>>> 37d14d372724acd031f893c0236343c371360e75
        this.isLoginFailed = true;
        this.isLoading.next(false);
      }
    );
  }

}
