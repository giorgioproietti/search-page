import { Injectable, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class FullscreenService {

  private get fullscreenEnabled(): boolean {
    const doc: any = this.document;
    return this.document.fullscreenEnabled || doc.mozFullScreenEnabled || doc.webkitFullscreenEnabled || doc.msFullscreenEnabled;
  }

  private get isFullscreen(): boolean {
    const doc: any = this.document;
    return doc.fullscreen || doc.mozFullScreen || doc.webkitIsFullScreen || !!doc.msFullscreenElement;
  }

  private get fullscreenElement(): Element {
    const doc: any = this.document;
    return this.document.fullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  /**
   * Shows the element full screen with the Fullscreen API.
   * @returns Observable that emits the element fullscreened and completes when fullscreen is exited.
   */
  public fullscreen(element: Element): Observable<Element> {
    return Observable.create((observer: Observer<any>) => {

      const errorFn = event => {
        observer.error(event);
      };
      const changeFn = event => {
        if (this.fullscreenElement) {
          observer.next(this.fullscreenElement);
        }
        if (!this.isFullscreen) {
          observer.complete();
        }
      };

      this.document.addEventListener('fullscreenerror', errorFn);
      this.document.addEventListener('mozfullscreenerror', changeFn);
      this.document.addEventListener('webkitfullscreenerror', changeFn);
      this.document.addEventListener('msfullscreenerror', changeFn);

      this.document.addEventListener('fullscreenchange', changeFn);
      this.document.addEventListener('mozfullscreenchange', changeFn);
      this.document.addEventListener('webkitfullscreenchange', changeFn);
      this.document.addEventListener('msfullscreenchange', changeFn);

      if (this.fullscreenEnabled) {
        this.requestFullscreen(element);
      } else {
        observer.error('fullscreen not enabled or supported.');
      }

      // clean up and exit
      return () => {
        this.document.removeEventListener('fullscreenerror', errorFn);
        this.document.removeEventListener('mozfullscreenerror', changeFn);
        this.document.removeEventListener('webkitfullscreenerror', changeFn);
        this.document.removeEventListener('msfullscreenerror', changeFn);

        this.document.removeEventListener('fullscreenchange', changeFn);
        this.document.removeEventListener('mozfullscreenchange', changeFn);
        this.document.removeEventListener('webkitfullscreenchange', changeFn);
        this.document.removeEventListener('msfullscreenchange', changeFn);

        this.exitFullscreen();
      }
    });
  }

  /**
   * Requests fullscreen for browser.
   */
  private requestFullscreen(element: Element): void {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    } else if ((element as any).mozRequestFullScreen) {
      (element as any).mozRequestFullScreen();
    } else if ((element as any).msRequestFullScreen) {
      (element as any).msRequestFullScreen();
    }
  }

  /**
   * Exits fullscreen for browser.
   */
  private exitFullscreen(): void {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if ((this.document as any).mozCancelFullScreen) {
      (this.document as any).mozCancelFullScreen();
    } else if ((this.document as any).webkitCancelFullScreen) {
      (this.document as any).webkitCancelFullScreen();
    } else if ((this.document as any).msExitFullscreen) {
      (this.document as any).msExitFullscreen();
    }
  }

}
