import { Component, AfterViewInit, ElementRef, ViewChild, Inject, Renderer2, VERSION } from '@angular/core';
import { AuthService } from '../auth.service';
import * as bootstrap from 'bootstrap';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  @ViewChild('helloModal') helloEl?: ElementRef;
  modal?: bootstrap.Modal;

  name = 'Angular ' + VERSION.major;
  data: any;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    protected renderer: Renderer2,
    private authService: AuthService 
  ) {
    this.renderer.setStyle(document.body, 'overflow-x', 'hidden');
  }

  ngAfterViewInit() {
    this.modal = new bootstrap.Modal(this.helloEl?.nativeElement, {});
  }

  trigger() {
    this.modal?.toggle();
  }


}
