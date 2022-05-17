import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './components/book-cart/product-list/model/books.model';

@Pipe({
  name: 'filterBook'
})
export class FilterPipe implements PipeTransform {

  transform(books: Book[], filterMinPrice: number, filterMaxPrice: number) {
    if (books.length === 0 || filterMinPrice === 0 || filterMaxPrice === 0) {
      return books;
    } else {
      return books.filter((book) => {
        return book.price >= filterMinPrice && book.price <= filterMaxPrice
      })
    }
  }
 
}

// @Pipe({
//   name: 'filterBook'
// })
// export class FilterPipe implements PipeTransform {

//   transform(books: Book[], filterText: string) {
//     if (books.length === 0 || filterText === '') {
//       return books;
//     } else {
//       return books.filter((book) => {
//         return book.category.toLocaleLowerCase() === filterText.toLocaleLowerCase()
//       })
//     }
//   }
 
// }
