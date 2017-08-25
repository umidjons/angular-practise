import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { states, Address, Hero } from '../data-model';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {
  
  heroForm: FormGroup;
  states = states;
  nameChangeLog: string[] = [];

  @Input()
  hero: Hero;
  
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.logNameChange();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  removeLair(idx) {
    this.secretLairs.removeAt(idx);
  }

  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach((value: string) => this.nameChangeLog.push(value));
  }
}
