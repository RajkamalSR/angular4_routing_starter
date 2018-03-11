import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { AboutpageComponent } from './modules/aboutpage/aboutpage.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './modules/notfound/notfound.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AboutpageComponent,
    NotfoundComponent
  ],
  imports: [

    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: AboutpageComponent
      },
      {
        path: '**',
        component: NotfoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
