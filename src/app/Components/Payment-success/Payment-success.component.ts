import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'app-payment-success', template: `
  <div style="margin:30px">
    <h3>Payment Success</h3>
    <p>Use backend logs or DB to view transaction details.</p>
  </div>

`,
standalone:true})
export class PaymentSuccessComponent {}
