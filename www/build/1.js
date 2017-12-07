webpackJsonp([1],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, formBuilder, dp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.dp = dp;
        this.errorMessage = null;
        this.authForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-z0-9._]+@[A-Za-z0-9._-]+\\.[a-z]{2,3}')])],
            parishId: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]{4}')])],
            //parishId: ['', Validators.compose([Validators.required, Validators.pattern('^\d{4}')])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4)])],
            cPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4)]), this.comparePassword]
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.comparePassword = function (group) {
        return new Promise(function (resolve, reject) {
            if (group.parent.getRawValue().cPassword === group.parent.getRawValue().password) {
                //group.parent.controls.cPassword.setErrors({"notUnique":false});
                //group.parent.controls.password.setErrors(null);
                resolve(null);
            }
            else {
                //group.parent.controls.cPassword.setErrors({"notUnique":true});
                // group.parent.controls.password.setErrors({"notUnique":true});
                resolve({ "notUnique": true });
            }
        });
    };
    RegisterPage.prototype.onSubmit = function (value) {
        var _this = this;
        this.dp.registerUser(value).then(function (resp) {
            _this.errorMessage = "successfully registred";
            window.setTimeout(function () {
                _this.errorMessage = null;
                _this.navCtrl.setRoot("HomePage");
            }, 2000);
        }, function (error) {
            //this.resetForm(this.authForm);
            _this.errorMessage = error.message;
            window.setTimeout(function () {
                _this.errorMessage = null;
            }, 2000);
        });
    };
    RegisterPage.prototype.resetForm = function (formGroup) {
        var control = null;
        formGroup.reset();
        formGroup.markAsUntouched();
        Object.keys(formGroup.controls).forEach(function (name) {
            control = formGroup.controls[name];
            //control.setErrors(null);
            formGroup.controls[name].value = "";
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/jose/Developments/JVM/SQM/dev/catechism/devApp/src/pages/auth/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="authContainer">\n    <div class="verticalCenter" padding>\n      <ion-item *ngIf="errorMessage">\n        <span class="error">{{errorMessage}}</span>\n      </ion-item>\n      <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n        <ion-item [ngClass]="{\'error-border\':!authForm.controls.parishId.valid}">\n          <ion-label floating>Parish Identification Number</ion-label>\n          <ion-input formControlName="parishId" type="parishId"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.parishId.hasError(\'required\') && authForm.controls.parishId.touched">\n          <p>Parish Identification Number is required!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.parishId.hasError(\'minlength\') && authForm.controls.parishId.touched">\n          <p>Incorrect Parish Identification Number</p>\n        </ion-item>\n        <ion-item [ngClass]="{\'error-border\':!authForm.controls.email.valid && authForm.controls.email.touched}">\n          <ion-label floating>E-Mail Address</ion-label>\n          <ion-input formControlName="email" type="email"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n          <p>E-Mail address required!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.email.hasError(\'pattern\') && authForm.controls.email.touched">\n          <p>Invalid E-Mail address</p>\n        </ion-item>\n        <ion-item [ngClass]="{\'error-border\':(!authForm.controls.password.valid) && authForm.controls.password.touched}">\n          <ion-label floating>Password</ion-label>\n          <ion-input formControlName="password" type="password"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n          <p>Password is required!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n          <p>Minimum password length is 4!</p>\n        </ion-item>\n        <!-- <ion-item *ngIf="authForm.controls.password.hasError(\'notUnique\') && authForm.controls.password.touched">\n          <p>Password and  Confirm Password Not matching!</p>\n        </ion-item> -->\n        <ion-item [ngClass]="{\'error-border\':(!authForm.controls.cPassword.valid) && authForm.controls.cPassword.touched}">\n          <ion-label floating> Confirm Password</ion-label>\n          <ion-input [disabled]="!authForm.controls.password.valid" formControlName="cPassword" type="password"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.cPassword.hasError(\'required\') && authForm.controls.cPassword.touched">\n          <p>Confirm Password is required!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.cPassword.hasError(\'minlength\') && authForm.controls.cPassword.touched">\n          <p>Minimum Confirm Password length is 4!</p>\n        </ion-item>\n        <!-- <ion-item *ngIf="authForm.controls.cPassword.hasError(\'notUnique\') && authForm.controls.cPassword.touched">\n          <p>Password and  Confirm Password Not matching!</p>\n        </ion-item> -->\n        <button ion-button full color="primary" [disabled]="!authForm.valid" style="margin-top: 20px;" type="submit">Submit</button>\n      </form><!-- \n      <button (click)="onSubmit({email:\'jose.varanam@squintmetrics.com\', password:\'Sqm12345\', parishId:1234})">tempSub</button> -->\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Developments/JVM/SQM/dev/catechism/devApp/src/pages/auth/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]) === "function" && _d || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=1.js.map