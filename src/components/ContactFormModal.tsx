import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const EMAILJS_SERVICE_ID = 'service_wh2eybl';
export const EMAILJS_TEMPLATE_ID = 'template_4bgpsc9';
export const EMAILJS_USER_ID = 'wR6XhGscvEJvNTDu6';

export function ContactFormModal({ 
  onSuccess, 
  onError 
}: { 
  onClose?: () => void;
  onSuccess?: (message: string) => void;
  onError?: (message: string) => void;
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (
      !/^(\+?\d{1,3}[-. ]?)?(\(?\d{3}\)?[-. ]?)?\d{3}[-. ]?\d{4}$/.test(formData.phone.trim())
    ) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Street address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);

      const templateParams = {
        to_email: 'oxaleinfo@gmail.com',
        emailSubject: `Personal Details Form from SHCounselors | Zinu`,
        fromName: `${formData.firstName} ${formData.lastName}`,
        first_name: formData.firstName,
        last_name: formData.lastName,
        user_email: formData.email,
        user_phone: formData.phone,
        user_street_address: formData.streetAddress,
        user_city: formData.city,
        user_state: formData.state,
        user_zip_code: formData.zipCode,
        reply_to: formData.email
      };

      emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      )
        .then(() => {
          setIsSubmitting(false);
          const message = 'Thank you! Your information has been submitted successfully. We will contact you shortly.';
          
          // Reset form after successful submission
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: ''
          });
          
          // Call success handler from App component
          if (onSuccess) {
            onSuccess(message);
          }
        })
        .catch((err) => {
          console.error('Error sending email:', err);
          setIsSubmitting(false);
          const message = 'Sorry, there was an error submitting your information. Please try again or contact us directly.';
          
          // Call error handler from App component
          if (onError) {
            onError(message);
          }
        });
    }
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Personal Details
          </h2>
          <div className="h-px w-full bg-gray-200"></div>
        </div>
        
        <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
            <div className="space-y-1">
              <input 
                type="text" 
                name="firstName"
                placeholder="First Name" 
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-2 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs sm:text-base ${
                  errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div className="space-y-1">
              <input 
                type="text" 
                name="lastName"
                placeholder="Last Name" 
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-2 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs sm:text-base ${
                  errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
            <div className="space-y-1">
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-2 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs sm:text-base ${
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="space-y-1">
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-2 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs sm:text-base ${
                  errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Address Fields */}
          <div className="space-y-4 sm:space-y-6">
            {/* Street Address and City - Same Line */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="space-y-1">
                <input 
                  type="text" 
                  name="streetAddress"
                  placeholder="Street Address" 
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className={`w-full px-2 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs sm:text-base ${
                    errors.streetAddress ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.streetAddress && <p className="text-red-500 text-xs mt-1">{errors.streetAddress}</p>}
              </div>
              <div className="space-y-1">
                <input 
                  type="text" 
                  name="city"
                  placeholder="City" 
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-2 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs sm:text-base ${
                    errors.city ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>
            </div>

            {/* State and Zip */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="space-y-1">
                <input 
                  type="text" 
                  name="state"
                  placeholder="State" 
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full px-2 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs sm:text-base ${
                    errors.state ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
              </div>
              <div className="space-y-1">
                <input 
                  type="text" 
                  name="zipCode"
                  placeholder="Zip Code" 
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={`w-full px-2 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs sm:text-base ${
                    errors.zipCode ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 sm:pt-6">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-3 sm:py-4 px-6 rounded-md font-medium transition-all duration-200 text-sm sm:text-base ${
                isSubmitting 
                  ? 'bg-gray-400 text-gray-700 cursor-not-allowed transform scale-95' 
                  : 'bg-[#1a3a5f] text-white hover:bg-[#0d2c4a] hover:shadow-lg active:transform active:scale-95'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}