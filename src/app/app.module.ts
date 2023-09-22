import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { getManifest } from '@angular-architects/module-federation';
import { RouterModule } from '@angular/router';
import { CustomManifest } from 'src/util/config';
import { build } from '../util/routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';

const manifest = getManifest<CustomManifest>();
const routes = build(manifest); // Return an Router[] type object

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, RouterModule.forRoot(routes), AppRoutingModule, LayoutComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
