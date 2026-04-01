import { Link } from '@inertiajs/react'
import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form'

// ─── Scroll To Top ────────────────────────────────────────────────────────────
function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) return null;

    return (
        <button
            onClick={scrollUp}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-[999] w-11 h-11 rounded-full bg-[#bb1403] hover:bg-[#9e1102] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:-translate-y-1 active:translate-y-0"
        >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const TicketIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
  </svg>
)

const UserIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const ChevronIcon = () => (
  <svg className="w-4 h-4 text-gray-400 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const PaperclipIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
  </svg>
)

const SendIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="w-16 h-16 text-[#bb1403]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const XIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

// ─── Field wrapper ────────────────────────────────────────────────────────────
const Field = ({ label, required, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-md font-bold text-gray-700 flex items-center gap-1">
      {label}
      {required && <span className="text-[#bb1403]">*</span>}
    </label>
    {children}
    {error && (
      <p className="text-md text-[#bb1403] font-medium flex items-center gap-1 mt-0.5">
        <span className="inline-block w-1 h-1 rounded-full bg-[#bb1403]" />
        {error}
      </p>
    )}
  </div>
)

const inputCls = (err) =>
  `w-full px-3.5 py-2.5 rounded-xl border text-sm text-gray-800 bg-white outline-none transition-all duration-150
   placeholder:text-gray-400 focus:ring-2 focus:ring-[#bb1403]/20 focus:border-[#bb1403]
   ${err ? 'border-[#bb1403]/60 bg-red-50/30' : 'border-gray-200 hover:border-gray-300'}`

// ─── Section heading helper ───────────────────────────────────────────────────
function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-3 -mb-1">
      <h3 className="text-xl font-bold text-gray-800 uppercase leading-relaxed tracking-wide">{title}</h3>
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
const generateTicketId = () =>
  '#TK-' + Math.floor(1000 + Math.random() * 9000)

export default function ServiceTicket() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  const [submitted, setSubmitted] = useState(false)
  const [ticketId, setTicketId]   = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [file, setFile]           = useState(null)
  const [supportFor, setSupportFor] = useState([])
  const [submitError, setSubmitError] = useState('')
  const fileInputRef = useRef(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const SUPPORT_OPTIONS = [
    { value: 'amc_partner',      label: 'AMC Partner',            sub: 'Partner Code' },
    { value: 'product_supplier', label: 'Product Supply Partner', sub: 'Company Detail' },
    { value: 'new_registration', label: 'NEW',                    sub: 'All Details to register' },
  ]

  const toggleSupport = (val) =>
    setSupportFor((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    )

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files || [])
    const picked = selected[0] || null
    const maxSize = 2 * 1024 * 1024
    if (picked && /\.(jpe?g|png|pdf)$/i.test(picked.name) && picked.size <= maxSize) {
      setFile(picked)
      setSubmitError('')
    } else {
      if (picked && picked.size > maxSize) {
        setSubmitError('File size must be 2 MB or less.')
      } else if (picked) {
        setSubmitError('Only PDF, JPG, or PNG files are allowed.')
      }
      setFile(null)
    }
    e.target.value = ''
  }

  const removeFile = () => setFile(null)

  const onSubmit = async (data) => {
    if (supportFor.length === 0) return
    setIsLoading(true)
    setSubmitError('')
    const id = generateTicketId()

    const formData = new FormData()
    formData.append('requesterName', data.requesterName)
    formData.append('email', data.email)
    formData.append('priorityLevel', data.priorityLevel)
    formData.append('productService', data.productService)
    formData.append('categoryDepartment', data.categoryDepartment)
    formData.append('subjectLine', data.subjectLine)
    formData.append('detailedDescription', data.detailedDescription)
    formData.append('requestSupportFor', JSON.stringify(supportFor))
    if (file) formData.append('attachment', file)

    try {
      const response = await axios.post('/service-tickets', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      const serverTicketId = response?.data?.data?.ticket_id || id
      setTicketId(serverTicketId)
      setSubmitted(true)
      reset()
      setFile(null)
      setSupportFor([])
    } catch (err) {
      setSubmitError('Failed to submit ticket. Please try again.')
      console.error('Service ticket submit error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  // ── Success screen ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ fontFamily: 'Barlow, sans-serif', background: 'linear-gradient(135deg,#fdf5f5 0%,#fff 60%)' }}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border border-gray-100 flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center">
            <CheckCircleIcon />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900">Ticket Submitted!</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Your service request has been received. Our team will get back to you shortly.
          </p>
          <div className="bg-red-50 border border-[#bb1403]/20 rounded-2xl px-6 py-4 w-full">
            <p className="text-xs text-gray-400 font-medium mb-1">Your Ticket ID</p>
            <p className="text-2xl font-extrabold text-[#bb1403] tracking-widest">{ticketId}</p>
          </div>
          <p className="text-xs text-gray-400">A confirmation has been sent to <strong>admin@gmail.com</strong></p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-2 px-8 py-3 bg-[#bb1403] hover:bg-[#9e1102] text-white font-bold rounded-full transition-colors text-sm"
          >
            Submit Another Ticket
          </button>
        </div>
        <ScrollToTop />
      </div>
    )
  }

  // ── Form ────────────────────────────────────────────────────────────────────
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
        rel="stylesheet"
      />

      {/* Hero Banner */}
      <div className="relative flex min-h-[420px] items-center justify-center bg-[url('/images/about-bg.jpg')] bg-cover bg-center bg-no-repeat px-6 py-12 sm:min-h-[420px] sm:py-20 lg:min-h-[550px] lg:bg-fixed">
        <div className="absolute inset-0 bg-gray-900/70 pointer-events-none" />
        <div className="relative z-20 flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold uppercase text-white sm:text-5xl lg:text-6xl">Service Ticket</h2>
          <h3 className="mt-2 text-sm font-semibold text-white sm:text-base lg:text-xl">
            <Link href="/" className="hover:text-red-500 transition-colors duration-300">Home</Link>
            <span className="mx-2">/</span>
            <span>Service Ticket</span>
          </h3>
        </div>
      </div>

      {/* Page header */}
      <div className="max-w-7xl mx-auto mb-8 text-center pt-12 sm:px-0 px-4">
        <h1 className="text-2xl sm:text-5xl font-bold text-gray-900 leading-relaxed mb-2">
          Submit a Service Ticket
        </h1>
        <p className="text-gray-500 text-sm sm:text-md">
          Fill in the details below and our team will respond as quickly as possible.
        </p>
      </div>

      {/* Card / Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12"
      >
        <div className="h-1.5 bg-gradient-to-r from-[#bb1403] to-[#e84a35]" />

        <div className="p-6 sm:p-8 flex flex-col gap-6">

          {/* Section 1 */}
          <SectionHeading title="Your Information" />
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Requester Name" required error={errors.requesterName?.message}>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2"><UserIcon /></span>
                <input
                  {...register('requesterName', { required: 'Name is required' })}
                  placeholder="John Doe"
                  className={`${inputCls(errors.requesterName)} pl-9`}
                />
              </div>
            </Field>
            <Field label="Email Address" required error={errors.email?.message}>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2"><MailIcon /></span>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                  })}
                  type="email"
                  placeholder="you@company.com"
                  className={`${inputCls(errors.email)} pl-9`}
                />
              </div>
            </Field>
          </div>

          {/* Section 2 */}
          <SectionHeading number="02" title="Request Support For" />
          <div className="flex flex-col gap-3">
            {SUPPORT_OPTIONS.map((opt) => {
              const checked = supportFor.includes(opt.value)
              return (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => toggleSupport(opt.value)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-left transition-all duration-150 cursor-pointer w-full
                    ${checked ? 'border-[#bb1403] bg-[#bb1403]/5' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
                >
                  <span className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors
                    ${checked ? 'bg-[#bb1403] border-[#bb1403]' : 'border-gray-300'}`}>
                    {checked && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <div>
                    <p className={`text-sm font-bold ${checked ? 'text-[#bb1403]' : 'text-gray-700'}`}>{opt.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{opt.sub}</p>
                  </div>
                </button>
              )
            })}
            {supportFor.length === 0 && (
              <p className="text-xs text-[#bb1403] font-medium flex items-center gap-1">
                <span className="inline-block w-1 h-1 rounded-full bg-[#bb1403]" />
                Please select at least one option
              </p>
            )}
          </div>

          {/* Section 3 */}
          <SectionHeading number="03" title="Ticket Details" />
          <div className="grid sm:grid-cols-3 gap-5">
            <Field label="Priority Level" required error={errors.priorityLevel?.message}>
              <div className="relative">
                <select {...register('priorityLevel', { required: 'Select a priority' })}
                  className={`${inputCls(errors.priorityLevel)} appearance-none pr-9`} defaultValue="">
                  <option value="" disabled>Select…</option>
                  {['Low', 'Medium', 'High', 'Urgent'].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                <ChevronIcon />
              </div>
            </Field>
            <Field label="Product / Service" required error={errors.productService?.message}>
              <div className="relative">
                <select {...register('productService', { required: 'Select a product' })}
                  className={`${inputCls(errors.productService)} appearance-none pr-9`} defaultValue="">
                  <option value="" disabled>Select…</option>
                  {['Fire Alarm', 'PAVA', 'IoT', 'Automation', 'Lighting', 'Other'].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                <ChevronIcon />
              </div>
            </Field>
            <Field label="Category / Department" required error={errors.categoryDepartment?.message}>
              <div className="relative">
                <select {...register('categoryDepartment', { required: 'Select a category' })}
                  className={`${inputCls(errors.categoryDepartment)} appearance-none pr-9`} defaultValue="">
                  <option value="" disabled>Select…</option>
                  {['Billing', 'Tech Support', 'Account', 'HR'].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                <ChevronIcon />
              </div>
            </Field>
          </div>

          <Field label="Subject Line" required error={errors.subjectLine?.message}>
            <input
              {...register('subjectLine', {
                required: 'Subject is required',
                minLength: { value: 5, message: 'At least 5 characters' },
              })}
              placeholder="Brief summary of your issue…"
              className={inputCls(errors.subjectLine)}
            />
          </Field>

          <Field label="Detailed Description" required error={errors.detailedDescription?.message}>
            <textarea
              {...register('detailedDescription', {
                required: 'Please describe your issue',
                minLength: { value: 20, message: 'At least 20 characters' },
              })}
              rows={5}
              placeholder="Describe the issue in detail, including steps to reproduce if applicable…"
              className={`${inputCls(errors.detailedDescription)} resize-none`}
            />
          </Field>

          {/* Section 4 */}
          <SectionHeading number="04" title="File Attachment" />
          <div>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-200 hover:border-[#bb1403]/40 rounded-2xl p-6 flex flex-col items-center gap-2 cursor-pointer transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-red-50 flex items-center justify-center transition-colors text-gray-400 group-hover:text-[#bb1403]">
                <PaperclipIcon />
              </span>
              <p className="text-sm font-semibold text-gray-600 group-hover:text-[#bb1403] transition-colors">Click to attach files</p>
              <p className="text-xs text-gray-400">Supports .jpg, .png, .pdf — max 2 MB</p>
            </div>
            <input ref={fileInputRef} type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleFileChange} className="hidden" />
            {file && (
              <ul className="mt-3 flex flex-col gap-2">
                <li className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-3.5 py-2.5 border border-gray-100">
                  <span className="text-[#bb1403]"><PaperclipIcon /></span>
                  <span className="text-sm text-gray-700 flex-1 truncate font-medium">{file.name}</span>
                  <span className="text-xs text-gray-400">{(file.size / 1024).toFixed(1)} KB</span>
                  <button type="button" onClick={removeFile}
                    className="w-5 h-5 rounded-full bg-gray-200 hover:bg-red-100 hover:text-[#bb1403] flex items-center justify-center transition-colors cursor-pointer">
                    <XIcon />
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Submit */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="submit"
              disabled={isLoading || supportFor.length === 0}
              className="flex items-center justify-center gap-2 px-8 py-3 bg-[#bb1403] hover:bg-[#9e1102] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-full transition-all text-sm shadow-md shadow-[#bb1403]/20 hover:shadow-lg hover:shadow-[#bb1403]/30 hover:-translate-y-0.5 active:translate-y-0 min-w-[160px]"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  <SendIcon />
                  Submit Ticket
                </>
              )}
            </button>
          </div>
          {submitError && (
            <p className="text-sm text-red-600 font-semibold">{submitError}</p>
          )}

        </div>
      </form>

      {/* Scroll to top */}
      <ScrollToTop />
    </>
  )
}