import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'shared-layout',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
	public openMenu() {
		const logo = document.querySelector('#nav-logo');
		const menuItems = document.querySelector('#menu');
		const menuButtonSpans = document.querySelectorAll('#menu-button span');

		menuItems?.classList.toggle('hidden');
		logo?.classList.toggle('hidden');

		menuButtonSpans.forEach((span) => {
			span.classList.toggle('animado');
		});
	}
}
