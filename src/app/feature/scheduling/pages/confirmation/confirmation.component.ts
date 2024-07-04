import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/shared/interfaces/schedule/schedule';
import { SchedulingService } from 'src/app/shared/services/scheduling/scheduling.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  constructor(public schedulingService: SchedulingService) {}

  ngOnInit(): void {}
}
