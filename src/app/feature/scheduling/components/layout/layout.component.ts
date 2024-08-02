import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SchedulingService } from 'src/app/shared/services/scheduling/scheduling.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Output() continue = new EventEmitter();

  constructor(
    private router: Router,
    private schedulingService: SchedulingService
  ) {}

  ngOnInit(): void {}

  isNotConfirmationPage() {
    return !this.router.url.includes('confirmacao');
  }

  onCancel() {
    this.schedulingService.cancelScheduling();
  }

  onContinue() {
    this.continue.emit();
  }
}
