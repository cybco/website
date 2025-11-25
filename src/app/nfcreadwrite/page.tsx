import MainLayout from "@/components/MainLayout";

export default function NFCReadWrite() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">NFC Read/Write</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Welcome to the NFC Read/Write page.
          </p>
          {/* Add your NFC content here */}
        </div>
      </div>
    </MainLayout>
  );
}
