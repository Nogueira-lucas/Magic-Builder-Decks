import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'img[default]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(error)' : 'updateUrl()',
    '(load)' : 'load()',
    '[src]' : 'src'
   }
})
export class ImagePreloadDirective {
  @Input() src: string;
  @HostBinding('class') className;
  @Input() default: string;

  constructor() { }

  updateUrl() {
    this.src = this.default;
  }
  load() {
    this.className = 'image-loaded';
  }

}
