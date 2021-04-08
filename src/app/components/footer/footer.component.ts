import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logos: Logo[] = [];
  constructor() { }

  ngOnInit(): void {
    this.logos.push({ src: 'youtube.png', name: 'you tube', href: 'https://youtube.com' })
    this.logos.push({ src: 'linkedin.png', name: 'linked in', href: 'https://www.linkedin.com/company/h1teq' })
    this.logos.push({ src: 'twitter.png', name: 'twitter', href: 'https://twitter.com' })
  }

}

export interface Logo {
  src: string,
  name: string,
  href: string
}
