import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

interface Comp {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  name!: '';
  description!: '';
  button!: '';
  comp!: '';
  date!: number;
  image!: '';
  tags!: '';
  message!: '';

  products: any;

  comps: Comp[] = [
    { value: 'Monitor-0', viewValue: 'Monitor' },
    { value: 'CPU-1', viewValue: 'CPU' },
    { value: 'UPS-2', viewValue: 'UPS' },
    { value: 'Laptop-3', viewValue: 'Laptop' },
    { value: 'Keyboard-4', viewValue: 'Keyboard' },
    { value: 'Mouse-5', viewValue: 'Mouse' },
  ];

  constructor(private dataService: DataService) {
    this.dataService.products().subscribe((data) => {
      this.products = data;
    });
  }

  getUserFormData(data: any) {
    console.warn(data);
    this.dataService.saveProduct(data).subscribe((result) => {
      console.warn(result);
    });
  }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
}
