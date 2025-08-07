import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
isMobile: boolean = false;
dropDown: boolean = false;

ngOnInit(){
  this.checkView();
}


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkView();
  }
checkView(){
this.isMobile = window.innerWidth<770;
if(!this.isMobile){
  this.dropDown = false;
}

}

toggleDropdown(){
  this.dropDown = !this.dropDown;
}


}
