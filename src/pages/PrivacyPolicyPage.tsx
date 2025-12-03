import { Footer } from "../components/footer";
import { motion } from "motion/react";

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300"
          >
            Last updated: December 2, 2025
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-lg max-w-none"
        >
          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              Richen Construction Pte Ltd ("we", "our", or "us")
              is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you
              visit our website or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We may collect information about you in a variety
              of ways. The information we may collect includes:
            </p>

            <h3 className="text-xl mb-3 text-slate-900 mt-6">
              Personal Data
            </h3>
            <p className="text-gray-700 mb-4">
              Personally identifiable information, such as your
              name, shipping address, email address, and
              telephone number, that you voluntarily give to us
              when you contact us or when you choose to
              participate in various activities related to our
              services.
            </p>

            <h3 className="text-xl mb-3 text-slate-900 mt-6">
              Project Information
            </h3>
            <p className="text-gray-700 mb-4">
              Information related to construction projects,
              including property details, project
              specifications, and other relevant construction
              information.
            </p>

            <h3 className="text-xl mb-3 text-slate-900 mt-6">
              Financial Information
            </h3>
            <p className="text-gray-700 mb-4">
              Financial information related to project
              contracts, quotes, and payment processing, which
              is handled securely and in accordance with
              applicable financial regulations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect in the following
              ways:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                To provide and maintain our construction
                services
              </li>
              <li>
                To communicate with you about projects, quotes,
                and services
              </li>
              <li>
                To process your transactions and send related
                information
              </li>
              <li>To send you updates about your projects</li>
              <li>
                To respond to your inquiries and provide
                customer support
              </li>
              <li>
                To improve our services and develop new
                offerings
              </li>
              <li>
                To comply with legal obligations and protect our
                rights
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">
              4. Disclosure of Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We may share information we have collected about
              you in certain situations:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Business Partners:</strong> We may share
                your information with contractors, suppliers,
                and other business partners who assist us in
                providing our services
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may
                disclose your information if required to do so
                by law or in response to valid requests by
                public authorities
              </li>
              <li>
                <strong>Business Transfers:</strong> We may
                share or transfer your information in connection
                with a merger, sale, or acquisition of all or a
                portion of our business
              </li>
              <li>
                <strong>With Your Consent:</strong> We may
                disclose your information for any other purpose
                with your consent
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">
              5. Security of Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use administrative, technical, and physical
              security measures to help protect your personal
              information. While we have taken reasonable steps
              to secure the personal information you provide to
              us, please be aware that no security measures are
              perfect or impenetrable, and no method of data
              transmission can be guaranteed against any
              interception or other type of misuse.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">
              6. Data Retention
            </h2>
            <p className="text-gray-700 mb-4">
              We will retain your personal information for as
              long as necessary to fulfill the purposes outlined
              in this Privacy Policy, unless a longer retention
              period is required or permitted by law.
              Project-related information may be retained for
              extended periods to comply with legal, regulatory,
              or contractual obligations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">
              7. Your Privacy Rights
            </h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have the
              following rights regarding your personal
              information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                The right to access – You have the right to
                request copies of your personal data
              </li>
              <li>
                The right to rectification – You have the right
                to request that we correct any information you
                believe is inaccurate or incomplete
              </li>
              <li>
                The right to erasure – You have the right to
                request that we erase your personal data, under
                certain conditions
              </li>
              <li>
                The right to restrict processing – You have the
                right to request that we restrict the processing
                of your personal data, under certain conditions
              </li>
              <li>
                The right to data portability – You have the
                right to request that we transfer the data we
                have collected to another organization, or
                directly to you, under certain conditions
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">
              8. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 mb-4">
              Our website may use cookies and similar tracking
              technologies to enhance your browsing experience.
              You can instruct your browser to refuse all
              cookies or to indicate when a cookie is being
              sent. However, if you do not accept cookies, you
              may not be able to use some portions of our
              website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">
              9. Third-Party Websites
            </h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party
              websites. We are not responsible for the privacy
              practices or content of these third-party sites.
              We encourage you to read the privacy policies of
              any third-party sites you visit.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">
              10. Children's Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              Our services are not intended for children under
              the age of 18. We do not knowingly collect
              personal information from children under 18. If
              you become aware that a child has provided us with
              personal information, please contact us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update our Privacy Policy from time to
              time. We will notify you of any changes by posting
              the new Privacy Policy on this page and updating
              the "Last updated" date. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">
              12. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions or comments about this
              Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: wenwu1968@gmail.com
              <br />
              Address: 10 Jalan Besar, #07-05 Sim Lim Tower
              Singapore 208787
            </p>
          </section>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}