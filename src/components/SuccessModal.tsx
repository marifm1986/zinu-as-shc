interface SuccessModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  type: 'success' | 'error';
}

export function SuccessModal({ isOpen, message, onClose, type }: SuccessModalProps) {
  if (!isOpen) return null;

  const isSuccess = type === 'success';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
        <div className="mb-4">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
            isSuccess ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {isSuccess ? (
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {isSuccess ? 'Success!' : 'Error'}
          </h3>
          <p className="text-gray-600">{message}</p>
        </div>
        <button
          onClick={onClose}
          className={`px-6 py-2 rounded-md text-white transition-colors ${
            isSuccess 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-red-600 hover:bg-red-700'
          }`}
        >
          Close
        </button>
      </div>
    </div>
  );
}
