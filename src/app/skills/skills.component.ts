import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.scroll();
  }

  scroll(): void{
       
    gsap.from('.transition2',{
        scrollTrigger:{
            trigger: '.transition2',
            start: "top bottom"
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: .3
    })
  }

  toContact(){
    document.getElementById("contact")?.scrollIntoView();
  }
}
