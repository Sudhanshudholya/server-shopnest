const orderTemplate = (name, orderId, totalAmount, address) => {
  return `
  <div style="font-family:Arial,sans-serif;background:#f5f5f5;padding:30px">
    <div style="max-width:600px;margin:auto;background:#fff;border-radius:10px;overflow:hidden">

      <div style="background:#111827;padding:20px;text-align:center">
        <h1 style="color:#fff;margin:0;">ShopNest</h1>
      </div>

      <div style="padding:30px">
        <h2 style="color:#111827;">🎉 Order Confirmed!</h2>

        <p>Hello <strong>${name}</strong>,</p>

        <p>Thank you for shopping with <strong>ShopNest</strong>.</p>

        <div style="background:#f9fafb;padding:20px;border-radius:8px;margin:20px 0">
          <p><strong>Order ID:</strong> ${orderId}</p>
          <p><strong>Total Amount:</strong> ₹${totalAmount}</p>
          <p><strong>Delivery Address:</strong></p>
          <p>
            ${address.street}<br>
            ${address.city}<br>
            ${address.state}<br>
            ${address.postalCode}
          </p>
        </div>

        <p>Your order has been successfully placed and is now being processed.</p>

        <p>You will receive another email once your order has been shipped.</p>

        <div style="text-align:center;margin-top:30px">
          <a href="http://localhost:5173/orders"
             style="background:#111827;color:#fff;padding:12px 25px;text-decoration:none;border-radius:6px;">
             View My Orders
          </a>
        </div>
      </div>

      <div style="background:#f3f4f6;padding:15px;text-align:center;color:#666">
        © 2026 ShopNest. All Rights Reserved.
      </div>

    </div>
  </div>
  `;
};

module.exports = orderTemplate;