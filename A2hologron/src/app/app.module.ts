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
import { FooterHologronComponent } from './footer-hologron/footer-hologron.component';
import { BooksHologronComponent } from './books-hologron/books-hologron.component';
import { CampusHologronComponent } from './campus-hologron/campus-hologron.component';

@NgModule({
	declarations: [AppComponent, HeaderHologronComponent, FooterHologronComponent, BooksHologronComponent, CampusHologronComponent],
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
