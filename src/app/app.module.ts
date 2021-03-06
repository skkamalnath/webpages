import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ImageZoomModule }      from 'angular2-image-zoom';
import {Table1Module} from './home/table1/table1.module';
import {Table2Module} from './home/table2/table2.module';
import {Table3Module} from './home/table3/table3.module';
import {Table4Module} from './home/table4/table4.module';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent }          from './app.component';
import { HomeComponent }    from './home/home.component';
import { Table1Component }    from './home/table1/table1.component';
import { Table2Component }    from './home/table2/table2.component';
import { Table3Component }    from './home/table3/table3.component';
import { Table4Component }    from './home/table4/table4.component';
import { AboutUsComponent }     from './about/about-us.component';
import { RegisterComponent }     from './register/register.component';
import { ContactComponent }     from './contact/contact.component';
import { AsideComponent } from './aside/aside.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './not-found.component';
import { CarouselComponent } from './about/carousel/carousel.component';
import { NgClassComponent } from './about/ng/ng-class.component';
import { NgIfComponent } from './about/ng/ng-if.component';
import { NgForComponent } from './about/ng/ng-for.component';
import { NgShowComponent } from './about/ng/ng-show.component';
import { NgSwitchComponent } from './about/ng/ng-switch.component';
import { NgStyleComponent } from './about/ng/ng-style.component';

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
    Table1Module,
    Table2Module,
    Table3Module,
    Table4Module,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCnbM7ZeWNqbISqW4RPktimSWNdXZR_21s'
  })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    RegisterComponent,
    ContactComponent,
    AsideComponent,
    LoginComponent,
    PageNotFoundComponent,
    CarouselComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent,
    NgShowComponent,
    NgSwitchComponent,
    NgStyleComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
