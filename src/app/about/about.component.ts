import { Component, OnInit } from '@angular/core';
import { Container, Main } from 'ng-particles';
import { ISourceOptions } from 'tsparticles';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id = "tsparticles";
  
  constructor() { }

  ngOnInit(): void {
  }
 

  toAbout(){
    document.getElementById("skills")?.scrollIntoView();
}

  particlesOptions: ISourceOptions = {
    background: {
        color: {
            value: "#252934"
        }
    },
    fpsLimit: 60,
    interactivity: {
        detectsOn: "canvas",
        events: {
            onClick: {
                enable: true,
                mode: "push"
            },
            onHover: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: "#F4ECE6"
        },
        links: {
            color: "#F4ECE6",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false
        },
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 60
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            random: true,
            value: 5
        }
    },
    detectRetina: true
};

particlesLoaded(container: Container): void {
  console.log(container);
}

particlesInit(main: Main): void {
  console.log(main);
  
  // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
}
}
