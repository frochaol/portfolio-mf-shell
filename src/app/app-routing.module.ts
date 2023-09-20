import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	// {
	// 	path: '',
	// 	loadChildren: () =>
	// 		loadRemoteModule({
	// 			type: 'module',
	// 			remoteEntry: 'http://localhost:4201/remoteEntry.js',
	// 			exposedModule: './LoginModule'
	// 		}).then((m) => m.LoginModule)
	// }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
