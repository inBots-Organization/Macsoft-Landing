import { useState, useRef, useEffect } from "react";
import { Button, Input } from "@heroui/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiCheckCircle, FiAlertCircle, FiArrowLeft } from "react-icons/fi";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function InterestForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://www.google.com/recaptcha/api.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      // Clean up reCAPTCHA
      if (window.grecaptcha) {
        const badge = document.querySelector('.grecaptcha-badge');
        if (badge?.parentElement) {
          badge.parentElement.remove();
        }
      }
    };
  }, []);

  const validatePhone = (phone: string): boolean => {
    // Basic phone validation - accepts various formats
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleBlur = (field: string) => {
    setFocusedField(null);

    // Validate on blur
    const newErrors = { ...errors };

    if (field === 'email' && formData.email && !validateEmail(formData.email)) {
      newErrors.email = t('interest_form.errors.invalid_email', 'Please enter a valid email address');
    }

    if (field === 'phone' && formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = t('interest_form.errors.invalid_phone', 'Please enter a valid phone number');
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Validate all fields
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('interest_form.errors.required_name', 'Name is required');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('interest_form.errors.required_email', 'Email is required');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('interest_form.errors.invalid_email', 'Please enter a valid email address');
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = t('interest_form.errors.invalid_phone', 'Please enter a valid phone number');
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Get reCAPTCHA token
      const recaptchaToken = window.grecaptcha.getResponse();

      if (!recaptchaToken) {
        setSubmitStatus({
          type: "error",
          message: t('interest_form.errors.captcha_required', 'Please complete the reCAPTCHA verification'),
        });
        setIsSubmitting(false);
        return;
      }

      // Make API request to /interests/add
      const apiUrl = import.meta.env.VITE_SERVER_URL ;
      const response = await fetch(`${apiUrl}/interests/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // const data = await response.json();

      setSubmitStatus({
        type: "success",
        message: t('interest_form.success_message', "Thank you for your interest! We'll be in touch soon."),
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "" });
      setErrors({});
      window.grecaptcha.reset();
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: "error",
        message: t('interest_form.errors.submission_failed', 'Something went wrong. Please try again.'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] px-4 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="w-full max-w-lg relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('interest_form.title', 'Join Our Journey')}
            </h1>
          </motion.div>
          <p className="text-gray-400 text-lg">
            {t('interest_form.subtitle', "We'd love to hear from you. Share your details and let's connect!")}
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Input
                type="text"
                name="name"
                label={t('interest_form.fields.name', 'Full Name')}
                placeholder={t('interest_form.placeholders.name', 'John Doe')}
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => handleBlur('name')}
                required
                isRequired
                isInvalid={!!errors.name}
                errorMessage={errors.name}
                variant="bordered"
                startContent={
                  <FiUser className={`text-xl transition-colors duration-300 ${focusedField === 'name' ? 'text-primary' : 'text-gray-400'}`} />
                }
                classNames={{
                  input: "text-white",
                  label: "text-gray-300 group-data-[filled=true]:text-primary",
                  inputWrapper: "border-gray-700 group-data-[focus=true]:border-primary group-data-[hover=true]:border-gray-600 transition-all duration-300",
                }}
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Input
                type="email"
                name="email"
                label={t('interest_form.fields.email', 'Email Address')}
                placeholder={t('interest_form.placeholders.email', 'john@example.com')}
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => handleBlur('email')}
                required
                isRequired
                isInvalid={!!errors.email}
                errorMessage={errors.email}
                variant="bordered"
                startContent={
                  <FiMail className={`text-xl transition-colors duration-300 ${focusedField === 'email' ? 'text-primary' : 'text-gray-400'}`} />
                }
                classNames={{
                  input: "text-white",
                  label: "text-gray-300 group-data-[filled=true]:text-primary",
                  inputWrapper: "border-gray-700 group-data-[focus=true]:border-primary group-data-[hover=true]:border-gray-600 transition-all duration-300",
                }}
              />
            </motion.div>

            {/* Phone Field */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Input
                type="tel"
                name="phone"
                label={t('interest_form.fields.phone', 'Phone Number')}
                placeholder={t('interest_form.placeholders.phone', '+1 (555) 123-4567')}
                value={formData.phone}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => handleBlur('phone')}
                isInvalid={!!errors.phone}
                errorMessage={errors.phone}
                variant="bordered"
                description={t('interest_form.hints.phone', 'Optional - We may call to discuss opportunities')}
                startContent={
                  <FiPhone className={`text-xl transition-colors duration-300 ${focusedField === 'phone' ? 'text-primary' : 'text-gray-400'}`} />
                }
                classNames={{
                  input: "text-white",
                  label: "text-gray-300 group-data-[filled=true]:text-primary",
                  inputWrapper: "border-gray-700 group-data-[focus=true]:border-primary group-data-[hover=true]:border-gray-600 transition-all duration-300",
                  description: "text-gray-500 text-xs",
                }}
              />
            </motion.div>

            {/* reCAPTCHA */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center py-4"
            >
              <AnimatePresence>
                {recaptchaLoaded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      ref={recaptchaRef}
                      className="g-recaptcha"
                      data-sitekey="6LdfozYsAAAAAMlUKIoPCmotozQDs9PVfnJgnnzK"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Status Messages */}
            <AnimatePresence mode="wait">
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`p-4 rounded-xl text-center flex items-center justify-center gap-3 ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 text-green-400 border border-green-500/30"
                        : "bg-red-500/10 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <FiCheckCircle className="text-2xl" />
                    ) : (
                      <FiAlertCircle className="text-2xl" />
                    )}
                    <span className="font-medium">{submitStatus.message}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full font-semibold text-base shadow-lg shadow-primary/20 transition-all duration-300"
                isLoading={isSubmitting}
                isDisabled={isSubmitting}
              >
                {isSubmitting ? t('interest_form.buttons.submitting', 'Submitting...') : t('interest_form.buttons.submit', 'Submit Interest')}
              </Button>
            </motion.div>

            {/* Return Home Link */}
            <motion.div variants={itemVariants} className="text-center pt-4">
              <Button
                as={Link}
                to="/"
                variant="light"
                startContent={<FiArrowLeft />}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {t('interest_form.buttons.back', 'Back to Home')}
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            {t('interest_form.privacy_note', 'Your information is secure and will never be shared with third parties.')}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
