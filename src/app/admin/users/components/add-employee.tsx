// 'use client'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger
// } from '@/components/ui/dialog'
// import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { useAlert } from '@/context/AlertContext'
// import { handleErrorApi } from '@/lib/utils'
// import { useAddAccountMutation } from '@/queries/useAccount'
// import { useUploadMediaMutation } from '@/queries/useMedia'
// import { CreateEmployeeAccountBody, CreateEmployeeAccountBodyType } from '@/schemaValidations/account.schema'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { PlusCircle, Upload } from 'lucide-react'
// import { useMemo, useRef, useState } from 'react'
// import { useForm } from 'react-hook-form'

// export default function AddEmployee() {
//   const [open, setOpen] = useState(false)
//   const avatarInputRef = useRef<HTMLInputElement | null>(null)
//   const [fileImage, setFileImage] = useState<File | null>(null)
//   const addAccountMutation = useAddAccountMutation()
//   const upLoadMediaMutation = useUploadMediaMutation()
//   const { showAlert } = useAlert()
//   const form = useForm<CreateEmployeeAccountBodyType>({
//     resolver: zodResolver(CreateEmployeeAccountBody),
//     defaultValues: {
//       name: '',
//       email: '',
//       avatar: undefined,
//       password: '',
//       confirmPassword: ''
//     }
//   })
//   const avatar = form.watch('avatar')
//   const name = form.watch('name')
//   const previewAvatar = useMemo(() => {
//     if (fileImage) {
//       return URL.createObjectURL(fileImage)
//     }
//     return avatar
//   }, [fileImage, avatar])

//   const reset = () => {
//     form.reset()
//     setFileImage(null)
//   }

//   const onSubmit = async (values: CreateEmployeeAccountBodyType) => {
//     if (addAccountMutation.isPending) return
//     try {
//       let body = values
//       if (fileImage) {
//         const formData = new FormData()
//         formData.append('file', fileImage)

//         const uploadImageResult = await upLoadMediaMutation.mutateAsync(formData)
//         const imageUrl = uploadImageResult.payload.data
//         body = { ...values, avatar: imageUrl }
//       }
//       const result = await addAccountMutation.mutateAsync(body)
//       showAlert(result.payload.message, 'success')
//       reset()
//       setOpen(false)
//     } catch (error) {
//       handleErrorApi({
//         error,
//         setError: form.setError
//       })
//     }
//   }
//   return (
//     <Dialog onOpenChange={setOpen} open={open}>
//       <DialogTrigger asChild>
//         <Button size='sm' className='h-7 gap-1'>
//           <PlusCircle className='h-3.5 w-3.5' />
//           <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Tạo tài khoản</span>
//         </Button>
//       </DialogTrigger>
//       <DialogContent className='sm:max-w-[600px] max-h-screen overflow-auto'>
//         <DialogHeader>
//           <DialogTitle>Tạo tài khoản</DialogTitle>
//           <DialogDescription>Các trường tên, email, mật khẩu là bắt buộc</DialogDescription>
//         </DialogHeader>
//         <Form {...form}>
//           <form
//             noValidate
//             className='grid auto-rows-max items-start gap-4 md:gap-8'
//             id='add-employee-form'
//             onSubmit={form.handleSubmit(onSubmit)}
//           >
//             <div className='grid gap-4 py-4'>
//               <FormField
//                 control={form.control}
//                 name='avatar'
//                 render={({ field }) => (
//                   <FormItem>
//                     <div className='flex gap-2 items-start justify-start'>
//                       <Avatar className='aspect-square w-[100px] h-[100px] rounded-md object-cover'>
//                         <AvatarImage src={previewAvatar} />
//                         <AvatarFallback className='rounded-none'>{name ? name : 'Avatar'}</AvatarFallback>
//                       </Avatar>
//                       <input
//                         type='file'
//                         accept='image/*'
//                         ref={avatarInputRef}
//                         onChange={(e) => {
//                           const file = e.target.files?.[0]
//                           if (file) {
//                             setFileImage(file)
//                             field.onChange('http://localhost:3000/' + file.name)
//                           }
//                         }}
//                         className='hidden'
//                       />
//                       <button
//                         className='flex aspect-square w-[100px] items-center justify-center rounded-md border border-dashed'
//                         type='button'
//                         onClick={() => avatarInputRef.current?.click()}
//                       >
//                         <Upload className='h-4 w-4 text-muted-foreground' />
//                         <span className='sr-only'>Upload</span>
//                       </button>
//                     </div>
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name='name'
//                 render={({ field }) => (
//                   <FormItem>
//                     <div className='grid grid-cols-4 items-center justify-items-start gap-4'>
//                       <Label htmlFor='name'>Tên</Label>
//                       <div className='col-span-3 w-full space-y-2'>
//                         <Input id='name' className='w-full' {...field} />
//                         <FormMessage />
//                       </div>
//                     </div>
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name='email'
//                 render={({ field }) => (
//                   <FormItem>
//                     <div className='grid grid-cols-4 items-center justify-items-start gap-4'>
//                       <Label htmlFor='email'>Email</Label>
//                       <div className='col-span-3 w-full space-y-2'>
//                         <Input id='email' className='w-full' {...field} />
//                         <FormMessage />
//                       </div>
//                     </div>
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name='password'
//                 render={({ field }) => (
//                   <FormItem>
//                     <div className='grid grid-cols-4 items-center justify-items-start gap-4'>
//                       <Label htmlFor='password'>Mật khẩu</Label>
//                       <div className='col-span-3 w-full space-y-2'>
//                         <Input id='password' className='w-full' type='password' {...field} />
//                         <FormMessage />
//                       </div>
//                     </div>
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name='confirmPassword'
//                 render={({ field }) => (
//                   <FormItem>
//                     <div className='grid grid-cols-4 items-center justify-items-start gap-4'>
//                       <Label htmlFor='confirmPassword'>Xác nhận mật khẩu</Label>
//                       <div className='col-span-3 w-full space-y-2'>
//                         <Input id='confirmPassword' className='w-full' type='password' {...field} />
//                         <FormMessage />
//                       </div>
//                     </div>
//                   </FormItem>
//                 )}
//               />
//             </div>
//           </form>
//         </Form>
//         <DialogFooter>
//           <Button type='submit' form='add-employee-form'>
//             Thêm
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }
