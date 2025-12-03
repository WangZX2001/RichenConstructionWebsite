import { Footer } from "../components/footer";
import { motion } from "motion/react";

export function TermsOfServicePage() {
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
            Terms of Service
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
            <h2 className="text-2xl mb-4 text-slate-900">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using the services of Richen Construction Pte Ltd, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">2. Services Description</h2>
            <p className="text-gray-700 mb-4">
              Richen Construction Pte Ltd specializes in facade solutions for commercial and residential buildings. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Facade design and installation</li>
              <li>Commercial building construction</li>
              <li>Residential building construction</li>
              <li>Renovation and restoration services</li>
              <li>Project consultation and management</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">3. Project Contracts</h2>
            <p className="text-gray-700 mb-4">
              All construction projects require a separate written contract that will outline the specific scope of work, timeline, payment terms, and other project-specific details. These Terms of Service govern the general relationship between Richen Construction and its clients.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">4. Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payment terms will be specified in individual project contracts. Generally:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>A deposit may be required before work commences</li>
              <li>Progress payments will be made according to project milestones</li>
              <li>Final payment is due upon project completion and client acceptance</li>
              <li>Late payments may incur interest charges as specified in the contract</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">5. Warranties and Guarantees</h2>
            <p className="text-gray-700 mb-4">
              Richen Construction Pte Ltd provides warranties on workmanship and materials as specified in individual project contracts. We stand behind the quality of our work and will address any defects in materials or workmanship within the warranty period.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">6. Changes and Modifications</h2>
            <p className="text-gray-700 mb-4">
              Any changes to the agreed-upon scope of work must be documented in writing through a change order. Additional costs and time extensions resulting from changes will be detailed in the change order and require client approval before implementation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Richen Construction Pte Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use our services. Our total liability shall not exceed the contract value of the specific project in question.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">8. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All designs, plans, and documents created by Richen Construction Pte Ltd remain our intellectual property unless otherwise specified in the project contract. Clients receive a license to use these materials for the specific project only.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">9. Termination</h2>
            <p className="text-gray-700 mb-4">
              Either party may terminate a project contract under the conditions specified in the individual contract. Termination procedures, including payment for work completed and materials procured, will be handled according to the contract terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">10. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service and any separate project contracts shall be governed by and construed in accordance with the laws of Singapore. Any disputes arising from these terms or our services shall be resolved in the courts of Singapore.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-slate-900">11. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: wenwu1968@gmail.com<br />
              Address: 10 Jalan Besar, #07-05 Sim Lim Tower Singapore 208787
            </p>
          </section>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
