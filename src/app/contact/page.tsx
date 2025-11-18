import MainLayout from "@/components/MainLayout";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - CYBERNETICS CORPORATION",
  description: "Get in touch with us",
};

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="bg-black">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-300 mb-6">
              We are a boutique app development studio specializing in modern mobile and web applications. Our small team delivers big results, transforming complex ideas into elegant, user-friendly solutions.
            </p>
            <p className="text-lg text-gray-400">
              Have a question or want to work together? Send us a message!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
