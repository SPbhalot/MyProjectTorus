import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomeTorusPageRoutingModule } from './welcome-torus-routing.module';

import { WelcomeTorusPage } from './welcome-torus.page';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeTorusPageRoutingModule
  ],
  declarations: [WelcomeTorusPage,HeaderComponent]
})
export class WelcomeTorusPageModule {}
export class HeaderComponentModule{}
