import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Address } from '../../interfaces/user/address';
import { User } from '../../interfaces/user/user';
import { CartService } from '../../services/cart/cart.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-choose-address-modal',
  templateUrl: './choose-address-modal.component.html',
  styleUrls: ['./choose-address-modal.component.scss']
})
export class ChooseAddressModalComponent implements OnInit, OnChanges {

  user: User | null = null
  address!: Address;

  faX = faTimes;

  addressOpen = false;

  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  constructor(private userService: UserService, 
    private cartService: CartService) {
  }

  ngOnInit(): void {
    this.user = this.userService.loggedUser
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen();
  }

  changeInputRadio(evt: Address) {
    this.address = evt;
  }

  isOpen() {
    if (this.open) {
      document.body.style.overflow = 'hidden';
      this.modal.nativeElement.showModal();
    }
  }

  onCancel(e: Event) {
    e.preventDefault();
    this.closeModal();
  }

  closeModal() {
    this.modal.nativeElement.close();
    this.open = false;
    this.openChange.emit(this.open);
    document.body.style.overflow = 'auto';
  }

  onSubmit() {
    this.cartService.setAddress(this.address);
    this.closeModal();
  }

  addAddress(evt: Address){
    this.user?.addresses.push(evt);
    this.userService.updateUser(this.user!);
  }
}
