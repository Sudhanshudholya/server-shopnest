const otpTemplate = (name, otp) => {
  return `
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>Verify Your Email</title>
</head>

<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 0;">

<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.08);">

<!-- Header -->

<tr>
<td
style="
background:linear-gradient(135deg,#2563eb,#1d4ed8);
padding:40px;
text-align:center;
color:white;
">

<h1 style="margin:0;font-size:34px;">
🛍️ ShopNest
</h1>

<p style="margin-top:10px;font-size:16px;">
Welcome to ShopNest
</p>

</td>
</tr>

<!-- Body -->

<tr>

<td style="padding:40px;">

<h2 style="margin-top:0;color:#222;">
Hello ${name},
</h2>

<p style="font-size:16px;color:#555;line-height:28px;">

Thank you for creating your account with
<b>ShopNest</b>.

Please use the OTP below to verify your email address.

</p>

<div
style="
margin:40px auto;
width:260px;
background:#f8fafc;
border:2px dashed #2563eb;
border-radius:12px;
padding:20px;
text-align:center;
">

<p
style="
margin:0;
font-size:14px;
color:#777;
letter-spacing:2px;
"
>

YOUR OTP

</p>

<h1
style="
margin:15px 0 0;
font-size:42px;
color:#2563eb;
letter-spacing:10px;
"
>

${otp}

</h1>

</div>

<div
style="
background:#fff8e6;
padding:18px;
border-left:5px solid #f59e0b;
border-radius:8px;
margin-top:25px;
"
>

<p
style="
margin:0;
color:#7c4a03;
font-size:15px;
"
>

⏰ This OTP is valid for
<b>10 minutes</b>.

</p>

</div>

<p
style="
margin-top:30px;
color:#555;
line-height:28px;
font-size:15px;
"
>

For your security, never share this OTP with anyone.

ShopNest will never ask for your OTP.

</p>

</td>

</tr>

<!-- Footer -->

<tr>

<td
style="
background:#111827;
padding:30px;
text-align:center;
color:#d1d5db;
"
>

<h3
style="
margin:0;
color:#fff;
"
>

Happy Shopping! 🛒

</h3>

<p style="margin:12px 0 0;">
Team ShopNest
</p>

<hr
style="
margin:25px 0;
border:none;
border-top:1px solid #374151;
"
/>

<p
style="
margin:0;
font-size:13px;
color:#9ca3af;
"
>

© ${new Date().getFullYear()} ShopNest. All Rights Reserved.

</p>

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`;
};

module.exports = otpTemplate;