import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.scroll()
  }

  scroll(){
    gsap.from('.project',{
      scrollTrigger:{
          trigger: '.project',
          start: "top center"
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: .6
  })
  }
}
