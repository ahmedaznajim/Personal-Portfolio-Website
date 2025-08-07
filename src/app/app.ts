import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./nav/nav";
import { AboutMe } from "./about-me/about-me";
import { Experience } from "./experience/experience";
import { Projects } from "./projects/projects";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, AboutMe, Experience, Projects, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'personal';
}
