"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginFormSchema, type LoginFormData } from "@/types/schemas"
import styles from "./page.module.css"

export default function LoginPage() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: LoginFormData) {
    console.log(values)
    // Handle login logic here
    alert("Inloggning genomförd!")
  }

  return (
    <div className={styles.page}>
      <Header />

      {/* Login Form Section */}
      <section className={styles.loginSection}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Logga in på ditt konto</h2>
              <p className={styles.formSubtitle}>
                Ange dina uppgifter för att fortsätta
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-post</FormLabel>
                      <FormControl>
                        <Input placeholder="din@epost.se" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lösenord</FormLabel>
                      <FormControl>
                        <Input placeholder="••••••••" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                >
                  Logga in
                </Button>
              </form>
            </Form>

            <div className={styles.formFooter}>
              <p>
                Glömt lösenord? <a href="/reset-password" className={styles.link}>Återställ här</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
