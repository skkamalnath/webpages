import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ImageZoomModule }      from 'angular2-image-zoom';
import {DemoModule} from './demo/demo.module';

import { AppComponent }          from './app.component';
import { HomeComponent }    from './home/home.component';
import { DemoComponent }    from './demo/demo.component';
import { AboutUsComponent }     from './about/about-us.component';
import { RegisterComponent }     from './register/register.component';
import { ContactComponent }     from './contact/contact.component';
import { AsideComponent } from './aside/aside.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ImageZoomModule,
    DemoModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    RegisterComponent,
    ContactComponent,
    AsideComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
