import { Link } from "react-router-dom"

export default function PrivacyPolicy() {
  return (
    <div className=" container  px-3 md:px-10 lg:px-20 py-12 ">
      <div className="space-y-8">
        <div className="text-center mb-10">
          <h1 className=" text-2xl md:text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <section className="space-y-4">
          <h2 className=" text-base md:text-2xl font-semibold tracking-tight">Introduction</h2>
          <p className=" text-sm md:text-base">
            Valinor and Pelori ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
            explains how your personal information is collected, used, and disclosed by Valinor and Pelori when you use
            our website, shop.valinorpelori.com (the "Site"), and the services, features, or content we offer
            (collectively with the Site, the "Services").
          </p>
          <p className=" text-sm md:text-base">
            By accessing or using our Services, you signify that you have read, understood, and agree to our collection,
            storage, use, and disclosure of your personal information as described in this Privacy Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-base md:text-2xl font-semibold tracking-tight">Information We Collect</h2>
          <div className="space-y-2">
            <h3 className=" text-base md:text-xl font-medium">Information You Provide to Us</h3>
            <p className=" text-sm md:text-base">We collect information you provide directly to us when you:</p>
            <ul className="list-disc text-sm md:text-base pl-6 space-y-1">
              <li>Create an account or profile</li>
              <li>Make a purchase</li>
              <li>Sign up for our newsletter</li>
              <li>Participate in a survey, contest, or promotion</li>
              <li>Contact customer service</li>
              <li>Otherwise communicate with us</li>
            </ul>
            <p className=" text-sm md:text-base">
              This information may include your name, email address, postal address, phone number, payment information,
              and any other information you choose to provide.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className=" text-base md:text-xl font-medium " >Information We Collect Automatically</h3>
            <p className=" text-sm md:text-base">When you access or use our Services, we automatically collect information about you, including:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
              <li>
                <strong>Log Information:</strong> We collect log information about your use of the Services, including
                the type of browser you use, access times, pages viewed, your IP address, and the page you visited
                before navigating to our Services.
              </li>
              <li>
                <strong>Device Information:</strong> We collect information about the computer or mobile device you use
                to access our Services, including the hardware model, operating system and version, unique device
                identifiers, and mobile network information.
              </li>
              <li>
                <strong>Location Information:</strong> We may collect information about the precise location of your
                device with your consent, or your approximate location based on your IP address.
              </li>
              <li>
                <strong>Information Collected by Cookies and Other Tracking Technologies:</strong> We and our service
                providers use various technologies to collect information, including cookies and web beacons.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4 ">
          <h2 className=" text-lg md:text-2xl font-semibold tracking-tight">How We Use Your Information</h2>
          <p className=" text-sm md:text-base">We may use information about you for various purposes, including to:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
            <li>Provide, maintain, and improve our Services</li>
            <li>
              Process transactions and send related information, including confirmations, receipts, invoices, and recall
              notices
            </li>
            <li>Send you technical notices, updates, security alerts, and support and administrative messages</li>
            <li>Respond to your comments, questions, and requests, and provide customer service</li>
            <li>
              Communicate with you about products, services, offers, promotions, and events, and provide other news or
              information about Valinor and Pelori
            </li>
            <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
            <li>
              Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the
              rights and property of Valinor and Pelori and others
            </li>
            <li>
              Personalize and improve the Services and provide content or features that match user profiles or interests
            </li>
            <li>Facilitate contests, sweepstakes, and promotions and process and deliver entries and rewards</li>
            <li>Carry out any other purpose described to you at the time the information was collected</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg md:text-2xl font-semibold tracking-tight">Sharing of Information</h2>
          <p className=" text-sm md:text-base">We may share information about you as follows or as otherwise described in this Privacy Policy:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
            <li>
              With vendors, consultants, and other service providers who need access to such information to carry out
              work on our behalf
            </li>
            <li>
              In response to a request for information if we believe disclosure is in accordance with, or required by,
              any applicable law, regulation, or legal process
            </li>
            <li>
              If we believe your actions are inconsistent with our user agreements or policies, or to protect the
              rights, property, and safety of Valinor and Pelori or others
            </li>
            <li>
              In connection with, or during negotiations of, any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business by another company
            </li>
            <li>
              Between and among Valinor and Pelori and our current and future parents, affiliates, subsidiaries, and
              other companies under common control and ownership
            </li>
            <li>With your consent or at your direction</li>
          </ul>
          <p>
            We may also share aggregated or de-identified information, which cannot reasonably be used to identify you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className=" text-lg md:text-2xl font-semibold tracking-tight">Cookies and Tracking Technologies</h2>
          <p className=" text-sm md:text-base">
            We and our third-party providers use cookies, web beacons, and other tracking technologies to track
            information about your use of our Services. We may combine this information with other information we
            collect about you.
          </p>
          <div className="space-y-2">
            <h3 className=" text-base md:text-xl font-medium">Cookies</h3>
            <p className=" text-sm md:text-base">
              Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your
              browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies,
              this could affect the availability and functionality of our Services.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-md md:text-xl font-medium">Web Beacons</h3>
            <p className=" text-sm md:text-base">
              We may also use web beacons (also known as "pixel tags" or "clear GIFs") on our Services and in our
              emails. These tiny electronic images help us count visitors, understand how our Services are used, and
              measure the effectiveness of our email campaigns.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className=" text-base md:text-xl font-medium">Do Not Track</h3>
            <p className=" text-sm md:text-base">
              Some browsers offer a "Do Not Track" ("DNT") signal whereby you may indicate your preference regarding
              tracking and cross-site tracking activity. We currently do not respond to browser DNT signals. We will
              continue to monitor developments around DNT browser technology.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className=" text-lg md:text-2xl font-semibold tracking-tight">Data Security</h2>
          <p className=" text-sm md:text-base">
            We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized
            access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot
            guarantee the security of our systems or your information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className=" text-lg md:text-2xl font-semibold tracking-tight">Your Choices</h2>
          <div className="space-y-2">
            <h3 className=" text-base md:text-xl font-medium">Account Information</h3>
            <p className=" text-sm md:text-base">
              You may update, correct, or delete information about you at any time by logging into your online account
              or emailing us at privacy@valinorpelori.com. If you wish to delete or deactivate your account, please
              email us, but note that we may retain certain information as required by law or for legitimate business
              purposes.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className=" text-base md:text-xl font-medium">Promotional Communications</h3>
            <p className=" text-sm md:text-base">
              You may opt out of receiving promotional emails from Valinor and Pelori by following the instructions in
              those emails or by emailing us. If you opt out, we may still send you non-promotional emails, such as
              those about your account or our ongoing business relations.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="  text-lg md:text-2xl font-semibold tracking-tight">Children's Privacy</h2>
          <p className=" text-sm md:text-base">
            Our Services are not intended for children under 13 years of age. We do not knowingly collect personal
            information from children under 13. If you are a parent or guardian and believe we have collected
            information from your child under 13, please contact us so that we can delete the information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className=" text-lg md:text-2xl font-semibold tracking-tight">International Data Transfers</h2>
          <p className=" text-sm md:text-base">
            Valinor and Pelori is based in [Your Country], and the information we collect is governed by [Your Country]
            law. By accessing or using the Services or otherwise providing information to us, you consent to the
            processing and transfer of information in and to [Your Country] and other countries, where you may not have
            the same rights as you do under local law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className=" text-lg md:text-2xl font-semibold tracking-tight">Changes to this Privacy Policy</h2>
          <p className=" text-sm md:text-base"> 
            We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the
            date at the top of the policy and, in some cases, we may provide you with additional notice (such as adding
            a statement to our website homepage or sending you a notification). We encourage you to review the Privacy
            Policy whenever you access the Services or otherwise interact with us to stay informed about our information
            practices and the choices available to you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className=" text-lg md:text-2xl font-semibold tracking-tight">Contact Us</h2>
          <p className=" text-sm md:text-base">If you have any questions about this Privacy Policy, please contact us at:</p>
          <div className="not-prose">
            <address className="not-italic text-sm md:text-base">
              <p>Valinor and Pelori</p>
              <p>[Your Address]</p>
              <p>[Your City, State/Province, ZIP/Postal Code]</p>
              <p>[Your Country]</p>
              <p>Email: privacy@valinorpelori.com</p>
              <p>Phone: [Your Phone Number]</p>
            </address>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t">
        <div className="flex flex-col lg:flex-row  justify-between items-center">
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} Valinor and Pelori. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

