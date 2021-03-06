import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';

/**              elementos de angular material        */
import { MaterialModule } from './app.material';

/**                    AngularMaps                    */
import { AgmCoreModule } from '@agm/core';

/**                   AngularFire2                    */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/enviroment_firebase';

/**                    componentes                    */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SlidenavComponent } from './components/shared/slidenav/slidenav.component';
import { SlideinfoComponent } from './components/shared/slideinfo/slideinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlidenavComponent,
    SlideinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AngularFireStorageModule,
    AngularFireModule.initializeApp( environment.firebase ),
    //Activar la facturación de google maps para poder usar el API // AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
