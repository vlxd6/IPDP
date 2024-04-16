import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {ElementRef, ViewChild, AfterViewInit, Inject, Renderer2, VERSION } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild('helloModal') helloEl?: ElementRef;
  modal?: bootstrap.Modal;
  ngAfterViewInit() {
    this.modal = new bootstrap.Modal(this.helloEl?.nativeElement, {});
  }
 
  trigger() {
    this.modal?.toggle();
  }

  name = 'Angular ' + VERSION.major;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    protected renderer: Renderer2
  ) {
    this.renderer.setStyle(document.body, 'overflow-x', 'hidden');
  }
}