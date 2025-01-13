'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LoginSchema } from '@/schema/auth.schema'
import { PasswordInput } from '@/components/password-input'

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <Form {...form}>
      <form noValidate className='login-form mx-auto w-full p-6'>
        <div className='grid grid-cols-1 gap-6'>
          {/* Email Field */}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <div className='grid gap-2'>
                  <Label htmlFor='email' className='text-[16px] font-medium'>
                    Email<sup aria-hidden='true'>*</sup>
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='example@gmail.com'
                    required
                    {...field}
                    className='px-[15px] py-[23px] border-black'
                  />
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          {/* Password Field */}
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <div className='grid gap-2'>
                  <Label htmlFor='password' className='text-[16px] font-medium'>
                    Password<sup aria-hidden='true'>*</sup>
                  </Label>
                  <Input
                    id='password'
                    type='password'
                    placeholder='********'
                    required
                    {...field}
                    className='px-[15px] py-[23px] border-black'
                  />
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className='text-right'>
            <a
              href='#recover'
              className='text-lg text-black underline hover:text-blue-500 transition-all duration-500 ease-in-out'
            >
              Forgot your password?
            </a>
          </div>
          <div className='text-center space-y-4'>
            <p className='text-md'>
              By continuing, you agree to the{' '}
              <a
                href='/pages/terms-conditions'
                className='text-black underline hover:text-blue-500 transition-all duration-500 ease-in-out'
              >
                Terms of use
              </a>{' '}
              and{' '}
              <a
                href='/pages/privacy-policy'
                className='text-black underline hover:text-blue-500 transition-all duration-500 ease-in-out'
              >
                Privacy Policy
              </a>
            </p>
            <Button type='submit' className='btn login-btn min-w-[150px]'>
              Log in
            </Button>
            <p className='text-sm'>
              Don't have an account?{' '}
              <a
                href='/register'
                className='text-[#7c34c8] underline font-bold hover:text-blue-500 transition-all duration-500 ease-in-out'
              >
                Signup
              </a>
            </p>
          </div>
        </div>
      </form>
    </Form>
  )
}
