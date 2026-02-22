import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card', // тег которым используем этот компонент в других шаблонах
  standalone: true, // компонент не требует NgModule
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})

export class ProductCard {
  // @Input() означает что данные приходят СНАРУЖИ — из product-list
  // ! означает что поле обязательно будет передано (не undefined)
  @Input() product!: Product;

  // метод генерирует строку со звёздами по рейтингу
  getStars(rating: number): string {
  const rounded = Math.round(rating); // 4.8 → 5
  return '★'.repeat(rounded) + '☆'.repeat(5 - rounded);
}

  // открывает WhatsApp с предзаполненным сообщением и ссылкой на товар
  shareOnWhatsApp(): void {
    const url = `https://wa.me/?text=${encodeURIComponent('Посмотри этот товар: ' + this.product.link)}`;
    window.open(url, '_blank'); // _blank = открыть в новой вкладке
  }

  // открывает Telegram с предзаполненным сообщением и ссылкой на товар
  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  }