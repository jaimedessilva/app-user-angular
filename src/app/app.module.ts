import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; /* Componente Principal */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; /* Material Toolbar */
import { MatIconModule } from '@angular/material/icon'; /* Material Icons */
import { MatButtonModule } from '@angular/material/button'; /* material Button */
//import { UserListComponent } from './views/home/user-list/user-list.component'; /*Componente List*/
import { MatSidenavModule } from '@angular/material/sidenav'; /*Material SideNav*/
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component'; /*Material Lista */


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
