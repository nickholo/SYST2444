import { NgModule } from '@angular/core';
import {
	BrowserModule,
	provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './modules/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HologronPersonalComponent } from './hologron-personal/hologron-personal.component';
import { HologronInfoComponent } from './hologron-info/hologron-info.component';

@NgModule({
	declarations: [AppComponent, HologronPersonalComponent, HologronInfoComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MaterialModule,
		ReactiveFormsModule,
		FormsModule,
	],
	providers: [provideClientHydration(), provideAnimationsAsync()],
	bootstrap: [AppComponent],
})
export class AppModule {}
