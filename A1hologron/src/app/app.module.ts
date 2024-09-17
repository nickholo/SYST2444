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
import { HeaderHologronComponent } from './header-hologron/header-hologron.component';
import { HologronAboutComponent } from './hologron-about/hologron-about.component';
import { HologronCountryComponent } from './hologron-country/hologron-country.component';
import { HologronPicsComponent } from './hologron-pics/hologron-pics.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderHologronComponent,
		HologronAboutComponent,
		HologronCountryComponent,
		HologronPicsComponent,
	],
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
