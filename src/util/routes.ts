import { loadRemoteModule } from '@angular-architects/module-federation';
import { Route, Routes } from '@angular/router';
import { LayoutComponent } from '../app/shared/layout/layout.component';
import { CustomManifest } from './config';

export function build(options: CustomManifest): Routes {
	const routes: Routes = [buildRoutes(options)];
	// Return routes of tipe Routes in order to don't have issues with the type in the app.module routing.
	return routes;
}

export function buildRoutes(options: CustomManifest): Route {
	const routes: Route = {
		path: '',
		component: LayoutComponent,
		children: Object.keys(options).map((key) => {
			const entry = options[key];

			return {
				path: entry.routePath,
				[entry.isStandalone ? 'loadComponent' : 'loadChildren']: () =>
					loadRemoteModule({
						type: 'manifest',
						remoteName: key,
						exposedModule: entry.exposedModule
					}).then((m) => m[entry.ngModuleName])
			};
		})
	};

	return routes;
}
