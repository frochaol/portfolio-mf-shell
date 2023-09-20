import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { getManifest } from '@angular-architects/module-federation';
import { RouterModule } from '@angular/router';
import { CustomManifest } from 'src/util/config';
import { buildRoutes } from '../util/routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const manifest = getManifest<CustomManifest>();
const routes = buildRoutes(manifest);

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, RouterModule.forRoot(routes), AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
