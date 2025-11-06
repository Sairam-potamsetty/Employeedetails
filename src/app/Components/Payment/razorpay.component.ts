import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { employee } from '../../Services/payment.service';
import { Payment } from '../../Models/payment.model';
import { Verify } from '../../Models/verify.model';
import { Router } from '@angular/router';
import { UserLoginComponent } from '../UserLogin/UserLogin.component';


@Component({
  standalone:true,
  selector: 'app-razorpay',
  imports: [CommonModule],
  templateUrl: './razorpay.component.html'
})
export class RazorpayComponent {
    isactive:boolean=false;
  readonly RAZORPAY_KEY = 'rzp_test_RJNdnca6en5y2b';
  verify: Verify = { orderId: '', paymentId: '', signature: '' };
  order_id: string = '';  
 constructor(private employeeService: employee,private router:Router) {}
  payNow() {
    // 1️⃣ First, create the order on the backend
    debugger;
    this.employeeService.CreateOrder().subscribe((data: any) => {
      debugger;
      console.log('Order created:', data);
      
      // Assuming backend returns an order_id in Payment object
      this.order_id = data; // Adjust based on actual response structure

      if (!data) {
        alert('Order creation failed!');
        return;
      }

      // 2️⃣ Load Razorpay script dynamically
      if (!document.getElementById('razorpay-script')) {
        const script = document.createElement('script');
        script.id = 'razorpay-script';
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => this.openCheckout(); // call after script loads
        document.body.appendChild(script);
      } else {
        this.openCheckout();
      }
    });
  }

  private openCheckout() {
    debugger;
    const options: any = {
      key: this.RAZORPAY_KEY,
      amount: 50000, // amount in paise
      currency: 'INR',
      name: 'EmployeeDetails Demo',
      description: 'Test Transaction',
      order_id: this.order_id, // pass the backend-generated order_id
    
      handler: (response: any) => this.onPaymentSuccess(response),
      
      prefill: {
        name: 'Test User',
        email: 'test@example.com',
        contact: '8688593649'
      },
      theme: { color: '#3399cc' }
    };

    // @ts-ignore
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  }

 private onPaymentSuccess(response: any) {
    debugger;
  // Take all values directly from Razorpay response
  const verifyPayload = {
    orderId: this.order_id,
    paymentId: response.razorpay_payment_id,
    signature: response.razorpay_signature
  };

  console.log('Verify payload:', verifyPayload);

  // Call backend verification API
  this.employeeService.Verification(verifyPayload).subscribe({
    next: (data: any) => console.log('Verification response:', data),
    error: (err) => console.error('Verification failed:', err)
  });

  // Alert with all correct values
  alert(
    `Payment successful! Payment ID: ${verifyPayload.paymentId} | Order ID: ${verifyPayload.orderId} | Signature: ${verifyPayload.signature}`
  );
}

logout(){
  this.router.navigate(['/UserLoginComponent']);
}
}
