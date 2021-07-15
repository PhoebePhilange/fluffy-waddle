import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }
  toHome(){
    document.getElementById("home")?.scrollIntoView();
  }
  toSkills(){
    document.getElementById("skills")?.scrollIntoView();
  }
  toWorks(){
    document.getElementById("works")?.scrollIntoView();
  }
  toContact(){
    document.getElementById("contact")?.scrollIntoView();
  }
}
