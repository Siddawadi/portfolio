import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

export const Contact = () => {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    const response = await fetch('https://formspree.io/f/mgoqnbrk', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      setStatus('success')
      reset()
    } else {
      setStatus('error')
    }
    setIsSubmitting(false)
  }

  return (
    <section className="py-40 px-8 max-w-7xl mx-auto border-t border-black">

      <div className="mb-20">
        <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 block mb-3">
          04 / Contact
        </span>
        <h2 className="font-display font-bold text-3xl tracking-tight uppercase text-[#0a0a0c]">
          Get In Touch
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className="lg:col-span-5 space-y-8">
          <p
            style={{ fontFamily: '"Plus Jakarta Sans"' }}
            className="font-extralight text-black leading-relaxed"
          >
            Have a project in mind, want to collaborate, or just want to say hello?
            I'm currently open to internship opportunities and freelance work.
          </p>

          <div className="space-y-3 font-mono text-[11px] uppercase tracking-widest text-neutral-400">
            <p>siddharthadawadi123@gmail.com</p>
            <p>Kathmandu, Nepal</p>
            <p>Available for internships</p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:pl-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                Name
              </label>
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Siddhartha Dawadi"
                className="w-full border-b border-neutral-200 bg-transparent py-3 text-sm font-light text-black outline-none placeholder:text-neutral-300 focus:border-black transition-colors duration-300"
              />
              {errors.name && (
                <p className="font-mono text-[10px] text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                Email
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                })}
                placeholder="you@example.com"
                className="w-full border-b border-neutral-200 bg-transparent py-3 text-sm font-light text-black outline-none placeholder:text-neutral-300 focus:border-black transition-colors duration-300"
              />
              {errors.email && (
                <p className="font-mono text-[10px] text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                Message
              </label>
              <textarea
                {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message too short' } })}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full border-b border-neutral-200 bg-transparent py-3 text-sm font-light text-black outline-none placeholder:text-neutral-300 focus:border-black transition-colors duration-300 resize-none"
              />
              {errors.message && (
                <p className="font-mono text-[10px] text-red-400">{errors.message.message}</p>
              )}
            </div>

            <div className="flex items-center gap-6">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="font-mono text-[11px] uppercase tracking-widest text-black border border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <p className="font-mono text-[10px] text-green-600 uppercase tracking-widest">
                  Message sent ✓
                </p>
              )}
              {status === 'error' && (
                <p className="font-mono text-[10px] text-red-400 uppercase tracking-widest">
                  Something went wrong.
                </p>
              )}
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}