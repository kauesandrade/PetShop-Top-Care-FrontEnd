import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../../interfaces/contact/contact';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = `${environment.apiBaseUrl}/topcare/contact`;

  constructor(private httpClient: HttpClient) {}

  getContactById(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.apiUrl}/${id}`);
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(this.apiUrl, contact);
  }

  editContact(id: number, contact: Contact): Observable<Contact> {
    return this.httpClient.put<Contact>(`${this.apiUrl}/${id}`, contact);
  }

  deleteContact(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
