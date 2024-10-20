import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl = 'https://localhost:5001/api/transactions';  // Assuming this is your API base URL

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTransactionById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addTransaction(transaction: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, transaction);
  }
}