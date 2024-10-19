import { createTransport } from "nodemailer";

import dotenv from "dotenv"

dotenv.config();

const sendMail = async (email, subject, text) => {
    try {
      const transport = createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: "websideotp@gmail.com",
        //   pass: "gtvs hmjt mmgs pwsq",
        pass: "lpgs occh xfbz vzkg",
        },
      });
  
      await transport.sendMail({
        from: "ntshyamsunder96@gmail.com",
        to: email,
        subject,
        text,
      });
  
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }
  };
  

export default sendMail;