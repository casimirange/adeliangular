"use strict";(self.webpackChunkgulfin=self.webpackChunkgulfin||[]).push([[592],{5399:(T,_,r)=>{r.d(_,{a:()=>d});var d=(()=>{return(s=d||(d={})).LOADING_STATE="LOADING_STATE",s.LOADED_STATE="LOADED_STATE",s.ERROR_STATE="ERROR_STATE",d;var s})()},3717:(T,_,r)=>{r.d(_,{ql:()=>d,pv:()=>s});class d{}class s{}},9875:(T,_,r)=>{r.d(_,{v:()=>m});var d=r(205),s=r(2340),l=r(5304),e=r(7716),u=r(1841);let m=(()=>{class o{constructor(t){this.http=t,this.mangwas$=(i,f,h,v)=>this.http.get(s.N.mangwa+`?page=${h}&size=${v}&type=${i}&date=${f}`).pipe((0,l.K)(this.handleError)),this.soldeMangwa$=()=>this.http.get(s.N.mangwa+"/solde").pipe((0,l.K)(this.handleError)),this.addMangwa$=i=>this.http.post(s.N.mangwa,i).pipe((0,l.K)(this.handleError))}handleError(t){return(0,d._)(`Une erreur est survenue: ${t.error.message.toString().bold()}`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(u.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},7874:(T,_,r)=>{r.d(_,{v:()=>m});var d=r(205),s=r(2340),l=r(5304),e=r(7716),u=r(1841);let m=(()=>{class o{constructor(t){this.http=t,this.prets$=(i,f,h,v,A)=>this.http.get(s.N.pret+`?page=${v}&size=${A}&name=${i}&type=${f}&date=${h}`).pipe((0,l.K)(this.handleError)),this.rembourserPret$=(i,f)=>this.http.put(s.N.pret+`/rembourser/${f}`,i).pipe((0,l.K)(this.handleError))}handleError(t){return(0,d._)(`Une erreur est survenue: ${t.error.message}`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(u.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},1824:(T,_,r)=>{r.d(_,{f:()=>m});var d=r(205),s=r(2340),l=r(5304),e=r(7716),u=r(1841);let m=(()=>{class o{constructor(t){this.http=t,this.users$=(i,f,h,v,A,Z,U)=>this.http.get(s.N.users+`/filter?page=${Z}&size=${U}&firstName=${i}&lastName=${f}&typeAccount=${h}&status=${v}&montant=${A}`).pipe((0,l.K)(this.handleError)),this.user$=i=>this.http.get(s.N.users+`/${i}`).pipe((0,l.K)(this.handleError))}getUsers(){return this.http.get(s.N.users)}getUserss(){return this.http.get(s.N.users)}getAllUsersWithPagination(t,i){return this.http.get(s.N.users+`?page=${t}&size=${i}`)}getUser(t){return this.http.get(s.N.users+`/${t}`)}getUsersByTypeAccount(t){return this.http.get(s.N.users+`/typeaccount/${t}`)}enableDesable(t,i){return this.http.get(s.N.users+`/lockAndUnlockAccount/${t}/${i}`)}updateUser(t,i){return this.http.put(s.N.users+`/update/${i}`,t)}changePassword(t,i){return this.http.put(s.N.changePassword+`/${t}/password-update`,i)}handleError(t){return(0,d._)(`Une erreur est survenue: ${t.error.message}`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(u.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},8970:(T,_,r)=>{r.d(_,{c:()=>M});var d=r(3717),s=r(665),l=r(6215),e=r(7716),u=r(1824),m=r(1982),o=r(6974),g=r(8583);function t(a,c){if(1&a&&(e.TgZ(0,"div",19),e.TgZ(1,"div",20),e.TgZ(2,"div",21),e.TgZ(3,"div",22),e._UZ(4,"i",23),e.qZA(),e.TgZ(5,"div"),e._uU(6),e.ALo(7,"titlecase"),e.TgZ(8,"div",24),e._uU(9),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&a){const p=e.oxw();e.xp6(6),e.hij("",e.lcZ(7,2,p.user.firstName)," "),e.xp6(3),e.Oqu(p.user.email)}}function i(a,c){1&a&&(e.TgZ(0,"div",27),e._uU(1," le mot de passe est obligatoire. "),e.qZA())}function f(a,c){1&a&&(e.TgZ(0,"div",27),e._uU(1," au moins 8 caract\xe8res avec 1 minuscule, 1 majuscule et 1 caract\xe8re sp\xe9cial "),e.qZA())}function h(a,c){if(1&a&&(e.TgZ(0,"div",25),e.YNc(1,i,2,0,"div",26),e.YNc(2,f,2,0,"div",26),e.qZA()),2&a){const p=e.oxw();e.xp6(1),e.Q6J("ngIf",null==p.form.password.errors?null:p.form.password.errors.required),e.xp6(1),e.Q6J("ngIf",null==p.form.password.errors?null:p.form.password.errors.pattern)}}function v(a,c){1&a&&(e.TgZ(0,"div",25),e._uU(1," les mots de passe sont diff\xe9rents "),e.qZA())}function A(a,c){1&a&&e._UZ(0,"i",28)}function Z(a,c){1&a&&(e.TgZ(0,"span"),e._uU(1,"Enregistrement..."),e.qZA())}function U(a,c){1&a&&(e.TgZ(0,"span"),e._uU(1,"Modifier"),e.qZA())}let M=(()=>{class a{constructor(p,n,E,P,O){this.userService=p,this.notifsService=n,this.route=E,this.router=P,this.fb=O,this.user=new d.pv,this.pass="",this.confirm_pass="",this.credentials=new d.ql,this.errorMessage="",this.isLoading=new l.X(!1),this.isLoading$=this.isLoading.asObservable(),this.changePwd=this.fb.group({oldpassword:["",[s.kI.required]],password:["",[s.kI.required,s.kI.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+./;:-]).{8,}$")]],cpass:["",[s.kI.required,s.kI.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+./;:-]).{8,}$")]]}),this.form=this.changePwd.controls}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.getUser()}getUser(){const p=this.route.snapshot.paramMap.get("id");this.userService.getUser(p).subscribe(n=>{this.user=n},n=>{this.notifsService.onError(n.error.message,"\xe9chec chargement de l'utilisateur")})}onSubmit(){this.isLoading.next(!0);const p={oldPassword:"string",password:"string"};p.oldPassword=this.changePwd.controls.oldpassword.value,p.password=this.changePwd.controls.password.value;const n=this.route.snapshot.paramMap.get("id");this.userService.changePassword(n,p).subscribe(E=>{console.log(E),this.isLoading.next(!1),localStorage.removeItem("bearerToken"),this.notifsService.onSuccess("mot de passe modifi\xe9"),this.router.navigate(["auth/"])},E=>{this.isLoading.next(!1)})}}return a.\u0275fac=function(p){return new(p||a)(e.Y36(u.f),e.Y36(m.y),e.Y36(o.gz),e.Y36(o.F0),e.Y36(s.qu))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-profile-user"]],decls:37,vars:18,consts:[["class","app-page-title",4,"ngIf"],[1,"tab-content"],["id","tab-content-1","role","tabpanel",1,"tab-pane","tabs-animation","fad","active"],[1,"row"],[1,"col-md-6"],[1,"main-card","mb-3","card"],[1,"card-body"],[1,"card-title"],[1,"align-content-center",3,"formGroup"],[1,"offset-2","col-md-8","offset-2"],[1,"position-relative","form-group"],["id","examplePassword","name","pwd","placeholder","ancien mot de passe","type","password","formControlName","oldpassword",1,"form-control"],["id","newPassword","placeholder","nouveau mot de passe...","type","password","formControlName","password",1,"form-control",3,"ngModel","ngModelChange"],["class","","style","color: #f65656; font-style: italic;",4,"ngIf"],["id","confirm","placeholder","confirmer mot de passe","type","password","formControlName","cpass",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-center"],["type","submit",1,"btn","btn-primary",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[4,"ngIf"],[1,"app-page-title"],[1,"page-title-wrapper"],[1,"page-title-heading"],[1,"page-title-icon"],[1,"pe-7s-user","icon-gradient","bg-danger"],[1,"page-title-subheading"],[1,"",2,"color","#f65656","font-style","italic"],["class","ml-3",4,"ngIf"],[1,"ml-3"],[1,"fa","fa-spinner","fa-spin"]],template:function(p,n){1&p&&(e.YNc(0,t,10,4,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"h5",7),e._uU(8,"Modifier mot de passe"),e.qZA(),e.TgZ(9,"form",8),e.TgZ(10,"div",9),e.TgZ(11,"div",10),e.TgZ(12,"label"),e._uU(13,"Ancien mot de passe"),e.qZA(),e._UZ(14,"input",11),e.qZA(),e.qZA(),e.TgZ(15,"div",9),e.TgZ(16,"div",10),e.TgZ(17,"label"),e._uU(18,"Nouveau mot de passe"),e.qZA(),e.TgZ(19,"input",12),e.NdJ("ngModelChange",function(P){return n.pass=P}),e.qZA(),e.qZA(),e.YNc(20,h,3,2,"div",13),e.qZA(),e.TgZ(21,"div",9),e.TgZ(22,"div",10),e.TgZ(23,"label"),e._uU(24,"Confirmer mot de passe"),e.qZA(),e.TgZ(25,"input",14),e.NdJ("ngModelChange",function(P){return n.confirm_pass=P}),e.qZA(),e.qZA(),e.YNc(26,v,2,0,"div",13),e.qZA(),e.TgZ(27,"div",15),e.TgZ(28,"button",16),e.NdJ("click",function(){return n.onSubmit()}),e.ALo(29,"async"),e.YNc(30,A,1,0,"i",17),e.ALo(31,"async"),e._uU(32,"\xa0 "),e.YNc(33,Z,2,0,"span",18),e.ALo(34,"async"),e.YNc(35,U,2,0,"span",18),e.ALo(36,"async"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&p&&(e.Q6J("ngIf",n.user),e.xp6(9),e.Q6J("formGroup",n.changePwd),e.xp6(10),e.Q6J("ngModel",n.pass),e.xp6(1),e.Q6J("ngIf",n.form.password.invalid&&(n.form.password.dirty||n.form.password.touched)),e.xp6(5),e.Q6J("ngModel",n.confirm_pass),e.xp6(1),e.Q6J("ngIf",n.confirm_pass!==n.pass&&(n.form.cpass.dirty||n.form.cpass.touched)),e.xp6(2),e.Q6J("disabled",n.changePwd.invalid||n.confirm_pass!==n.pass||e.lcZ(29,10,n.isLoading$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(31,12,n.isLoading$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(34,14,n.isLoading$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(36,16,n.isLoading$)))},directives:[g.O5,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u],pipes:[g.Ov,g.rS],styles:[""]}),a})()}}]);