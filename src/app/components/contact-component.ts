import { Component, OnInit } from "@angular/core";
import { ContactService } from "../services/contact-service";

@Component({
  selector: 'contact-component',
  templateUrl: 'contact-component.html',
  styleUrls: ['contact-component.scss']
  // providers: [ContactService]
})

export class ContactComponent implements OnInit {
  name: string = '';
  phone: Number | undefined = undefined;
  address: string = '';
  email: string = '';
  birthDate: Date | undefined = undefined;
  frequency: Frequency | undefined = undefined
  openForNotifications: boolean = true;
  forGroups: boolean | undefined;
  forJesus: boolean | undefined;
  questionsForLeader: boolean | undefined;
  openForVisit: boolean | undefined;

  constructor(public contactService: ContactService) {
  }

  ngOnInit() {
    
  }

  public sendContactForm() {
    let obj = {
      Name: this.name,
      Phone: this.phone,
      Address: this.address,
      Email: this.email,
      BirthDate: this.birthDate,
      Frequency: this.frequency,
      OpenForNotifications: this.openForNotifications,
      ForGroups: this.forGroups,
      ForJesus: this.forJesus,
      QuestionsForLeader: this.questionsForLeader,
      OpenForVisit: this.openForVisit
    }
    this.contactService.sendContactForm(obj).subscribe((res: boolean) => { });
  }
}

export enum Frequency {
  FirstTime = 1,
  SecondTime,
  SomeTimes,
  Frequent,
  AlreadyMember
}