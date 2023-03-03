import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { authGuard } from './utils/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';

// type Routes = Route[];
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', canActivate:[authGuard], data: { preload: true }, loadChildren: () => import('./modules/product/product.module').then( m => m.ProductModule) },
  { path: '**', component: NotFoundComponent },
];

export class PreloadTaggedModuleStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
      return route.data && route.data['preload'] ? load() : of(null);
    }
}

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      // preloadingStrategy: PreloadAllModules
      preloadingStrategy: PreloadTaggedModuleStrategy
      // ngx-quicklink lib
    }

  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
