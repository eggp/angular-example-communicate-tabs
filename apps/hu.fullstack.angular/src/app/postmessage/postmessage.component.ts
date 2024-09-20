import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-postmessage',
  standalone: true,
  imports: [],
  templateUrl: './postmessage.component.html',
})
export class PostmessageComponent {
  readonly #window = inject(DOCUMENT).defaultView;
  #openedWindow: WindowProxy | null | undefined;

  constructor() {
    this.#window?.addEventListener(
      'message',
      (event) => {
        if (event.origin == this.#window?.location?.origin) {
          console.log('catch event: ', event);
        }
        // Do something
      },
      false
    );
  }

  protected onClickOpenNewTab() {
    this.#openedWindow = this.#window?.open(
      'http://localhost:4200/#/postmessage',
      '_blank'
    );
    // TODO handle popup blocker
    setTimeout(() => {
       this.#openedWindow?.postMessage(
        'message',
        this.#window?.location?.origin ?? 'default origin'
      );
    }, 5000);
  }
}
