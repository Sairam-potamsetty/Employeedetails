import { Component } from '@angular/core';
import { Sbipayment } from '../../Services/Sbipayment.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface PaymentDetails {
  amount: number;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './SbiPayment.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class SbiPaymentComponent {
  paymentdetails: PaymentDetails = { amount: 100, email: '', phone: '' };

  constructor(private ps: Sbipayment, private router: Router) {}

  makePayment() {
    const redirectUrl = window.location.origin + '/payment-success';
    const cancelUrl = window.location.origin + '/payment-failed';

    const req = {
      amount: this.paymentdetails.amount,
      email: this.paymentdetails.email,
      phone: this.paymentdetails.phone,
      redirectUrl,
      cancelUrl,
    };

    this.ps.initiate(req).subscribe(
      (res: any) => {
        // ✅ fallback values for mock testing (in case backend doesn't return them)
        const paymentUrl = res.paymentUrl || '/assets/sbi-mock.html';
        const encRequest = res.encRequest || 'ENCRYPTED12345';
        const accessCode = res.accessCode || 'ACCESS12345';

        // ✅ Create form and auto-submit to SBI mock page
        const form = document.createElement('form');
        form.method = 'post';
        form.action = paymentUrl;

        const enc = document.createElement('input');
        enc.name = 'encRequest';
        enc.value = encRequest;
        form.appendChild(enc);

        const acc = document.createElement('input');
        acc.name = 'accessCode';
        acc.value = accessCode;
        form.appendChild(acc);

        document.body.appendChild(form);
        form.submit();
      },
      (err) => {
        console.error('initiate error', err);
        alert('Payment initiation failed. Please try again.');
      }
    );
  }
}
