import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
export interface PeriodicElement {
  name: string;
  position: number;
  description: string;
  state: string;
  category: string;
  date: number;
  img: string;
  tag: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    description: 'first',
    state: 'New',
    category: 'Laptop',
    date: 1635842615,
    img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    tag: '"HP", "LAPTOP"',
  },
  {
    position: 2,
    name: 'Helium',
    description: 'second',
    state: 'Refurbish',
    category: 'UPS',
    date: 1635842615,
    img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    tag: '"HP", "LAPTOP"',
  },
];

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  data = '';
  displayedColumns: string[] = [
    'position',
    'name',
    'description',
    'state',
    'category',
    'date',
    'img',
    'tag',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  generatePDF() {
    let docDefinition = {
      header: 'C#Corner PDF Header',
      content:
        'Sample PDF generated with Angular and PDFMake for C#Corner Blog',
    };

    pdfMake.createPdf(docDefinition).open();
  }

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.router.snapshot.params);
    this.data = this.router.snapshot.params['id'];
  }
}
