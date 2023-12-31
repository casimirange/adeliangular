import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../_services/auth.service";
import {TokenService} from "../../../_services/token/token.service";
import {NotifsService} from "../../../_services/notifications/notifs.service";
import {Router} from "@angular/router";
import {BnNgIdleService} from "bn-ng-idle";
import {BehaviorSubject, Subscription} from "rxjs";


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit, OnDestroy{

  otp!: string;
  inputDigitLeft: string = "Entrer le code";
  btnStatus: string = "btn-light";
  timer: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  sendNewVerifyCode: boolean = false;
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();
  userEmail: string = localStorage.getItem('email').toString()
  newOtp = {
    appProvider: '',
    email: ''
  }
  firstName: string | null = '';
  public configOptions = {
    length: 5,
    inputClass: 'digit-otp',
    containerClass: 'd-flex justify-content-between'
  }

  private mySubscription: Subscription
  constructor(private authService: AuthService, private token: TokenService, private notifService: NotifsService,
              private router: Router) {
  }

  ngOnInit() {
    this.setTimer()
  }

  setTimer(){
    //on fait un décompte de 5 minutes pour entrer le code otp
    const date = Date.parse(localStorage.getItem('exp').toString())
    const date1 = new Date()
    this.timer = (date - date1.getTime())/1000
    setInterval(() => {
      if(this.timer > 0) {
        this.timer--;
        this.minutes = parseInt(((this.timer % 3600) / 60).toString());
        this.seconds = this.timer % 60;
      } else {
        this.sendNewVerifyCode = true
        this.inputDigitLeft = "Reconnexion";
        this.btnStatus = 'btn-danger';
      }
    },1000)
  }

  onOtpChange(event: any) {
    this.otp = event;
    if(this.otp.length < this.configOptions.length) {
      this.inputDigitLeft = this.configOptions.length - this.otp.length + `${(this.configOptions.length - this.otp.length) > 1 ? " caractères restants" : ' caractère restant'}`;
      this.btnStatus = 'btn-light';
    }

    if(this.otp.length == this.configOptions.length) {
      this.inputDigitLeft = "Vérifier le code";
      this.btnStatus = 'btn-primary';
    }
  }

  verifyOtp(){
    this.isLoading.next(true);
    this.inputDigitLeft = 'Vérification ...'
      this.authService.verifyOtp(this.otp).subscribe(
        (resp) => {
          this.isLoading.next(false);
          this.token.saveRefreshToken(resp.refreshToken);
          this.token.saveAuthorities(resp.roles)
          this.token.saveUserInfo(resp.user)
          this.firstName = localStorage.getItem('firstName')
          this.notifService.onSuccess(`Bienvenue ${this.firstName}`)
        }, (error) => {
          this.isLoading.next(false);
          // this.inputDigitLeft = "Reéssayer";
          // this.btnStatus = 'btn-danger';
          this.isLoading.next(false);
          this.token.clearTokenExpired()
        }
      )
  }

  reconnect(){
    this.token.clearTokenExpired();
    // this.newOtp.appProvider = '';
    // this.newOtp.email = localStorage.getItem('email').toString();
    // this.authService.newOtpCode(this.newOtp).subscribe(
    //   (resp) => {
    //     // this.token.saveRefreshToken(resp.refreshToken);
    //     // this.token.saveAuthorities(resp.roles)
    //     // this.token.saveUserInfo(resp.user)
    //     // console.log(resp)
    //     this.sendNewVerifyCode = false;
    //     this.setTimer()
    //     this.token.saveToken(resp);
    //     this.notifService.onSuccess(`Nouveau code envoyé`)
    //     //
    //   }, (error) => {
    //     console.log('error', error)
    //     this.inputDigitLeft = "Vérifier";
    //     this.btnStatus = 'btn-danger';
    //     // this.notifService.onError(error.error.message, 'échec de connexion')
    //   }
    // )
  }

  ngOnDestroy(): void {
    this.mySubscription ? this.mySubscription.unsubscribe() : null
  }

}
