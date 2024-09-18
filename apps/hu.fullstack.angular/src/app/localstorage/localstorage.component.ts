import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-localstorage',
  standalone: true,
  imports: [],
  templateUrl: './localstorage.component.html',
})
export class LocalstorageComponent {
  readonly #window = inject(DOCUMENT).defaultView;

  constructor() {
    this.#window?.addEventListener('storage', (event) => {
      if (event.storageArea === localStorage) {
        console.log('catch event: ', event);
      }
    });
  }

  protected onClickOpenNewTab() {
    this.#window?.open('http://localhost:4200/#/localstorage', '_blank');
  }

  protected onClickSendEvent() {
    this.#window?.localStorage.setItem('myEvent', 'event value');
  }
}
