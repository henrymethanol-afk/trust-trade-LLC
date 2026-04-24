'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2),
  company: z.string().min(1),
  country: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  product: z.string().default('Methanol (CH₃OH)'),
  volume: z.string().optional(),
  deliveryTerms: z.enum(['FOB', 'CIF', 'Both']),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface InputProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/70 mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1 text-red-400 text-xs">{error}</p>}
    </div>
  );
}

const inputClass =
  'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all';

const lightInputClass =
  'w-full bg-bgLight border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all';

export default function RFQForm({ dark = false }: { dark?: boolean }) {
  const t = useTranslations('contact');
  const ic = dark ? inputClass : lightInputClass;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { product: 'Methanol (CH₃OH)', deliveryTerms: 'Both' },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed');

      toast.success(t('successTitle'), { description: t('successMessage') });
      reset();
    } catch {
      toast.error(t('errorMessage'));
    }
  };

  const labelClass = dark ? 'block text-sm font-medium text-white/70 mb-1.5' : 'block text-sm font-medium text-gray-700 mb-1.5';
  const errorClass = 'mt-1 text-red-400 text-xs';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label className={labelClass}>{t('fields.fullName')} *</label>
          <input
            {...register('fullName')}
            type="text"
            placeholder={t('placeholders.fullName')}
            className={ic}
          />
          {errors.fullName && <p className={errorClass}>{t('required')}</p>}
        </div>

        {/* Company */}
        <div>
          <label className={labelClass}>{t('fields.company')} *</label>
          <input
            {...register('company')}
            type="text"
            placeholder={t('placeholders.company')}
            className={ic}
          />
          {errors.company && <p className={errorClass}>{t('required')}</p>}
        </div>

        {/* Country */}
        <div>
          <label className={labelClass}>{t('fields.country')} *</label>
          <input
            {...register('country')}
            type="text"
            placeholder={t('placeholders.country')}
            className={ic}
          />
          {errors.country && <p className={errorClass}>{t('required')}</p>}
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>{t('fields.email')} *</label>
          <input
            {...register('email')}
            type="email"
            placeholder={t('placeholders.email')}
            className={ic}
          />
          {errors.email && <p className={errorClass}>{t('invalidEmail')}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass}>{t('fields.phone')}</label>
          <input
            {...register('phone')}
            type="tel"
            placeholder={t('placeholders.phone')}
            className={ic}
          />
        </div>

        {/* Product */}
        <div>
          <label className={labelClass}>{t('fields.product')}</label>
          <input
            {...register('product')}
            type="text"
            className={ic}
            readOnly
          />
        </div>

        {/* Volume */}
        <div>
          <label className={labelClass}>{t('fields.volume')}</label>
          <input
            {...register('volume')}
            type="text"
            placeholder={t('placeholders.volume')}
            className={ic}
          />
        </div>

        {/* Delivery Terms */}
        <div>
          <label className={labelClass}>{t('fields.deliveryTerms')} *</label>
          <select {...register('deliveryTerms')} className={ic}>
            <option value="FOB">{t('deliveryOptions.fob')}</option>
            <option value="CIF">{t('deliveryOptions.cif')}</option>
            <option value="Both">{t('deliveryOptions.both')}</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>{t('fields.message')}</label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder={t('placeholders.message')}
          className={`${ic} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 bg-gold text-navy font-inter font-bold rounded-xl hover:bg-gold-light transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {t('submitting')}
          </>
        ) : (
          t('submit')
        )}
      </button>
    </form>
  );
}
