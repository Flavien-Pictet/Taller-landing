'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Terms() {
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
      footer {
        background-color: white;
        padding: 20px 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 150px;
      }
      footer a {
        color: black;
        text-decoration: none;
        margin: 0 20px;
        font-size: 18px;
      }
      .company-info {
        margin-top: 50px;
        font-size: 14px;
        color: #666;
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
      footer .separator {
        color: black;
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
    <>
      <div className="content">
        <h1>Terms of Service</h1>
        <p><strong>Last updated: December 11, 2024</strong></p>

        <div className="section">
          <h2>TABLE OF CONTENTS</h2>
          <ol className="table-of-contents">
            <li><a href="#section1">AGREEMENT TO TERMS</a></li>
            <li><a href="#section2">INTELLECTUAL PROPERTY RIGHTS</a></li>
            <li><a href="#section3">USER REPRESENTATIONS</a></li>
            <li><a href="#section4">PROHIBITED ACTIVITIES</a></li>
            <li><a href="#section5">USER GENERATED CONTRIBUTIONS</a></li>
            <li><a href="#section6">CONTRIBUTION LICENSE</a></li>
            <li><a href="#section7">MOBILE APPLICATION LICENSE</a></li>
            <li><a href="#section8">THIRD-PARTY WEBSITES AND CONTENT</a></li>
            <li><a href="#section9">ADVERTISERS</a></li>
            <li><a href="#section10">APP MANAGEMENT</a></li>
            <li><a href="#section11">PRIVACY POLICY</a></li>
            <li><a href="#section12">TERM AND TERMINATION</a></li>
            <li><a href="#section13">MODIFICATIONS AND INTERRUPTIONS</a></li>
            <li><a href="#section14">GOVERNING LAW</a></li>
            <li><a href="#section15">DISPUTE RESOLUTION</a></li>
            <li><a href="#section16">CORRECTIONS</a></li>
            <li><a href="#section17">PURCHASES AND PAYMENT</a></li>
            <li><a href="#section18">CANCELLATION</a></li>
            <li><a href="#section19">PROHIBITED ACTIVITIES</a></li>
            <li><a href="#section20">GUIDELINES FOR REVIEWS</a></li>
            <li><a href="#section21">MOBILE APPLICATION LICENSE</a></li>
            <li><a href="#section22">THIRD-PARTY WEBSITES AND CONTENT</a></li>
            <li><a href="#section23">ADVERTISERS</a></li>
            <li><a href="#section24">LIMITATION OF LIABILITY AND DISCLAIMER OF WARRANTIES</a></li>
            <li><a href="#section25">DISCLAIMER</a></li>
          </ol>
        </div>

        <div className="section" id="section1">
          <h2>1. AGREEMENT TO TERMS</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf 
            of an entity ("you") and Asymmetric Labs FZC, doing business as Taller ("Company," "we," "us," or "our"), 
            concerning your access to and use of the Taller mobile application as well as any other media form, media 
            channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, 
            the "App"). You agree that by accessing the App, you have read, understood, and agreed to be bound by all 
            of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY 
            PROHIBITED FROM USING THE APP AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
        </div>

        <div className="section" id="section2">
          <h2>2. INTELLECTUAL PROPERTY RIGHTS</h2>
          <p>
            Unless otherwise indicated, the App is our proprietary property and all source code, databases, functionality, 
            software, website designs, audio, video, text, photographs, and graphics on the App (collectively, the "Content") 
            and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or 
            licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights 
            and unfair competition laws of the United Arab Emirates, international copyright laws, and international conventions.
          </p>
        </div>

        <div className="section" id="section3">
          <h2>3. USER REPRESENTATIONS</h2>
          <p>
            By using the App, you represent and warrant that:
          </p>
          <ul>
            <li>you have the legal capacity and you agree to comply with these Terms of Service;</li>
            <li>you are not under the age of 13;</li>
            <li>you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the App;</li>
            <li>you will not access the App through automated or non-human means, whether through a bot, script, or otherwise;</li>
            <li>you will not use the App for any illegal or unauthorized purpose; and</li>
            <li>your use of the App will not violate any applicable law or regulation.</li>
          </ul>
        </div>

        <div className="section" id="section4">
          <h2>4. PROHIBITED ACTIVITIES</h2>
          <p>
            You may not access or use the App for any purpose other than that for which we make the App available. 
            The App may not be used in connection with any commercial endeavors except those that are specifically 
            endorsed or approved by us.
          </p>
        </div>

        <div className="section" id="section5">
          <h2>5. USER GENERATED CONTRIBUTIONS</h2>
          <p>
            The App may invite you to chat, contribute to, or participate in blogs, message boards, online forums, 
            and other functionality, and may provide you with the opportunity to create, submit, post, display, 
            transmit, perform, publish, distribute, or broadcast content and materials to us or on the App, including 
            but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal 
            information or other material (collectively, "Contributions"). Contributions may be viewable by other users 
            of the App and through third-party websites. As such, any Contributions you transmit may be treated as 
            non-confidential and non-proprietary.
          </p>
        </div>

        <div className="section" id="section6">
          <h2>6. CONTRIBUTION LICENSE</h2>
          <p>
            By posting your Contributions to any part of the App, you automatically grant, and you represent and warrant 
            that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, 
            transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, 
            sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, 
            translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without 
            limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare 
            derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses 
            of the foregoing.
          </p>
        </div>

        <div className="section" id="section7">
          <h2>7. MOBILE APPLICATION LICENSE</h2>
          
          <h3>Use License</h3>
          <p>
            If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, 
            limited right to install and use the App on wireless electronic devices owned or controlled by you, and 
            to access and use the App on such devices strictly in accordance with the terms and conditions of this 
            mobile application license contained in these Legal Terms. You shall not:
          </p>
          <ul>
            <li>
              except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive 
              the source code of, or decrypt the App;
            </li>
            <li>
              make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App;
            </li>
            <li>
              violate any applicable laws, rules, or regulations in connection with your access or use of the App;
            </li>
            <li>
              remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) 
              posted by us or the licensors of the App;
            </li>
            <li>
              use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which 
              it is not designed or intended;
            </li>
            <li>
              make the App available over a network or other environment permitting access or use by multiple 
              devices or users at the same time;
            </li>
            <li>
              use the App for creating a product, service, or software that is, directly or indirectly, competitive 
              with or in any way a substitute for the App;
            </li>
            <li>
              use the App to send automated queries to any website or to send any unsolicited commercial email;
            </li>
            <li>
              use any proprietary information or any of our interfaces or our other intellectual property in the 
              design, development, manufacture, licensing, or distribution of any applications, accessories, or 
              devices for use with the App.
            </li>
          </ul>

          <h3>Apple Devices</h3>
          <p>
            The following terms apply when you use the App obtained from the Apple Store (the "App Distributor") 
            to access the Services:
          </p>
          <ul>
            <li>
              The license granted to you for our App is limited to a non-transferable license to use the application 
              on a device that utilizes the Apple iOS operating system, and in accordance with the usage rules set 
              forth in the applicable App Distributor's terms of service.
            </li>
            <li>
              We are responsible for providing any maintenance and support services with respect to the App as 
              specified in the terms and conditions of this mobile application license contained in these Legal 
              Terms or as otherwise required under applicable law, and you acknowledge that the App Distributor 
              has no obligation whatsoever to furnish any maintenance and support services with respect to the App.
            </li>
            <li>
              In the event of any failure of the App to conform to any applicable warranty, you may notify the 
              App Distributor, and the App Distributor, in accordance with its terms and policies, may refund 
              the purchase price, if any, paid for the App. To the maximum extent permitted by applicable law, 
              the App Distributor will have no other warranty obligation whatsoever with respect to the App.
            </li>
            <li>
              You represent and warrant that (i) you are not located in a country that is subject to a US 
              government embargo or that has been designated by the US government as a "terrorist supporting" 
              country, and (ii) you are not listed on any US government list of prohibited or restricted parties.
            </li>
            <li>
              You must comply with applicable third-party terms of agreement when using the App.
            </li>
            <li>
              You acknowledge and agree that the App Distributor is a third-party beneficiary of the terms and 
              conditions in this mobile application license contained in these Legal Terms, and that the App 
              Distributor will have the right (and will be deemed to have accepted the right) to enforce the 
              terms and conditions in this mobile application license contained in these Legal Terms against 
              you as a third-party beneficiary thereof.
            </li>
          </ul>
        </div>

        <div className="section" id="section8">
          <h2>8. THIRD-PARTY WEBSITES AND CONTENT</h2>
          <p>
            The Services may contain (or you may be sent via the App) links to other websites ("Third-Party Websites") 
            as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, 
            applications, software, and other content or items belonging to or originating from third parties 
            ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, 
            or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any 
            Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, 
            or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, 
            privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content.
          </p>
          <p>
            Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any 
            Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the 
            Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at 
            your own risk, and you should be aware these Legal Terms no longer govern. You should review the applicable 
            terms and policies, including privacy and data gathering practices, of any website to which you navigate 
            from the Services or relating to any applications you use or install from the Services.
          </p>
          <p>
            Any purchases you make through Third-Party Websites will be through other websites and from other companies, 
            and we take no responsibility whatsoever in relation to such purchases which are exclusively between you 
            and the applicable third party. You agree and acknowledge that we do not endorse the products or services 
            offered on Third-Party Websites and you shall hold us blameless from any harm caused by your purchase of 
            such products or services. Additionally, you shall hold us blameless from any losses sustained by you or 
            harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with 
            Third-Party Websites.
          </p>
        </div>

        <div className="section" id="section9">
          <h2>9. ADVERTISERS</h2>
          <p>
            Currently, we do not allow advertisers to display advertisements on our Services. However, this policy 
            may change in the future. If we decide to introduce advertising, it would be in certain areas of the 
            Services, such as sidebar advertisements or banner advertisements. In such a case, we would simply 
            provide the space to place advertisements, without having any other relationship with advertisers. 
            We will update these terms accordingly if our advertising policy changes.
          </p>
        </div>

        <div className="section" id="section10">
          <h2>10. APP MANAGEMENT</h2>
          <p>
            We reserve the right, but not the obligation, to:
          </p>
          <ol>
            <li>monitor the App for violations of these Terms of Service;</li>
            <li>
              take appropriate legal action against anyone who, in our sole discretion, violates the law or these 
              Terms of Service, including without limitation, reporting such user to law enforcement authorities;
            </li>
            <li>
              in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, 
              or disable (to the extent technologically feasible) any of your Contributions or any portion thereof;
            </li>
            <li>
              in our sole discretion and without limitation, notice, or liability, to remove from the App or 
              otherwise disable all files and content that are excessive in size or are in any way burdensome 
              to our systems;
            </li>
            <li>
              otherwise manage the App in a manner designed to protect our rights and property and to facilitate 
              the proper functioning of the App.
            </li>
          </ol>
        </div>

        <div className="section" id="section11">
          <h2>11. PRIVACY POLICY</h2>
          <p>
            We care about data privacy and security. Please review our <a href="/privacy">Privacy Policy</a>. 
            By using the App, you agree to be bound by our Privacy Policy, which is incorporated into these 
            Terms of Service. Please be advised the App is hosted in the United Arab Emirates. If you access the App from 
            any other region of the world with laws or other requirements governing personal data collection, 
            use, or disclosure that differ from applicable laws in the United Arab Emirates, then through your continued 
            use of the App, you are transferring your data to the United Arab Emirates, and you agree to have your data 
            transferred to and processed in the United Arab Emirates.
          </p>
        </div>

        <div className="section" id="section12">
          <h2>12. TERM AND TERMINATION</h2>
          <p>
            These Terms of Service shall remain in full force and effect while you use the App. WITHOUT LIMITING ANY 
            OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT 
            NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE APP (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY 
            PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, 
            WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY 
            TERMINATE YOUR USE OR PARTICIPATION IN THE APP OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT 
            YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
          </p>
        </div>

        <div className="section" id="section13">
          <h2>13. MODIFICATIONS AND INTERRUPTIONS</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue the App (or any part thereof) at any time, with 
            or without notice, for any reason, including performing maintenance, upgrades, or changes to the content 
            and functionality. We are not liable if all or any part of the App is unavailable at any time or for any 
            period. While we strive to minimize service disruptions, you acknowledge that interruptions in access or 
            use of the App may occur due to maintenance, technical issues, or other circumstances beyond our control. 
            You agree that we are not liable for any losses or damages resulting from any such interruptions or from 
            the termination of the App or any services associated with it. We will not be liable to you or any third 
            party for any modification, suspension, or discontinuance of the App or any part of the services provided 
            through it.
          </p>
        </div>

        <div className="section" id="section14">
          <h2>14. GOVERNING LAW</h2>
          <p>
            These Terms shall be governed by and defined following the laws of the United Arab Emirates. Asymmetric Labs FZC and 
            yourself irrevocably consent that the courts of the United Arab Emirates shall have exclusive jurisdiction to resolve 
            any dispute which may arise in connection with these terms.
          </p>
        </div>

        <div className="section" id="section15">
          <h2>15. DISPUTE RESOLUTION</h2>
          <p>
            In the event of any disputes arising out of or relating to these Terms of Service, the use of the App, 
            or any transactions made through the App, you agree to first attempt to resolve the dispute informally 
            by contacting us at contact@tallerapp.xyz. We will try to resolve any dispute amicably within 30 days 
            of receiving your communication. If the dispute cannot be resolved informally, you agree that it shall 
            be submitted to the exclusive jurisdiction of the courts of the United Arab Emirates. You acknowledge and agree that 
            any disputes shall be governed by the laws of the United Arab Emirates, without regard to its conflict of law principles. 
            For users in the European Union, the European Commission provides an online dispute resolution (ODR) 
            platform that you can access here: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" 
            rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.
          </p>
        </div>

        <div className="section" id="section16">
          <h2>16. CORRECTIONS</h2>
          <p>
            There may be information on the App that contains typographical errors, inaccuracies, or omissions, 
            including descriptions, pricing, availability, and various other information. We reserve the right to 
            correct any errors, inaccuracies, or omissions and to change or update the information on the App at 
            any time, without prior notice.
          </p>
        </div>

        <div className="section" id="section17">
          <h2>17. PURCHASES AND PAYMENT</h2>
          <p>
            We accept the following forms of payment:
          </p>
          <ul>
            <li>Apple App Store</li>
          </ul>
          <p>
            You agree to provide current, complete, and accurate purchase and account information for all purchases 
            made via the Services. You further agree to promptly update account and payment information, including 
            email address, payment method, and payment card expiration date, so that we can complete your transactions 
            and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. 
            We may change prices at any time. All payments shall be in US dollars.
          </p>
          <p>
            You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping 
            fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your 
            order. If your order is subject to recurring charges, then you consent to our charging your payment method 
            on a recurring basis without requiring your prior approval for each recurring charge, until such time as 
            you cancel the applicable order. We reserve the right to correct any errors or mistakes in pricing, even 
            if we have already requested or received payment.
          </p>
          <p>
            We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, 
            limit or cancel quantities purchased per person, per household, or per order. These restrictions may 
            include orders placed by or under the same customer account, the same payment method, and/or orders 
            that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, 
            in our sole judgment, appear to be placed by dealers, resellers, or distributors.
          </p>
        </div>

        <div className="section" id="section18">
          <h2>18. CANCELLATION</h2>
          <p>
            All purchases are non-refundable. Apple App Store Your cancellation will take effect at the end of the 
            current paid term.
          </p>
          <p>
            If you are unsatisfied with our Services, please email us at contact@tallerapp.xyz
          </p>
        </div>

        <div className="section" id="section19">
          <h2>19. PROHIBITED ACTIVITIES</h2>
          <p>
            You may not access or use the Services for any purpose other than that for which we make the Services 
            available. The Services may not be used in connection with any commercial endeavors except those that 
            are specifically endorsed or approved by us.
          </p>
          <p>
            As a user of the Services, you agree not to:
          </p>
          <ul>
            <li>
              Systematically retrieve data or other content from the Services to create or compile, directly or 
              indirectly, a collection, compilation, database, or directory without written permission from us.
            </li>
            <li>
              Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account 
              information such as user passwords.
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related features of the Services, including 
              features that prevent or restrict the use or copying of any Content or enforce limitations on the use 
              of the Services and/or the Content contained therein.
            </li>
            <li>
              Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.
            </li>
            <li>
              Use any information obtained from the Services in order to harass, abuse, or harm another person.
            </li>
            <li>
              Make improper use of our support services or submit false reports of abuse or misconduct.
            </li>
            <li>
              Use the Services in a manner inconsistent with any applicable laws or regulations.
            </li>
            <li>
              Engage in unauthorized framing of or linking to the Services.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, 
              including excessive use of capital letters and spamming (continuous posting of repetitive text), that 
              interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, 
              disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.
            </li>
            <li>
              Engage in any automated use of the system, such as using scripts to send comments or messages, or 
              using any data mining, robots, or similar data gathering and extraction tools.
            </li>
            <li>
              Delete the copyright or other proprietary rights notice from any Content.
            </li>
            <li>
              Attempt to impersonate another user or person or use the username of another user.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active 
              information collection or transmission mechanism, including without limitation, clear graphics interchange 
              formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as 
              "spyware" or "passive collection mechanisms" or "pcms").
            </li>
            <li>
              Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected 
              to the Services.
            </li>
            <li>
              Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion 
              of the Services to you.
            </li>
            <li>
              Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, 
              or any portion of the Services.
            </li>
            <li>
              Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or 
              other code.
            </li>
            <li>
              Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of 
              the software comprising or in any way making up a part of the Services.
            </li>
            <li>
              Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, 
              or distribute any automated system, including without limitation, any spider, robot, cheat utility, 
              scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or 
              other software.
            </li>
            <li>
              Use a buying agent or purchasing agent to make purchases on the Services.
            </li>
            <li>
              Make any unauthorized use of the Services, including collecting usernames and/or email addresses of 
              users by electronic or other means for the purpose of sending unsolicited email, or creating user 
              accounts by automated means or under false pretenses.
            </li>
            <li>
              Use the Services as part of any effort to compete with us or otherwise use the Services and/or the 
              Content for any revenue-generating endeavor or commercial enterprise.
            </li>
            <li>
              Use the Services to advertise or offer to sell goods and services.
            </li>
            <li>
              Sell or otherwise transfer your profile.
            </li>
          </ul>
        </div>

        <div className="section" id="section20">
          <h2>20. GUIDELINES FOR REVIEWS</h2>
          <p>
            We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must 
            comply with the following criteria:
          </p>
          <ul>
            <li>you should have firsthand experience with the person/entity being reviewed;</li>
            <li>your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language;</li>
            <li>
              your reviews should not contain discriminatory references based on religion, race, gender, national 
              origin, age, marital status, sexual orientation, or disability;
            </li>
            <li>your reviews should not contain references to illegal activity;</li>
            <li>you should not be affiliated with competitors if posting negative reviews;</li>
            <li>you should not make any conclusions as to the legality of conduct;</li>
            <li>you may not post any false or misleading statements;</li>
            <li>
              you may not organize a campaign encouraging others to post reviews, whether positive or negative.
            </li>
          </ul>
          <p>
            We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to 
            screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. 
            Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of 
            our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, 
            or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, 
            non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and license 
            to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content 
            relating to review.
          </p>
        </div>

        <div className="section" id="section21">
          <h2>21. MOBILE APPLICATION LICENSE</h2>
          <h3>Use License</h3>
          <p>
            If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, 
            limited right to install and use the App on wireless electronic devices owned or controlled by you, and 
            to access and use the App on such devices strictly in accordance with the terms and conditions of this 
            mobile application license contained in these Legal Terms. You shall not:
          </p>
          <ul>
            <li>
              except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive 
              the source code of, or decrypt the App;
            </li>
            <li>
              make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App;
            </li>
            <li>
              violate any applicable laws, rules, or regulations in connection with your access or use of the App;
            </li>
            <li>
              remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) 
              posted by us or the licensors of the App;
            </li>
            <li>
              use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which 
              it is not designed or intended;
            </li>
            <li>
              make the App available over a network or other environment permitting access or use by multiple 
              devices or users at the same time;
            </li>
            <li>
              use the App for creating a product, service, or software that is, directly or indirectly, competitive 
              with or in any way a substitute for the App;
            </li>
            <li>
              use the App to send automated queries to any website or to send any unsolicited commercial email;
            </li>
            <li>
              use any proprietary information or any of our interfaces or our other intellectual property in the 
              design, development, manufacture, licensing, or distribution of any applications, accessories, or 
              devices for use with the App.
            </li>
          </ul>

          <h3>Apple Devices</h3>
          <p>
            The following terms apply when you use the App obtained from the Apple Store (the "App Distributor") 
            to access the Services:
          </p>
          <ul>
            <li>
              The license granted to you for our App is limited to a non-transferable license to use the application 
              on a device that utilizes the Apple iOS operating system, and in accordance with the usage rules set 
              forth in the applicable App Distributor's terms of service.
            </li>
            <li>
              We are responsible for providing any maintenance and support services with respect to the App as 
              specified in the terms and conditions of this mobile application license contained in these Legal 
              Terms or as otherwise required under applicable law, and you acknowledge that the App Distributor 
              has no obligation whatsoever to furnish any maintenance and support services with respect to the App.
            </li>
            <li>
              In the event of any failure of the App to conform to any applicable warranty, you may notify the 
              App Distributor, and the App Distributor, in accordance with its terms and policies, may refund 
              the purchase price, if any, paid for the App. To the maximum extent permitted by applicable law, 
              the App Distributor will have no other warranty obligation whatsoever with respect to the App.
            </li>
            <li>
              You represent and warrant that (i) you are not located in a country that is subject to a US 
              government embargo or that has been designated by the US government as a "terrorist supporting" 
              country, and (ii) you are not listed on any US government list of prohibited or restricted parties.
            </li>
            <li>
              You must comply with applicable third-party terms of agreement when using the App.
            </li>
            <li>
              You acknowledge and agree that the App Distributor is a third-party beneficiary of the terms and 
              conditions in this mobile application license contained in these Legal Terms, and that the App 
              Distributor will have the right (and will be deemed to have accepted the right) to enforce the 
              terms and conditions in this mobile application license contained in these Legal Terms against 
              you as a third-party beneficiary thereof.
            </li>
          </ul>
        </div>

        <div className="section" id="section22">
          <h2>22. THIRD-PARTY WEBSITES AND CONTENT</h2>
          <p>
            The Services may contain (or you may be sent via the App) links to other websites ("Third-Party Websites") 
            as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, 
            applications, software, and other content or items belonging to or originating from third parties 
            ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, 
            or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any 
            Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, 
            or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, 
            privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content.
          </p>
          <p>
            Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any 
            Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the 
            Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at 
            your own risk, and you should be aware these Legal Terms no longer govern. You should review the applicable 
            terms and policies, including privacy and data gathering practices, of any website to which you navigate 
            from the Services or relating to any applications you use or install from the Services.
          </p>
          <p>
            Any purchases you make through Third-Party Websites will be through other websites and from other companies, 
            and we take no responsibility whatsoever in relation to such purchases which are exclusively between you 
            and the applicable third party. You agree and acknowledge that we do not endorse the products or services 
            offered on Third-Party Websites and you shall hold us blameless from any harm caused by your purchase of 
            such products or services. Additionally, you shall hold us blameless from any losses sustained by you or 
            harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with 
            Third-Party Websites.
          </p>
        </div>

        <div className="section" id="section23">
          <h2>23. ADVERTISERS</h2>
          <p>
            Currently, we do not allow advertisers to display advertisements on our Services. However, this policy 
            may change in the future. If we decide to introduce advertising, it would be in certain areas of the 
            Services, such as sidebar advertisements or banner advertisements. In such a case, we would simply 
            provide the space to place advertisements, without having any other relationship with advertisers. 
            We will update these terms accordingly if our advertising policy changes.
          </p>
        </div>

        <div className="section" id="section24">
          <h2>24. LIMITATION OF LIABILITY AND DISCLAIMER OF WARRANTIES</h2>
          <h3>Specific Cases of Liability</h3>
          <p>
            Taller App accepts liability only in the following limited circumstances:
          </p>
          <ul>
            <li>Gross negligence or willful misconduct on our part</li>
            <li>Death or personal injury caused by our negligence</li>
            <li>Fraud or fraudulent misrepresentation</li>
            <li>Any other liability that cannot be excluded by law</li>
          </ul>
          <p>
            In all other cases, Taller App, its directors, employees, partners, agents, suppliers, or affiliates 
            shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including 
            without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from:
          </p>
          <ul>
            <li>Your access to or use of or inability to access or use the Service</li>
            <li>Any conduct or content of any third party on the Service</li>
            <li>Any content obtained from the Service</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
          <h3>No Guarantee of Results</h3>
          <p>
            Taller App provides tips and techniques to potentially aid in height maximization and physical growth, 
            but we make no guarantees or warranties regarding the effectiveness of these methods. Specifically:
          </p>
          <ul>
            <li>We do not guarantee any specific increase in height.</li>
            <li>Results may vary significantly between individuals.</li>
            <li>The effectiveness of the techniques depends on proper implementation and individual factors.</li>
            <li>Our app is not a substitute for medical treatments or guaranteed physical growth solutions.</li>
          </ul>
          <p>
            By using Taller App, you acknowledge and agree that you are using the service at your own risk. We 
            provide the app and its content on an "as is" and "as available" basis, without any warranties of any 
            kind, either express or implied.
          </p>
          <p>
            We disclaim all warranties, express or implied, including, but not limited to, implied warranties of 
            merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the 
            service will be uninterrupted or error-free, that defects will be corrected, or that the service or 
            the server that makes it available are free of viruses or other harmful components.
          </p>
        </div>

        <div className="section" id="section25">
          <h2>25. DISCLAIMER</h2>
          <p>
            THE APP IS PROVIDED ON AN "AS-IS" AND "AS AVAILABLE" BASIS. YOU AGREE THAT YOUR USE OF THE APP AND OUR 
            SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, 
            EXPRESS OR IMPLIED, IN CONNECTION WITH THE APP AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE 
            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE 
            NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE APP'S CONTENT OR THE CONTENT 
            OF ANY WEBSITES LINKED TO THE APP.
          </p>
          <p>
            WE WILL NOT BE LIABLE FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (2) PERSONAL INJURY OR 
            PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE APP, (3) ANY 
            UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL 
            INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE APP, (5) 
            ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE APP BY ANY 
            THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND 
            INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE APP.
          </p>
          <p>
            WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED 
            OR OFFERED BY A THIRD PARTY THROUGH THE APP OR ANY HYPERLINKED WEBSITE OR FEATURED IN ANY BANNER OR 
            OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY 
            TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
          </p>
        </div>

        <nav className="bottom-navbar">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
      </div>
    </>
  );
} 