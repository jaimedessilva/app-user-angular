import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; /* Componente Principal */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; /* Material Toolbar */
import { MatIconModule } from '@angular/material/icon'; /* Material Icons */
import { MatButtonModule } from '@angular/material/button'; /* material Button */
import { MatSidenavModule } from '@angular/material/sidenav'; /*Material SideNav*/
import { MatListModule } from '@angular/material/list'; /*Lista */
import { HeaderComponent } from './templates/header/header.component'; /* Header */
import { FooterComponent } from './templates/footer/footer.component'; /* Footer */


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
