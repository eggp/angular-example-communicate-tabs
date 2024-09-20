import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-broadcast',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './broadcast.component.html',
})
export class BroadcastComponent {
  readonly #window = inject(DOCUMENT).defaultView;
  readonly #broadcast = new BroadcastChannel('channel-name');

  readonly form = new FormGroup({
    eventContent: new FormControl('', { nonNullable: true }),
  });

  constructor() {
    this.#broadcast.addEventListener('message', (event) => {
      console.log('catch broadcast event: ', event.data);
      // this.#window?.close()
    });
  }

  protected onClickOpenNewTab() {
    this.#window?.open('http://localhost:4200/#/broadcast', '_blank');
  }

  protected onSubmit() {
    this.#broadcast.postMessage(this.form.value);
  }
}
