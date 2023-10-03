import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-primeiroacesso',
  templateUrl: './primeiroacesso.page.html',
  styleUrls: ['./primeiroacesso.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class PrimeiroacessoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
