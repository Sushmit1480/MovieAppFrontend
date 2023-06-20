import { TestBed } from '@angular/core/testing';
import { LoginGuard } from './login.guard';


describe('LoginGuardGuard', () => {
  let guard: LoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});


// import { TestBed } from '@angular/core/testing';
// import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { LoginGuardGuard } from './login-guard.guard';

// describe('LoginGuardGuard', () => {
//   let guard: LoginGuardGuard;
//   let router: Router;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [LoginGuardGuard, { provide: Router, useClass: RouterStub }]
//     });

//     guard = TestBed.inject(LoginGuardGuard);
//     router = TestBed.inject(Router);
    
//   });

//   it('should allow access if user is logged in', () => {
//     spyOn(localStorage, 'getItem').and.returnValue('user');
//     spyOn(router, 'navigateByUrl');

//     const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
//     const state: RouterStateSnapshot = {} as RouterStateSnapshot;

//     const result = guard.canActivate(route,state);
//     expect(result).toBe(true);

//   });

//   it('should deny access and navigate to login if user is not logged in', () => {
//     spyOn(localStorage, 'getItem').and.returnValue(null);
//     spyOn(router, 'navigateByUrl');

//     const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
//     const state: RouterStateSnapshot = {} as RouterStateSnapshot;

//     const result = guard.canActivate(route,state);
//     expect(result).toBe(false);
//   });
// });

// Stub for Router
class RouterStub {
  navigateByUrl(url: string) {
    return url;
  }
}