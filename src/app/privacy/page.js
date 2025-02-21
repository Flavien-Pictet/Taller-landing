'use client';
import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    // Add the styles to the document head
    const style = document.createElement('style');
    style.textContent = `
      body {
        font-family: "Inter", sans-serif;
        background-color: #141414;
        color: #dbdbdb;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      .content {
        flex: 1;
        padding: 40px;
        max-width: 620px;
        margin: 0 auto;
      }
      h1, h2 {
        text-transform: uppercase;
      }
      h1 {
        color: white;
        text-align: center;
        margin-top: 50px;
        margin-bottom: 50px;
      }
      h2 {
        color: white;
        text-align: left;
        margin-top: 60px;
        margin-bottom: 30px;
      }
      h3 {
        color: white;
      }
      p, ul, ol {
        margin-bottom: 20px;
        line-height: 1.6;
      }
      .table-of-contents {
        text-transform: uppercase;
        margin-top: 40px;
        margin-bottom: 60px;
      }
      .table-of-contents li {
        margin-bottom: 15px;
      }
      .table-of-contents a {
        color: white;
        text-decoration: none;
      }
      .table-of-contents a:hover {
        text-decoration: underline;
      }
      .section {
        margin-bottom: 60px;
      }
      a {
        color: white;
        text-decoration: none;
        cursor: pointer;
      }
      a:hover {
        text-decoration: underline;
      }
      .white-link {
        color: white;
        text-decoration: underline;
        text-decoration-color: white;
        cursor: pointer;
      }
      .summary-list li {
        margin-bottom: 1em;
      }
      .bottom-navbar {
        display: flex;
        justify-content: center;
        gap: 40px;
        padding: 20px 0;
        margin-top: 40px;
      }
      .bottom-navbar a {
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
        transition: color 0.2s ease;
      }
      .bottom-navbar a:hover {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
      }
    `;
    document.head.appendChild(style);

    // Add Inter font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(style);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="content">
      <h1>PRIVACY POLICY</h1>
      <p><strong>Last updated December 11, 2024</strong></p>

      <div className="section">
        <p>
          This privacy policy for Asymmetric Labs FZC (doing business as Taller) ("we," "us," or "our") describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
        </p>
        <p>
          Download and use our mobile application (Taller), or any other application of ours that links to this privacy policy<br />
          Engage with us in other related ways, including any sales, marketing, or events
        </p>
        <p>
          Questions or concerns? Reading this privacy policy will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at contact@tallerapp.xyz.
        </p>
      </div>

      <div className="section">
        <h2>SUMMARY OF KEY POINTS</h2>
        <p><em>In Short: This summary provides key points from our privacy policy, but you can find out more details about any of these topics by using our table of contents below to find the section you are looking for.</em></p>
        <p>
          <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
        </p>
        <p>
          <strong>Do we process any sensitive personal information?</strong> We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.
        </p>
        <p>
          <strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.
        </p>
        <p>
          <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.
        </p>
        <p>
          <strong>In what situations and with which types of parties do we share personal information?</strong> We may share information in specific situations and with specific categories of third parties.
        </p>
        <p>
          <strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
        </p>
      </div>

      <div className="section">
        <h2>TABLE OF CONTENTS</h2>
        <ol className="table-of-contents">
          <li><a href="#section1">WHAT INFORMATION DO WE COLLECT?</a></li>
          <li><a href="#section2">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
          <li><a href="#section3">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a></li>
          <li><a href="#section4">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
          <li><a href="#section5">WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</a></li>
          <li><a href="#section6">IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</a></li>
          <li><a href="#section7">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
          <li><a href="#section8">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
          <li><a href="#section9">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
          <li><a href="#section10">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
          <li><a href="#section11">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
          <li><a href="#section12">DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
          <li><a href="#section13">DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
          <li><a href="#section14">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
          <li><a href="#section15">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
          <li><a href="#section16">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
        </ol>
      </div>

      <div className="section" id="section1">
        <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
        <h3>Personal information you disclose to us</h3>
        <p><em>In Short: We collect personal information that you provide to us.</em></p>
        <p>
          We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
        </p>
        <h3>Personal Information Provided by You</h3>
        <p>
          The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
        </p>
        <ul>
          <li>Size and weight information</li>
          <li>Gender</li>
          <li>Age</li>
          <li>Ethnicity</li>
          <li>Parent's size</li>
          <li>Shoe size</li>
          <li>Training routines</li>
          <li>Sleep habits</li>
          <li>E-mails</li>
        </ul>
        <h3>Sensitive Information</h3>
        <p>
          We do not collect or process sensitive personal information, such as biometric data (selfies, facial recognition, etc.).
        </p>
        <h3>Payment Data</h3>
        <p>
          If you make purchases, we may collect data necessary to process your payment, such as your payment instrument number and the security code associated with your payment instrument. All payment data is stored by Apple. You can find their privacy notice here.
        </p>
        <h3>Application Data</h3>
        <p>
          If you use our application(s), we may also collect the following information if you choose to give us access or permission:
        </p>
        <p>
          Push Notifications. We may request to send you push notifications regarding your account or certain features of the application. If you wish to opt out from receiving these types of communications, you can turn them off in your device's settings.
        </p>
        <h3>Information automatically collected</h3>
        <p><em>In Short: Some information such as your Internet Protocol (IP) address and/or browser and device characteristics is collected automatically when you visit our Services.</em></p>
        <p>
          We automatically collect certain information when you visit, use, navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
        </p>
        <p>The information we collect includes:</p>
        <p>
          <strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
        </p>
      </div>

      <div className="section" id="section2">
        <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p><em>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with the law.</em></p>
        <p>
          We may process your personal information for a variety of reasons, depending on how you interact with our Services, including:
        </p>
        <ul>
          <li>To predict height based on the personal and biological data you provide</li>
          <li>To enhance our application's features and functionality based on user data</li>
          <li>To improve the overall user experience by personalizing your engagement based on your inputs</li>
          <li>To provide AI-powered chatbot interactions through our integration with OpenAI's API. These interactions may involve processing the information you voluntarily provide during conversations to deliver tailored responses.</li>
        </ul>

        <h3>AI Chatbot Information</h3>
        <p><em>In Short: Our AI chatbot feature uses third-party technology (OpenAI API) to facilitate personalized interactions. Conversations are processed in real-time and are not stored by our servers.</em></p>
        <p>
          Any information you choose to share with the chatbot is processed solely to deliver accurate and relevant responses during the session. OpenAI does not retain personal data from API requests; however, we recommend users avoid sharing sensitive or personal identifiable information during chatbot interactions for your security and privacy.
        </p>
      </div>

      <div className="section" id="section3">
        <h2>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</h2>
        <p><em>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable laws, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</em></p>
        
        <h3>If you are located in the EU or UK, this section applies to you.</h3>
        <p>
          The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
        </p>
        <ul>
          <li><strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent.</li>
          <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
          <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
        </ul>

        <h3>If you are located in Canada, this section applies to you.</h3>
        <p>
          We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
        </p>
        <p>
          In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
        </p>
        <ul>
          <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
          <li>For investigations and fraud detection and prevention</li>
          <li>For business transactions provided certain conditions are met</li>
          <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
          <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
          <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
          <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
          <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
          <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
          <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
          <li>If the information is publicly available and is specified by the regulations</li>
        </ul>
      </div>

      <div className="section" id="section4">
        <h2>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <p><em>In Short: We may share information in specific situations and with specific third parties.</em></p>
        <p>
          We may share your data with service providers, contractors, or agents who perform services for us or on our behalf. These third parties are bound by contractual obligations to protect your data.
        </p>
        <h3>Vendors, Consultants, and Other Third-Party Service Providers</h3>
        <p>
          We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct. They will retain the data for no longer than a period of one year and will be subject to the same terms as our use. The categories of third parties we may share personal information with are as follows:
        </p>
        <ul>
          <li>Data Analytics Services</li>
          <li>Data Storage Service Providers</li>
        </ul>
        <p>We also may need to share your personal information in the following situations:</p>
        <p>
          <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
        </p>
      </div>

      <div className="section" id="section5">
        <h2>5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h2>
        <p><em>In Short: We are not responsible for the security of any information you share with third-party providers who advertise, but are not affiliated with, our websites.</em></p>
        <p>
          The Services, including our offer wall, may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.
        </p>
      </div>

      <div className="section" id="section6">
        <h2>6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
        <p><em>In Short: Yes, your information may be transferred, stored, and processed in countries other than your own.</em></p>
        <p>
          Our servers are located in Switzerland. We may transfer your personal data to countries outside Switzerland. In such cases, we ensure that appropriate safeguards are in place to protect your data, in compliance with Swiss data protection laws.
        </p>
        <p>
          If you are located in the European Economic Area (EEA), United Kingdom (UK), or another region with laws governing data collection and use, please be aware that your information may be transferred to countries that do not have the same data protection laws as your jurisdiction. In such cases, we ensure that appropriate safeguards are in place, such as relying on Standard Contractual Clauses approved by the European Commission, to protect your personal information. You can request a copy of these safeguards by contacting us at contact@tallerapp.xyz. These transfers will always comply with the laws and regulations of the countries from which the data originates, including any additional requirements based on your location.
        </p>
        <h3>European Commission's Standard Contractual Clauses:</h3>
        <p>
          We have implemented measures to protect your personal information, including by using the European Commission's Standard Contractual Clauses for transfers of personal information between our group companies and between us and our third-party providers. These clauses require all recipients to protect all personal information that they process originating from the EEA or UK in accordance with European data protection laws and regulations. Our Standard Contractual Clauses can be provided upon request. We have implemented similar appropriate safeguards with our third-party service providers and partners and further details can be provided upon request.
        </p>
      </div>

      <div className="section" id="section7">
        <h2>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p><em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice, unless otherwise required by law.</em></p>
        <p>
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law (such as for tax, legal, accounting, or other regulatory purposes). The specific retention period depends on the type of data and the purpose for which it was collected.
        </p>
        <ul>
          <li><strong>User Account Data:</strong> We retain this data as long as you maintain an account with us. If you choose to delete your account, all associated data will be permanently deleted within 30 days, except where required for legal or regulatory purposes.</li>
          <li><strong>Payment Data:</strong> We retain this data only for the duration required to complete the transaction or as required for financial records and audit purposes.</li>
          <li><strong>Analytics and Log Data:</strong> We keep this information for up to 12 months to ensure we can monitor app performance, improve our services, and address any issues with user engagement or fraud detection.</li>
        </ul>
        <p>
          Once your personal information is no longer necessary for our legitimate business interests or required by law, we will securely delete, anonymize, or isolate it to prevent further processing.
        </p>
      </div>

      <div className="section" id="section8">
        <h2>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p><em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
        <p>
          We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. These measures are aimed at preventing unauthorized access, disclosure, loss, theft, destruction, or alteration of your data. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
        </p>
        <p>
          Some of the security measures we use include encryption, access controls, firewalls, and regular monitoring of our systems for potential vulnerabilities and attacks.
        </p>
        <p>
          Although we will do our best to protect your personal information, the transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment, and we encourage you to take steps to protect your information, such as using strong passwords and avoiding sharing your account details with others.
        </p>
      </div>

      <div className="section" id="section9">
        <h2>9. DO WE COLLECT INFORMATION FROM MINORS?</h2>
        <p>
          Our app is designed for general audiences, and we prioritize the privacy and safety of all users, including minors.
        </p>
        <p>
          We do not knowingly collect personal information from children under the age of 13 where this is restricted by law, such as under the Children's Online Privacy Protection Act (COPPA) in the United States. If we become aware that personal information has been inadvertently collected from a child under the applicable age of consent in their jurisdiction, we will take immediate steps to delete such data. Our application does not have an age restriction and can be used by individuals of all ages. We encourage parents or guardians to actively supervise and be involved in the online activities and app usage of their children. If you believe that your child has provided us with personal data without your consent, please contact us at contact@tallerapp.xyz, and we will address your concerns promptly.
        </p>
      </div>

      <div className="section" id="section10">
        <h2>10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p><em>In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</em></p>
        <p>
          In certain regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us using the contact details provided in the "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" section below.
        </p>

        <h3>PRIVACY RIGHTS FOR SWISS RESIDENTS</h3>
        <p>
          As a Swiss company, we comply with the Swiss Federal Act on Data Protection (FADP). Under this law, you have the right to:
        </p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Ask for your personal data to be rectified or erased</li>
          <li>Object to the processing of your personal data</li>
          <li>Request the restriction of processing of your personal data</li>
          <li>Data portability</li>
        </ul>
        <p>To exercise these rights, please contact us at contact@tallerapp.xyz.</p>

        <h3>SWISS DATA PROTECTION AUTHORITY</h3>
        <p>
          If you have concerns about our processing of your personal data, you have the right to lodge a complaint with the Swiss Federal Data Protection and Information Commissioner (FDPIC).
        </p>
      </div>

      <div className="section" id="section11">
        <h2>11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p>
          Most web browsers and some mobile operating systems and applications include a Do-Not-Track ("DNT") feature or setting that you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this time, no uniform standard for recognizing and implementing DNT signals has been adopted, and we do not currently respond to DNT browser signals or other mechanisms that automatically communicate your choice not to be tracked. However, if such a standard is adopted, we will update this privacy policy and provide you with details on how we comply with those changes. We encourage users to review this policy regularly to stay informed about our practices regarding online tracking.
        </p>
      </div>

      <div className="section" id="section12">
        <h2>12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
        <p><em>In short: If you are a resident of California, Colorado, Connecticut, Utah, or Virginia, you are granted specific rights regarding access to your personal information.</em></p>
        <p>
          We comply with the California Consumer Privacy Act (CCPA) and other applicable laws that grant specific privacy rights to residents of the United States. You can learn more about your rights, such as the right to request access or deletion of your personal information, and how to exercise those rights by contacting us at contact@tallerapp.xyz.
        </p>
      </div>

      <div className="section" id="section13">
        <h2>13. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
        <p><em>In short: You may have additional rights based on the country you reside in.</em></p>
        <p>
          If you are a resident of other regions, including Australia, New Zealand, or the Republic of South Africa, we will collect and process your personal information in line with the specific legal requirements of your country. You may have the right to request access to, correction of, or deletion of your personal data. If you believe your data has been processed unlawfully, you can file a complaint with the appropriate data protection authority in your country.
        </p>
      </div>

      <div className="section" id="section14">
        <h2>14. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p><em>In short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
        <p>
          We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date, and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
        </p>
      </div>

      <div className="section" id="section15">
        <h2>15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>
          If you have questions or comments about this notice, you may email us at contact@tallerapp.xyz or contact us by post at:
        </p>
        <p>
          Asymmetric Labs FZC<br />
          Business Centre, Sharjah Publishing City Free Zone
        </p>
      </div>

      <div className="section" id="section16">
        <h2>16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
        <p>
          Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To review or update your personal information, you can access your account settings within the Taller app. To delete your personal information completely, you can delete your account through the app's settings. Once you delete your account, all associated data will be permanently removed from our systems. If you have any questions or need assistance with managing your data, please contact us at contact@tallerapp.xyz.
        </p>
      </div>

      <nav className="bottom-navbar">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </nav>
    </div>
  );
}