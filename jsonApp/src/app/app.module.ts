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
import { JsonTableComponent } from './json-table/json-table.component';
import { JsonSelectComponent } from './json-select/json-select.component';

@NgModule({
	declarations: [AppComponent, JsonTableComponent, JsonSelectComponent],
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
