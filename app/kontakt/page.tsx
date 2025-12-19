"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
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
import { Textarea } from "@/components/ui/textarea"
import { contactFormSchema, type ContactFormData } from "@/types/schemas"
import styles from "./page.module.css"

export default function KontaktPage() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  })

  function onSubmit(values: ContactFormData) {
    console.log(values)
    // Här kan du hantera formuläret (t.ex. skicka till en API)
    alert("Tack för ditt meddelande! Vi återkommer så snart som möjligt.")
    form.reset()
  }

  return (
    <div className={styles.page}>
      <Header />

      <HeroSection
        title="Ta kontakt med oss idag!"
        subtitle="Har du frågor eller vill diskutera ett projekt? Tveka inte att kontakta oss så återkommer vi snabbt vi kan."
      />

      {/* Kontakt Section */}
      <section className={styles.kontaktSection}>
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <h2 className={styles.heading}>
              Skicka ett meddelande
            </h2>
            <p className={styles.subheading}>
              Fyll i formuläret nedan så återkommer vi så snart som möjligt.
            </p>
          </div>

          <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Namn *</FormLabel>
                        <FormControl>
                          <Input placeholder="Ditt namn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-post *</FormLabel>
                        <FormControl>
                          <Input placeholder="din@epost.se" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon</FormLabel>
                        <FormControl>
                          <Input placeholder="+46 XX XXX XX XX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Företag</FormLabel>
                        <FormControl>
                          <Input placeholder="Ditt företag" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meddelande *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Beskriv hur vi kan hjälpa dig..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-900 hover:bg-blue-700 text-white"
                    size="lg"
                  >
                    Skicka meddelande
                  </Button>
                </form>
              </Form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
