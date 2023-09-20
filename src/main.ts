// import('./bootstrap')
// 	.catch(err => console.error(err));
import { loadManifest } from '@angular-architects/module-federation';
import { environment } from './environments/env-container';

loadManifest(environment.manifest)
	.catch((err) => console.error(err))
	.then((_) => import('./bootstrap'))
	.catch((err) => console.error(err));
