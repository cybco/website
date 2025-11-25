import MainLayout from "@/components/MainLayout";

export default function NFCReadWrite() {
  return (
    <MainLayout>
      <div className="bg-black min-h-screen">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6 text-white">Privacy Policy for NFC Read & Write</h1>

          <div className="text-white space-y-6">
            <p className="text-gray-400"><strong>Last Updated:</strong> January 25, 2025</p>

            <section>
              <h2 className="text-2xl font-bold mb-3">Overview</h2>
              <p>NFC Read & Write ("the App") is developed by Cybco and is designed to read and write data to NFC cards. This privacy policy explains how we handle your information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
              <p className="mb-4"><strong>We do not collect any personal information.</strong> The App operates entirely on your device without any data collection, transmission, or storage on external servers.</p>

              <h3 className="text-xl font-semibold mb-2">Local Data Storage</h3>
              <p className="mb-2">The App stores the following information locally on your device only:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>NFC Card History</strong>: Records of NFC cards you have read or written, including:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>URLs written to or read from cards</li>
                    <li>Text content written to or read from cards</li>
                    <li>Date and time of operations</li>
                    <li>Technical details about the NFC cards (card type, serial number, capacity)</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4">All of this data remains on your device and is never transmitted to Cybco or any third party.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">NFC Usage</h2>
              <p className="mb-2">The App uses your device&apos;s NFC hardware to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Read data from compatible NFC cards</li>
                <li>Write data to compatible NFC cards</li>
              </ul>
              <p className="mt-4">NFC operations occur locally between your device and the NFC card. No data is transmitted over the internet during NFC operations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Data We Do NOT Collect</h2>
              <p className="mb-2">We do not collect, store, or transmit:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identification information</li>
                <li>Contact information</li>
                <li>Location data</li>
                <li>Device identifiers</li>
                <li>Analytics data</li>
                <li>Crash reports</li>
                <li>Usage statistics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Third-Party Services</h2>
              <p>The App does not integrate with any third-party services or analytics platforms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Data Security</h2>
              <p className="mb-2">All data created by the App is stored locally on your device using iOS&apos;s secure storage mechanisms. You have full control over this data and can delete it at any time by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Clearing the app&apos;s history through the in-app interface</li>
                <li>Uninstalling the App from your device</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Children&apos;s Privacy</h2>
              <p>The App does not knowingly collect any information from children. The App is rated 4+ and is suitable for all ages.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">URL Handling</h2>
              <p>When you write URLs to NFC cards or read URLs from NFC cards, the App may display these URLs and provide the option to open them in your device&apos;s web browser. We do not track, log, or monitor which URLs you access.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Changes to This Privacy Policy</h2>
              <p>We may update this privacy policy from time to time. Any changes will be reflected in the &quot;Last Updated&quot; date at the top of this document. Continued use of the App after changes constitutes acceptance of the updated privacy policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Your Rights</h2>
              <p>Since we do not collect any personal information, there is no data for us to access, modify, or delete. All data remains under your control on your device.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
              <p className="mb-2">If you have any questions about this privacy policy, please contact us: <a href="https://www.cybco.com/contact" className="text-blue-400 hover:text-blue-300 underline">Contact Form</a></p>
              <p><strong>Developer:</strong> Cybco</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Compliance</h2>
              <p className="mb-2">This App complies with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Apple&apos;s App Store Review Guidelines</li>
                <li>iOS Privacy Requirements</li>
                <li>General Data Protection Regulation (GDPR) principles</li>
                <li>California Consumer Privacy Act (CCPA) principles</li>
              </ul>
              <p className="mt-4">By design, the App&apos;s local-only approach ensures maximum privacy protection for all users.</p>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
