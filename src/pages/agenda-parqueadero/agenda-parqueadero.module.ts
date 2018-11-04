import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaParqueaderoPage } from './agenda-parqueadero';

@NgModule({
  declarations: [
    AgendaParqueaderoPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaParqueaderoPage),
  ],
})
export class AgendaParqueaderoPageModule {}
